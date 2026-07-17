let materialData = {};
let projectDatabase = [];
let selectedInventory = [];
let currentProject = null;
let currentStep = 0;

document.addEventListener("DOMContentLoaded", async () => {
    await loadDatabaseAPI();
    restoreState();
    window.onclick = function(e) { 
        const modal = document.getElementById('manual-modal');
        if (e.target == modal) closeManual(); 
    };
});

async function loadDatabaseAPI() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error("Veritabanına ulaşılamadı.");
        
        const data = await response.json();
        materialData = data.materials;
        projectDatabase = data.projects;

        const sortedNames = Object.keys(materialData).sort((a, b) => a.localeCompare(b, 'tr'));
        renderInventory(sortedNames);
    } catch (error) {
        console.error("API Hatası (Data Yüklenemedi):", error);
    }
}

function saveState() {
    localStorage.setItem("userWorkshopState", JSON.stringify(selectedInventory));
}

function restoreState() {
    const saved = localStorage.getItem("userWorkshopState");
    if (saved) {
        const previousInventory = JSON.parse(saved);
        previousInventory.forEach(itemName => {
            if (materialData[itemName]) {
                addToTable(itemName, true);
            }
        });
    }
}

function renderInventory(items) {
    const list = document.getElementById('inventory-list');
    if (!list) return;
    list.innerHTML = "";
    items.forEach(name => {
        const data = materialData[name];
        const div = document.createElement('div');
        div.className = 'inv-item';
        div.innerHTML = `<strong>${name}</strong><p style="font-size:10px; color:#aaa; margin:5px 0;">${data.desc}</p>`;
        div.onclick = () => addToTable(name, false);
        list.appendChild(div);
    });
}

function addToTable(name, isRestoring = false) {
    if (!selectedInventory.includes(name)) {
        selectedInventory.push(name);
        document.getElementById('part-count').innerText = selectedInventory.length;
        
        const imgSrc = materialData[name].img || 'assets/placeholder.png';
        const itemContainer = document.createElement('div');
        itemContainer.className = "placed-part";
        itemContainer.style.position = "absolute";
        itemContainer.style.left = `${Math.random() * 65 + 10}%`;
        itemContainer.style.top = `${Math.random() * 45 + 15}%`;
        
        itemContainer.innerHTML = `
            <div style="position:relative; text-align:center; cursor:pointer;" onclick="removeFromTable('${name}', this.parentElement)">
                <span style="position:absolute; top:-12px; right:-12px; background:#ff4d4d; color:white; border-radius:50%; width:22px; height:22px; font-size:13px; display:flex; align-items:center; justify-content:center; z-index:100; border:1px solid #fff; font-weight:bold;">×</span>
                <img src="${imgSrc}" width="80" style="border: 2px solid #00f3ff; border-radius: 8px; background: #fff; box-shadow: 0 0 10px rgba(0,243,255,0.3);" onerror="this.onerror=null; this.src='assets/placeholder.png';">
                <div style="font-size: 10px; color: #00f3ff; font-weight: bold; margin-top: 5px; text-shadow: 1px 1px 2px #000;">${name}</div>
            </div>`;
        
        document.getElementById('table-canvas').appendChild(itemContainer);
        checkProjects();
        if (!isRestoring) saveState();
    }
}

function removeFromTable(name, element) {
    selectedInventory = selectedInventory.filter(item => item !== name);
    element.remove();
    document.getElementById('part-count').innerText = selectedInventory.length;
    checkProjects();
    saveState();
}

function checkProjects() {
    const available = projectDatabase.filter(proj => proj.required.every(req => selectedInventory.includes(req)));
    const linkBox = document.getElementById('project-links');
    if (!linkBox) return;
    
    if (available.length > 0) {
        linkBox.innerHTML = available.map(p => `<button class="project-btn" onclick="openManual('${p.id}')">${p.name}</button>`).join('');
    } else {
        linkBox.innerHTML = `<p style="font-size: 11px; color: #888;">Gerekli parçaları ekleyin.</p>`;
    }
}

function openManual(id) {
    currentProject = projectDatabase.find(p => p.id === id);
    currentStep = 0;
    updateStepUI();
    document.getElementById('manual-modal').style.display = "block";
}

function updateStepUI() {
    if (!currentProject) return;
    const step = currentProject.steps[currentStep];
    const imgEl = document.getElementById('m-project-img');
    
    document.getElementById('m-project-name').innerText = currentProject.name;
    document.getElementById('step-indicator').innerText = `ADIM ${currentStep + 1} / ${currentProject.steps.length}`;
    document.getElementById('m-project-steps').innerText = step.text;
    
    imgEl.style.display = 'block';
    imgEl.src = step.img;
    imgEl.onerror = function() {
        this.style.display = 'none';
        if (!document.getElementById('error-msg')) {
            const err = document.createElement('div');
            err.id = 'error-msg';
            err.style.color = '#ff4d4d';
            err.style.padding = '20px';
            err.innerText = "Görsel yüklenemedi. Lütfen dosya yolunu kontrol edin.";
            imgEl.parentElement.appendChild(err);
        }
    };
    
    document.getElementById('m-project-parts').innerHTML = currentProject.required
        .map(p => `<span class="part-tag">${p}</span>`).join('');
}

function nextStep() { if (currentProject && currentStep < currentProject.steps.length - 1) { currentStep++; updateStepUI(); } }
function prevStep() { if (currentProject && currentStep > 0) { currentStep--; updateStepUI(); } }
function closeManual() { 
    document.getElementById('manual-modal').style.display = "none"; 
    const err = document.getElementById('error-msg');
    if (err) err.remove();
}

function searchParts() {
    const term = document.getElementById('partSearch').value.toLowerCase();
    const filtered = Object.keys(materialData).filter(name => name.toLowerCase().includes(term)).sort((a, b) => a.localeCompare(b, 'tr'));
    renderInventory(filtered);
}
