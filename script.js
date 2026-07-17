console.log("JS ÇALIŞIYOR!");
let materialData = {};
let projectDatabase = [];
let selectedInventory = [];
let currentProject = null;
let currentStep = 0;

document.addEventListener("DOMContentLoaded", async () => {
    await loadDatabaseAPI();
});

async function loadDatabaseAPI() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error("JSON dosyası bulunamadı!");
        
        const data = await response.json();
        materialData = data.materials;
        projectDatabase = data.projects;

        const sortedNames = Object.keys(materialData).sort((a, b) => a.localeCompare(b, 'tr'));
        renderInventory(sortedNames);
    } catch (error) {
        console.error("Yükleme Hatası:", error);
    }
}

function renderInventory(items) {
    const list = document.getElementById('inventory-list');
    list.innerHTML = "";
    items.forEach(name => {
        const data = materialData[name];
        const div = document.createElement('div');
        div.className = 'inv-item';
        div.innerHTML = `<strong>${name}</strong><p style="font-size:10px; color:#aaa; margin:5px 0;">${data.desc}</p>`;
        div.onclick = () => addToTable(name);
        list.appendChild(div);
    });
}

function addToTable(name) {
    if (!selectedInventory.includes(name)) {
        selectedInventory.push(name);
        document.getElementById('part-count').innerText = selectedInventory.length;
        
        const itemContainer = document.createElement('div');
        itemContainer.style.position = "absolute";
        itemContainer.style.left = `${Math.random() * 60 + 10}%`;
        itemContainer.style.top = `${Math.random() * 40 + 20}%`;
        itemContainer.innerHTML = `
            <div style="text-align:center; cursor:pointer;" onclick="this.parentElement.remove(); removeFromList('${name}')">
                <img src="${materialData[name].img}" width="70" style="border: 2px solid #00f3ff; border-radius: 8px; background:#fff;">
                <div style="font-size: 10px; color: #00f3ff; margin-top:5px;">${name}</div>
            </div>
        `;
        document.getElementById('table-canvas').appendChild(itemContainer);
        checkProjects();
    }
}

function removeFromList(name) {
    selectedInventory = selectedInventory.filter(item => item !== name);
    document.getElementById('part-count').innerText = selectedInventory.length;
    checkProjects();
}

function checkProjects() {
    const linkBox = document.getElementById('project-links');
    const available = projectDatabase.filter(p => p.required.every(req => selectedInventory.includes(req)));
    
    if (available.length > 0) {
        linkBox.innerHTML = available.map(p => 
            `<button class="project-btn" onclick="openManual('${p.id}')">${p.name}</button>`
        ).join('');
    } else {
        linkBox.innerHTML = `<p style="font-size: 11px; color: #888;">Gerekli parçaları ekleyin.</p>`;
    }
}

function openManual(id) {
    currentProject = projectDatabase.find(p => p.id === id);
    currentStep = 0;
    document.getElementById('manual-modal').style.display = "block";
    updateStepUI();
}

function updateStepUI() {
    const step = currentProject.steps[currentStep];
    document.getElementById('m-project-name').innerText = currentProject.name;
    document.getElementById('step-indicator').innerText = `ADIM ${currentStep + 1} / ${currentProject.steps.length}`;
    document.getElementById('m-project-steps').innerText = step.text;
    document.getElementById('m-project-img').src = step.img;
}

function nextStep() {
    if (currentStep < currentProject.steps.length - 1) { currentStep++; updateStepUI(); }
}

function prevStep() {
    if (currentStep > 0) { currentStep--; updateStepUI(); }
}

function closeManual() {
    document.getElementById('manual-modal').style.display = "none";
}

function searchParts() {
    const term = document.getElementById('partSearch').value.toLowerCase();
    const filtered = Object.keys(materialData).filter(n => n.toLowerCase().includes(term));
    renderInventory(filtered);
}
