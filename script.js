function addToTable(name, isRestoring = false) {
    if (!selectedInventory.includes(name)) {
        selectedInventory.push(name);
        document.getElementById('part-count').innerText = selectedInventory.length;
        
        // Görselin klasör yolunu elle netleştiriyoruz:
        // Klasör adını ve dosya adını birleştiriyoruz
        const fileName = materialData[name].img.split('/').pop(); 
        const imgSrc = "ArduinoAtolyesi/" + fileName; // Klasör adını buraya elle yazdık
        
        const itemContainer = document.createElement('div');
        itemContainer.className = "placed-part";
        itemContainer.style.position = "absolute";
        itemContainer.style.left = `${Math.random() * 50 + 20}%`;
        itemContainer.style.top = `${Math.random() * 40 + 20}%`;
        
        itemContainer.innerHTML = `
            <div style="text-align:center; cursor:pointer;" onclick="this.parentElement.remove()">
                <img src="${imgSrc}" width="80" style="border: 2px solid #00f3ff; border-radius: 8px; background: #fff;" 
                onerror="this.style.display='none'; console.log('Bulunamayan görsel:', '${imgSrc}')">
                <div style="font-size: 10px; color: #00f3ff; margin-top: 5px;">${name}</div>
            </div>`;
        
        document.getElementById('table-canvas').appendChild(itemContainer);
    }
}
