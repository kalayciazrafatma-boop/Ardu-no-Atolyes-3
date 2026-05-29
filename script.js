// ARDUINO LAB
const materialData = {
    "24V Röle": { img: "Arduino%20Atölyesi/24v_role.jpg", desc: "Yüksek voltajlı cihazları kontrol etmek içindir." },
    "7 Segment Ekran": { img: "Arduino%20Atölyesi/7segment_ekran.jpg", desc: "Rakamları göstermek için kullanılan LED ekran." },
    "9V Pil": { img: "Arduino%20Atölyesi/9v_pil.jpg", desc: "Devreye enerji sağlayan temel güç kaynağı." },
    "ADXL345 Eğim Sensörü": { img: "Arduino%20Atölyesi/adxl345.jpg", desc: "Hassas eğim ve ivme ölçümü yapar." },
    "Alev Sensörü": { img: "Arduino%20Atölyesi/ates_sensoru.jpg", desc: "Yangın ve kızılötesi ışığı algılar." },
    "Arduino Nano": { img: "Arduino%20Atölyesi/arduino_nano.jpg", desc: "Kompakt mikrodenetleyici." },
    "Arduino Uno R3": { img: "Arduino%20Atölyesi/arduino_uno.jpg", desc: "Sistemin beyni, kodları işleyen ana merkez." },
    "Breadboard": { img: "Arduino%20Atölyesi/breadboard.jpg", desc: "Lehimsiz devre kurma test tahtası." },
    "Buton": { img: "Arduino%20Atölyesi/buton.jpg", desc: "Basıldığında sinyal gönderen anahtar." },
    "Buzzer": { img: "Arduino%20Atölyesi/buzzer.jpg", desc: "Sesli uyarı ve sinyal vermeyi sağlar." },
    "Çizgi Sensörü": { img: "Arduino%20Atölyesi/cizgi_sensoru.jpg", desc: "Siyah ve beyaz zemini ayırt eder." },
    "DC Motor": { img: "Arduino%20Atölyesi/dc_motor.jpg", desc: "Dönme hareketi sağlayan motor." },
    "DHT11 Sıcaklık Sensörü": { img: "Arduino%20Atölyesi/sicaklik_sensoru.jpg", desc: "Sıcaklık ve nem ölçer." },
    "Dijital Amplifikatör": { img: "Arduino%20Atölyesi/dijital_amplifikator.jpg", desc: "Ses sinyallerini yükseltir." },
    "DIP Switch": { img: "Arduino%20Atölyesi/dip_switch.jpg", desc: "Çoklu ayar anahtarı." },
    "Direnç": { img: "Arduino%20Atölyesi/direnc.jpg", desc: "Akımı sınırlayarak parçaları korur." },
    "ESP32-Cam": { img: "Arduino%20Atölyesi/esp32_cam.jpg", desc: "WiFi kamera ve AI modülü." },
    "Gaz Sensörü": { img: "Arduino%20Atölyesi/gaz_sensoru.jpg", desc: "Gaz kaçaklarını algılar." },
    "GPS Modülü": { img: "Arduino%20Atölyesi/gps_modulu.jpg", desc: "Uydu üzerinden konum verisi sağlar." },
    "HC-06 Bluetooth": { img: "Arduino%20Atölyesi/hc06_bluetooth.jpg", desc: "Kablosuz kontrol sağlar." },
    "IR Kumanda Kiti": { img: "Arduino%20Atölyesi/ir_kumanda_kit.jpg", desc: "Uzaktan kumanda seti." },
    "Joystick": { img: "Arduino%20Atölyesi/joystick.jpg", desc: "Manuel yön kontrol kolu." },
    "Jumper Kablo": { img: "Arduino%20Atölyesi/jumper.jpg", desc: "Bileşenler arası bağlantı kurar." },
    "Keypad": { img: "Arduino%20Atölyesi/keypad.jpg", desc: "Sayısal tuş takımı." },
    "L298N Motor Sürücü": { img: "Arduino%20Atölyesi/l298n.jpg", desc: "Motor hız ve yön kontrolü." },
    "LCD Ekran": { img: "Arduino%20Atölyesi/lcd_ekran.jpg", desc: "Bilgi yazdırma ekranı." },
    "LDR Işık Sensörü": { img: "Arduino%20Atölyesi/ldr_sensor.jpg", desc: "Işık şiddetini ölçer." },
    "LED": { img: "Arduino%20Atölyesi/led.jpg", desc: "Işıklı bildirim elemanı." },
    "Li-Po Batarya": { img: "Arduino%20Atölyesi/lipo_batarya.jpg", desc: "Yüksek kapasiteli batarya." },
    "Mesafe Sensörü": { img: "Arduino%20Atölyesi/mesafe_sensoru.jpg", desc: "Engel mesafesini ölçer." },
    "Mikrofon Modülü": { img: "Arduino%20Atölyesi/mikrofon_modulu.jpg", desc: "Ses şiddetini algılar." },
    "Multimetre": { img: "Arduino%20Atölyesi/multimetre.jpg", desc: "Ölçüm ve test cihazı." },
    "Nabız Sensörü": { img: "Arduino%20Atölyesi/nabiz_sensoru.jpg", desc: "Kalp atış hızını ölçer." },
    "Nem Kontrol": { img: "Arduino%20Atölyesi/nem_kontrol.jpg", desc: "Toprak nemini ölçer." },
    "OLED Ekran": { img: "Arduino%20Atölyesi/oled_ekran.jpg", desc: "Grafik bilgi ekranı." },
    "Parmak İzi": { img: "Arduino%20Atölyesi/parmak_izi.jpg", desc: "Biyometrik doğrulama." },
    "PIR Sensör": { img: "Arduino%20Atölyesi/pir_sensor.jpg", desc: "Hareket algılayıcı." },
    "Potansiyometre": { img: "Arduino%20Atölyesi/potansiyometre.jpg", desc: "Ayarlı direnç." },
    "Redüktörlü Motor": { img: "Arduino%20Atölyesi/reduktorlu_motor.jpg", desc: "Güçlü dişli motor." },
    "RFID Kit": { img: "Arduino%20Atölyesi/rfid_kit.jpg", desc: "Kartlı geçiş sistemi." },
    "RTC Saat Modülü": { img: "Arduino%20Atölyesi/rtc_modul.jpg", desc: "Gerçek zamanlı saat." },
    "Servo Motor": { img: "Arduino%20Atölyesi/servo.jpg", desc: "Hassas açılı motor." },
    "Sigorta": { img: "Arduino%20Atölyesi/sigorta.jpg", desc: "Devre koruma elemanı." },
    "Step Motor": { img: "Arduino%20Atölyesi/step_motor.jpg", desc: "Adımlı hassas motor." },
    "Su Pompası": { img: "Arduino%20Atölyesi/su_pompasi.jpg", desc: "Sıvı aktarma motoru." },
    "Tekerlek": { img: "Arduino%20Atölyesi/Tekerlek.jpg", desc: "Robot tekerleği." },
    "Toz Sensörü": { img: "Arduino%20Atölyesi/toz_sensoru.jpg", desc: "Toz miktarını ölçer." },
    "Vakum Motoru": { img: "Arduino%20Atölyesi/vakum_motoru.jpg", desc: "Süpürme motoru." },
    "Yağmur Sensörü": { img: "Arduino%20Atölyesi/yagmur_sensoru.jpg", desc: "Yağışı algılar." }
};

