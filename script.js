let materialData = {};
let projectDatabase = [];
let selectedInventory = [];
let currentProject = null;
let currentStep = 0;

function getFixedPath(path) {
    if (!path) return 'assets/placeholder.png';
    // Klasör ismini bozmadan sadece dosya ismini encode ediyoruz
    const parts = path.split('/');
    const fileName = parts.pop();
    const folderPath = parts.join('/');
    return folderPath + '/' + encodeURIComponent(fileName);
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadDatabaseAPI();
    // restoreState fonksiyonunun varlığından emin ol (aşağıda ekledim)
    if(typeof restoreState === 'function') restoreState();
});

async function loadDatabaseAPI() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error("data.json dosyası bulunamadı!");
        const data = await response.json();
        
        if (!data.materials) throw new Error("JSON içinde 'materials' verisi yok.");
        
        materialData = data.materials;
        projectDatabase = data.projects;
        
        // Envanteri listele
        renderInventory(Object.keys(materialData).sort((a, b) => a.localeCompare(b, 'tr')));
    } catch (error) { 
        console.error("Yükleme Hatası:", error);
        alert("Envanter yüklenemedi: " + error.message);
    }
}

function renderInventory(items) {
    const list = document.getElementById('inventory-list');
    if (!list) return console.error("HATA: 'inventory-list' ID'li element bulunamadı!");
    
    list.innerHTML = "";
    items.forEach(name => {
        const item = document.createElement('div');
        item.className = 'inv-item';
        item.innerHTML = `<strong>${name}</strong>`;
        item.onclick = () => addToTable(name);
        list.appendChild(item);
    });
}

// Gerekli yardımcı fonksiyonlar
function restoreState() {
    const saved = localStorage.getItem("userWorkshopState");
    if (saved) {
        JSON.parse(saved).forEach(name => {
            if (materialData[name]) addToTable(name, true);
        });
    }
}

function addToTable(name, isRestoring = false) {
    if (!selectedInventory.includes(name)) {
        selectedInventory.push(name);
        const countEl = document.getElementById('part-count');
        if (countEl) countEl.innerText = selectedInventory.length;
        
        const imgSrc = getFixedPath(materialData[name].img);
        const canvas = document.getElementById('table-canvas');
        if (!canvas) return;

        const itemContainer = document.createElement('div');
        itemContainer.className = "placed-part";
        itemContainer.style.position = "absolute";
        itemContainer.style.left = `${Math.random() * 60 + 15}%`;
        itemContainer.style.top = `${Math.random() * 40 + 10}%`;
        
        itemContainer.innerHTML = `
            <div style="text-align:center;" onclick="this.parentElement.remove()">
                <img src="${imgSrc}" width="60" onerror="this.src='assets/placeholder.png'">
                <div style="font-size:10px; color:#00f3ff;">${name}</div>
            </div>`;
        canvas.appendChild(itemContainer);
        
        if (!isRestoring) localStorage.setItem("userWorkshopState", JSON.stringify(selectedInventory));
    }
}
