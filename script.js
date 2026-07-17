let materialData = {};
let projectDatabase = [];
let selectedInventory = [];
let currentProject = null;
let currentStep = 0;

// URL'yi temizleyen ve tarayıcı dostu yapan yardımcı fonksiyon
function getFixedPath(path) {
    if (!path) return 'assets/placeholder.png';
    const parts = path.split('/');
    const fileName = parts.pop();
    const folderPath = parts.join('/');
    return folderPath + '/' + encodeURIComponent(fileName);
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadDatabaseAPI();
    restoreState();
});

async function loadDatabaseAPI() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error("Dosya bulunamadı.");
        const data = await response.json();
        
        // Verinin dolu olduğunu kontrol et
        if (!data.materials) throw new Error("JSON formatı hatalı.");
        
        materialData = data.materials;
        projectDatabase = data.projects;
        renderInventory(Object.keys(materialData).sort((a, b) => a.localeCompare(b, 'tr')));
    } catch (error) { 
        console.error("Yükleme Hatası:", error);
        alert("Envanter yüklenemedi, konsolu kontrol edin.");
    }
}

function addToTable(name, isRestoring = false) {
    if (!selectedInventory.includes(name)) {
        selectedInventory.push(name);
        document.getElementById('part-count').innerText = selectedInventory.length;
        
        const imgSrc = getFixedPath(materialData[name].img);
        const itemContainer = document.createElement('div');
        itemContainer.className = "placed-part";
        itemContainer.style.position = "absolute";
        itemContainer.style.left = `${Math.random() * 65 + 10}%`;
        itemContainer.style.top = `${Math.random() * 45 + 15}%`;
        
        itemContainer.innerHTML = `
            <div style="position:relative; text-align:center; cursor:pointer;" onclick="removeFromTable('${name}', this.parentElement)">
                <span style="position:absolute; top:-12px; right:-12px; background:#ff4d4d; color:white; border-radius:50%; width:22px; height:22px; font-size:13px; display:flex; align-items:center; justify-content:center; z-index:100; border:1px solid #fff; font-weight:bold;">×</span>
                <img src="${imgSrc}" width="80" style="border: 2px solid #00f3ff; border-radius: 8px; background: #fff;" onerror="this.src='assets/placeholder.png'">
                <div style="font-size: 10px; color: #00f3ff; font-weight: bold; margin-top: 5px;">${name}</div>
            </div>`;
        
        document.getElementById('table-canvas').appendChild(itemContainer);
        checkProjects();
        if (!isRestoring) localStorage.setItem("userWorkshopState", JSON.stringify(selectedInventory));
    }
}

function updateStepUI() {
    if (!currentProject) return;
    const step = currentProject.steps[currentStep];
    const imgEl = document.getElementById('m-project-img');
    
    document.getElementById('m-project-name').innerText = currentProject.name;
    document.getElementById('step-indicator').innerText = `ADIM ${currentStep + 1} / ${currentProject.steps.length}`;
    document.getElementById('m-project-steps').innerText = step.text;
    
    imgEl.style.display = 'block';
    imgEl.src = getFixedPath(step.img);
    
    imgEl.onerror = function() {
        this.style.display = 'none';
        console.error("Görsel yüklenemedi:", this.src);
    };
    
    document.getElementById('m-project-parts').innerHTML = currentProject.required
        .map(p => `<span class="part-tag">${p}</span>`).join('');
}

// Diğer yardımcı fonksiyonlar (restoreState, removeFromTable, checkProjects, closeManual, searchParts) 
// aynı şekilde kalabilir.