const projectDatabase = [
    { id: "p1", name: "Bluetooth Araba", required: ["Arduino Uno R3", "HC-06 Bluetooth", "L298N Motor Sürücü", "Redüktörlü Motor", "Tekerlek"], 
      steps: [{ img: "Ardiino%20Proje%20Görselleri/Bluetooth%20araba.png", text: "Bluetooth modülünü RX-TX pinlerine çapraz bağlayın ve motor sürücü bağlantılarını yapın." }] },
    { id: "p2", name: "Engelden Kaçan Robot", required: ["Arduino Uno R3", "Mesafe Sensörü", "Servo Motor", "L298N Motor Sürücü", "Tekerlek"], 
      steps: [{ img: "Ardiino%20Proje%20Görselleri/engelden%20kaçan%20araba.png", text: "Mesafe sensörünü servo üzerine monte edip otonom sürüş kodunu yükleyin." }] },
    { id: "p3", name: "RFID Kapı Sistemi", required: ["Arduino Uno R3", "RFID Kit", "Servo Motor", "LCD Ekran"], 
      steps: [{ img: "Ardiino%20Proje%20Görselleri/rfid%20kapı%20sistemi.png", text: "RFID SPI bağlantılarını kurun ve tanımlı kart okunduğunda kilidi açacak servoyu programlayın." }] },
    { id: "p16", name: "Akıllı Park Sensörü", required: ["Arduino Uno R3", "Mesafe Sensörü", "Buzzer", "LED"], 
      steps: [{ img: "Ardiino%20Proje%20Görselleri/park%20sensörü.jpg", text: "Mesafeye göre buzzer ve LED hızını ayarlayan sistemi kurun." }] },
    { id: "p19", name: "Labirent Oyunu", required: ["Arduino Nano", "Joystick", "Servo Motor"], 
      steps: [{ img: "Ardiino%20Proje%20Görselleri/labirent%20oyunu.jpg", text: "Servo motorlarla labirent tablasına Joystick üzerinden yön verin." }] },
    { id: "p20", name: "Otto Robot", required: ["Arduino Nano", "Servo Motor", "Mesafe Sensörü"], 
      steps: [{ img: "Ardiino%20Proje%20Görselleri/otto%20robot.jpg", text: "Arduino Nano ile bacak mekanizmasını kontrol edin." }] },
    { id: "p24", name: "Akıllı Saat", required: ["Arduino Nano", "RTC Saat Modülü", "OLED Ekran", "Nabız Sensörü"], 
      steps: [{ img: "Ardiino%20Proje%20Görselleri/akıllı%20saat.jpg", text: "Zaman ve nabız verilerini OLED ekranda grafikleyin." }] },
    { id: "p26", name: "Parmak İzi Kasa", required: ["Arduino Nano", "Parmak İzi", "Step Motor", "OLED Ekran"], 
      steps: [{ img: "Ardiino%20Proje%20Görselleri/parmak%20izi%20okuyucu%20ile%20kasa%20kilidi.jpg", text: "Tanımlı parmak okunduğunda step motor ile kilidi açın." }] },
    { id: "p27", name: "Robot Süpürge", required: ["Arduino Uno R3", "Mesafe Sensörü", "Vakum Motoru", "Toz Sensörü", "Sarhoş Tekerlek"], 
      steps: [{ img: "Ardiino%20Proje%20Görselleri/robot%20süpürge.jpg", text: "Vakum ve sürüş sistemini aktif ederek otonom temizlik yapın." }] }
];

