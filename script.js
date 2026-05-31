// ARDUINO LAB
const materialData = {
    "24V Röle": { img: "Arduino%20Atölyesi/24v_role.jpg", desc: "Yüksek voltajlı cihaz kontrolü." },
    "7 Segment Ekran": { img: "Arduino%20Atölyesi/7segment_ekran.jpg", desc: "Rakamları gösteren LED panel." },
    "9V Pil": { img: "Arduino%20Atölyesi/9v_pil.jpg", desc: "Temel güç kaynağı." },
    "ADXL345 Eğim Sensörü": { img: "Arduino%20Atölyesi/adxl345.jpg", desc: "Hassas eğim ve ivme ölçer." },
    "Alev Sensörü": { img: "Arduino%20Atölyesi/ates_sensoru.jpg", desc: "Yangın algılama modülü." },
    "Arduino Nano": { img: "Arduino%20Atölyesi/arduino_nano.jpg", desc: "Kompakt mikrodenetleyici." },
    "Arduino Uno R3": { img: "Arduino%20Atölyesi/arduino_uno.jpg", desc: "Sistemin ana kontrol merkezi." },
    "Breadboard": { img: "Arduino%20Atölyesi/breadboard.jpg", desc: "Lehimsiz devre tahtası." },
    "Buton": { img: "Arduino%20Atölyesi/buton.jpg", desc: "Devre anahtarı." },
    "Buzzer": { img: "Arduino%20Atölyesi/buzzer.jpg", desc: "Sesli uyarı elemanı." },
    "Çizgi Sensörü": { img: "Arduino%20Atölyesi/cizgi_sensoru.jpg", desc: "Zemin okuma sensörü." },
    "DC Motor": { img: "Arduino%20Atölyesi/dc_motor.jpg", desc: "Döner hareket motoru." },
    "DHT11 Sıcaklık Sensörü": { img: "Arduino%20Atölyesi/sicaklik_sensoru.jpg", desc: "Sıcaklık ve nem ölçer." },
    "Dijital Amplifikatör": { img: "Arduino%20Atölyesi/dijital_amplifikator.jpg", desc: "Ses yükseltici." },
    "DIP Switch": { img: "Arduino%20Atölyesi/dip_switch.jpg", desc: "Çoklu ayar anahtarı." },
    "ESP32-Cam": { img: "Arduino%20Atölyesi/esp32_cam.jpg", desc: "WiFi kamera modülü." },
    "Gaz Sensörü": { img: "Arduino%20Atölyesi/gaz_sensoru.jpg", desc: "Gaz kaçağı algılayıcı." },
    "HC-06 Bluetooth": { img: "Arduino%20Atölyesi/hc06_bluetooth.jpg", desc: "Kablosuz iletişim." },
    "Joystick": { img: "Arduino%20Atölyesi/joystick.jpg", desc: "Yön kontrol kolu." },
    "Jumper Kablo": { img: "Arduino%20Atölyesi/jumper.jpg", desc: "Bağlantı kabloları." },
    "LCD Ekran": { img: "Arduino%20Atölyesi/lcd_ekran.jpg", desc: "Bilgi ekranı." },
    "Mesafe Sensörü": { img: "Arduino%20Atölyesi/mesafe_sensoru.jpg", desc: "Ultrasonik ölçer." },
    "Mikrofon Modülü": { img: "Arduino%20Atölyesi/mikrofon_modulu.jpg", desc: "Ses algılayıcı." },
    "Nabız Sensörü": { img: "Arduino%20Atölyesi/nabiz_sensoru.jpg", desc: "Kalp ritmi ölçer." },
    "OLED Ekran": { img: "Arduino%20Atölyesi/oled_ekran.jpg", desc: "Grafik ekran." },
    "Parmak İzi": { img: "Arduino%20Atölyesi/parmak_izi.jpg", desc: "Biyometrik okuyucu." },
    "Redüktörlü Motor": { img: "Arduino%20Atölyesi/reduktorlu_motor.jpg", desc: "Güçlü hareket motoru." },
    "Servo Motor": { img: "Arduino%20Atölyesi/servo.jpg", desc: "Hassas açılı motor." },
    "Su Pompası": { img: "Arduino%20Atölyesi/su_pompasi.jpg", desc: "Sıvı aktarma motoru." },
    "Tekerlek": { img: "Arduino%20Atölyesi/Tekerlek.jpg", desc: "Robot tekerleği." }
};

