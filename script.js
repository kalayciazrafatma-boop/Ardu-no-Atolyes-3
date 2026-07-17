let materialData = {};
let projectDatabase = [];
let selectedInventory = [];
let currentProject = null;
let currentStep = 0;

// Görsel yollarını kök dizinden çeken temiz fonksiyon
function getFixedPath(path) {
    if (!path) return 'placeholder.png'; 
    // Klasör ismini (varsa) atıp sadece dosya ismini alıyoruz
    return path.split('/').pop();
}

async function loadDatabaseAPI() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error("Dosya bulunamadı.");
        const data = await response.json();
        
        materialData = data.materials;
        projectDatabase = data.projects;
        
        renderInventory(Object.keys(materialData).sort());
    } catch (error) {
        console.error("Yükleme Hatası:", error);
    }
}

function renderInventory(items) {
    const list = document.getElementById('inventory-list');
    if (!list) return;
    list.innerHTML = "";
    items.forEach(name => {
        const div = document.createElement('div');
        div.className = 'inv-item';
        div.innerHTML = `<strong>${name}</strong>`;
        div.onclick = () => addToTable(name);
        list.appendChild(div);
    });
}

function addToTable(name) {
    if (!selectedInventory.includes(name)) {
        selectedInventory.push(name);
        document.getElementById('part-count').innerText = selectedInventory.length;
        
        // Görseli ana dizinde ara
        const fileName = getFixedPath(materialData[name].img);
        const itemContainer = document.createElement('div');
        itemContainer.className = "placed-part";
        itemContainer.style.position = "absolute";
        itemContainer.style.left = `${Math.random() * 60 + 15}%`;
        itemContainer.style.top = `${Math.random() * 40 + 15}%`;
        
        itemContainer.innerHTML = `
            <div style="text-align:center; cursor:pointer;" onclick="this.parentElement.remove()">
                <img src="${fileName}" width="80" style="border: 2px solid #00f3ff; border-radius: 8px; background: #fff;" 
                onerror="this.src='placeholder.png'; console.log('HATA: Resim bulunamadı:', '${fileName}')">
                <div style="font-size:10px; color:#00f3ff; margin-top:5px;">${name}</div>
            </div>`;
        
        document.getElementById('table-canvas').appendChild(itemContainer);
    }
}

document.addEventListener("DOMContentLoaded", loadDatabaseAPI);