let selectedInventory = [];
let currentProject = null;
let currentStep = 0;

document.addEventListener("DOMContentLoaded", () => {
    const sortedNames = Object.keys(materialData).sort((a, b) => a.localeCompare(b, 'tr'));
    renderInventory(sortedNames);
    window.onclick = (e) => { if (e.target == document.getElementById('manual-modal')) closeManual(); }
});

function renderInventory(items) {
    const list = document.getElementById('inventory-list');
    if (!list) return;
    list.innerHTML = "";
    items.forEach(name => {
        const data = materialData[name];
        const div = document.createElement('div');
        div.className = 'inv-item';
        div.innerHTML = `<strong>${name}</strong><p style="font-size:10px; color:#aaa; margin-top:5px;">${data.desc}</p>`;
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
                <div style="font-size: 10px; color: #00f3ff; font-weight: bold; margin-top: 4px;">${name}</div>
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
        linkBox.innerHTML = `<p style="font-size: 11px; color: #888;">Eksik parçaları ekleyin.</p>`;
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
        parent.innerHTML = `<div style="color:#666; font-size:14px; text-align:center; padding:20px;">Görsel klasörde bulunamadı. Lütfen Ardiino Proje Görselleri klasörünü kontrol edin.</div>`;
    };
    document.getElementById('m-project-parts').innerHTML = currentProject.required.map(p => `<span class="part-tag">${p}</span>`).join('');
}

function nextStep() { if (currentProject && currentStep < currentProject.steps.length - 1) { currentStep++; updateStepUI(); } }
function prevStep() { if (currentProject && currentStep > 0) { currentStep--; updateStepUI(); } }
function closeManual() { document.getElementById('manual-modal').style.display = "none"; }
function searchParts() {
    const term = document.getElementById('partSearch').value.toLowerCase();
    const filtered = Object.keys(materialData).filter(name => name.toLowerCase().includes(term)).sort((a, b) => a.localeCompare(b, 'tr'));
    renderInventory(filtered);
}