const projectDatabase = [
    { id: "p1", name: "1. Bluetooth Araba", required: ["Arduino Uno R3", "HC-06 Bluetooth", "L298N Motor Sürücü", "Redüktörlü Motor", "Tekerlek"], 
      steps: [{ img: "Ardıino%20Proje%20Görselleri/Bluetooth%20araba.png", text: "ADIM 1: Bluetooth modülünü ve motor sürücüyü şemaya göre bağlayın." }] },
    { id: "p2", name: "2. Engelden Kaçan Robot", required: ["Arduino Uno R3", "Mesafe Sensörü", "Servo Motor", "L298N Motor Sürücü", "Tekerlek"], 
      steps: [{ img: "Ardıino%20Proje%20Görselleri/engelden%20kaçan%20araba.png", text: "ADIM 1: Mesafe sensörünü servo üzerine monte edip otonom sürüşü kodlayın." }] },
    { id: "p3", name: "3. RFID Kapı Sistemi", required: ["Arduino Uno R3", "RFID Kit", "Servo Motor", "LCD Ekran"], 
      steps: [{ img: "Ardıino%20Proje%20Görselleri/rfıd%20kapı%20sistemi.png", text: "ADIM 1: RFID modülünü SPI pinlerine bağlayıp kilit servosunu programlayın." }] },
    { id: "p5", name: "5. Akıllı Sulama", required: ["Arduino Uno R3", "Nem Kontrol", "Su Pompası"], 
      steps: [{ img: "Ardıino%20Proje%20Görselleri/akıllı%20sulama%20.jpg", text: "ADIM 1: Nem sensörünü toprağa daldırın ve kuruma anında pompayı tetikleyin." }] },
    { id: "p12", name: "12. Nabız Ölçer", required: ["Arduino Uno R3", "Nabız Sensörü", "LCD Ekran"], 
      steps: [{ img: "Ardıino%20Proje%20Görselleri/nabız%20ölçer.jpg", text: "ADIM 1: Nabız sensörünü bağlayıp BPM değerini LCD'ye yazdırın." }] },
    { id: "p19", name: "19. Labirent Oyunu", required: ["Arduino Nano", "Joystick", "Servo Motor"], 
      steps: [{ img: "Ardıino%20Proje%20Görselleri/labirent%20oyunu.jpg", text: "Joystick ile servo motorları kontrol ederek tablayı eğin." }] },
    { id: "p20", name: "20. Otto Robot", required: ["Arduino Nano", "Servo Motor", "Mesafe Sensörü"], 
      steps: [{ img: "Ardıino%20Proje%20Görselleri/otto%20robot.jpg", text: "Nano ve 4 adet servoyu kullanarak yürüyen robotu yapın." }] },
    { id: "p24", name: "24. Akıllı Saat", required: ["Arduino Nano", "RTC Saat Modülü", "OLED Ekran"], 
      steps: [{ img: "Ardıino%20Proje%20Görselleri/akıllı%20saat.jpg", text: "Zaman ve nabız bilgilerini OLED ekranda grafikleyin." }] },
    { id: "p26", name: "26. Parmak İzi Kasa", required: ["Arduino Nano", "Parmak İzi", "Step Motor"], 
      steps: [{ img: "Ardıino%20Proje%20Görselleri/parmak%20izi%20okuyucu%20ile%20kasa%20kilidi.jpg", text: "Parmak iziyle kilidi açan güvenli sistem yapın." }] },
    { id: "p27", name: "27. Robot Süpürge", required: ["Arduino Uno R3", "Mesafe Sensörü", "Vakum Motoru", "Tekerlek"], 
      steps: [{ img: "Ardıino%20Proje%20Görselleri/robot%20süpürge.jpg", text: "Vakum sistemini aktif ederek otonom temizlik yapın." }]}
];

let selectedInventory = [];
let currentProject = null;
let currentStep = 0;

document.addEventListener("DOMContentLoaded", () => {
    const sortedNames = Object.keys(materialData).sort((a, b) => a.localeCompare(b, 'tr'));
    renderInventory(sortedNames);
    window.onclick = function(e) { if (e.target == document.getElementById('manual-modal')) closeManual(); }
});

function renderInventory(items) {
    const list = document.getElementById('inventory-list');
    if (!list) return;
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
        itemContainer.className = "placed-part";
        itemContainer.style.position = "absolute";
        itemContainer.style.left = `${Math.random() * 65 + 10}%`;
        itemContainer.style.top = `${Math.random() * 45 + 15}%`;
        itemContainer.innerHTML = `
            <div style="position:relative; text-align:center; cursor:pointer;" onclick="removeFromTable('${name}', this.parentElement)">
                <span style="position:absolute; top:-12px; right:-12px; background:#ff4d4d; color:white; border-radius:50%; width:22px; height:22px; font-size:13px; display:flex; align-items:center; justify-content:center; z-index:100; border:1px solid #fff; font-weight:bold;">×</span>
                <img src="${materialData[name].img}" width="80" style="border: 2px solid #00f3ff; border-radius: 8px; background: #fff; box-shadow: 0 0 10px rgba(0,243,255,0.3);">
                <div style="font-size: 10px; color: #00f3ff; font-weight: bold; margin-top: 5px; text-shadow: 1px 1px 2px #000;">${name}</div>
            </div>
        `;
        document.getElementById('table-canvas').appendChild(itemContainer);
        checkProjects();
    }
}

function removeFromTable(name, element) {
    selectedInventory = selectedInventory.filter(item => item !== name);
    element.remove();
    document.getElementById('part-count').innerText = selectedInventory.length;
    checkProjects();
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
    document.getElementById('m-project-name').innerText = currentProject.name;
    document.getElementById('step-indicator').innerText = `ADIM ${currentStep + 1} / ${currentProject.steps.length}`;
    document.getElementById('m-project-steps').innerText = step.text;
    const imgEl = document.getElementById('m-project-img');
    imgEl.style.display = 'block';
    imgEl.src = step.img;
    imgEl.onerror = function() {
        this.style.display = 'none';
        const parent = this.parentElement;
        parent.innerHTML = `<div style="color:#666; font-size:14px; text-align:center; padding:20px;">Görsel klasörde bulunamadı. Lütfen klasör adını (Ardıino) ve dosya adını kontrol edin.</div>`;
    };
    document.getElementById('m-project-parts').innerHTML = currentProject.required.map(p => `<span class="part-tag">${p}</span>`).join('');
}

function nextStep() { if (currentStep < currentProject.steps.length - 1) { currentStep++; updateStepUI(); } }
function prevStep() { if (currentStep > 0) { currentStep--; updateStepUI(); } }
function closeManual() { document.getElementById('manual-modal').style.display = "none"; }
function searchParts() {
    const term = document.getElementById('partSearch').value.toLowerCase();
    const filtered = Object.keys(materialData).filter(name => name.toLowerCase().includes(term)).sort((a, b) => a.localeCompare(b, 'tr'));
    renderInventory(filtered);
}
