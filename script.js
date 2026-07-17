async function loadDatabaseAPI() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error("Dosya HTTP hata koduyla döndü: " + response.status);
        
        const data = await response.json();
        console.log("JSON'dan gelen veri:", data); // F12'de göreceksin
        
        if (!data.materials) throw new Error("JSON içerisinde 'materials' bölümü bulunamadı.");
        
        materialData = data.materials;
        projectDatabase = data.projects;
        renderInventory(Object.keys(materialData).sort());
        
    } catch (error) {
        document.body.innerHTML = "<h1 style='color:red;'>HATA: " + error.message + "</h1>";
        console.error("Detaylı Hata:", error);
    }
}
