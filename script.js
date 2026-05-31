// ARDUINO LAB
const materialData = {
    "24V Röle": { img: "Arduino%20Atölyesi/24v_role.jpg", desc: "Yüksek voltajlı cihaz anahtarlama." },
    "7 Segment Ekran": { img: "Arduino%20Atölyesi/7segment_ekran.jpg", desc: "Sayısal gösterge paneli." },
    "9V Pil": { img: "Arduino%20Atölyesi/9v_pil.jpg", desc: "Temel enerji kaynağı." },
    "ADXL345 Eğim Sensörü": { img: "Arduino%20Atölyesi/adxl345.jpg", desc: "Eğim ve ivme ölçer." },
    "Alev Sensörü": { img: "Arduino%20Atölyesi/ates_sensoru.jpg", desc: "Yangın algılama sensörü." },
    "Arduino Nano": { img: "Arduino%20Atölyesi/arduino_nano.jpg", desc: "Kompakt mikrodenetleyici." },
    "Arduino Uno R3": { img: "Arduino%20Atölyesi/arduino_uno.jpg", desc: "Ana kontrol ünitesi." },
    "Ateş Sensörü": { img: "Arduino%20Atölyesi/ates_sensoru.jpg", desc: "Isı ve alev algılayıcı." },
    "Breadboard": { img: "Arduino%20Atölyesi/breadboard.jpg", desc: "Lehimsiz devre tahtası." },
    "Buton": { img: "Arduino%20Atölyesi/buton.jpg", desc: "Basit devre anahtarı." },
    "Buzzer": { img: "Arduino%20Atölyesi/buzzer.jpg", desc: "Sesli uyarı elemanı." },
    "Çizgi Sensörü": { img: "Arduino%20Atölyesi/cizgi_sensoru.jpg", desc: "Zemin okuma sensörü." },
    "DC Motor": { img: "Arduino%20Atölyesi/dc_motor.jpg", desc: "Döner hareket motoru." },
    "DHT11 Sıcaklık Sensörü": { img: "Arduino%20Atölyesi/sicaklik_sensoru.jpg", desc: "Sıcaklık ve nem ölçer." },
    "Dijital Amplifikatör": { img: "Arduino%20Atölyesi/dijital_amplifikator.jpg", desc: "Ses yükseltici." },
    "DIP Switch": { img: "Arduino%20Atölyesi/dip_switch.jpg", desc: "Çoklu ayar anahtarı." },
    "Direnç": { img: "Arduino%20Atölyesi/direnc.jpg", desc: "Akım sınırlayıcı." },
    "DTMF Modülü": { img: "Arduino%20Atölyesi/dtmf_modul.jpg", desc: "Telefon sinyal çözücü." },
    "ESP32-Cam": { img: "Arduino%20Atölyesi/esp32_cam.jpg", desc: "WiFi kamera modülü." },
    "Fan Modülü": { img: "Arduino%20Atölyesi/fan_modulu.jpg", desc: "Soğutma pervanesi." },
    "Gaz Sensörü": { img: "Arduino%20Atölyesi/gaz_sensoru.jpg", desc: "Gaz kaçağı algılayıcı." },
    "GPS Modülü": { img: "Arduino%20Atölyesi/gps_modulu.jpg", desc: "Konum belirleme." },
    "Güneş Paneli": { img: "Arduino%20Atölyesi/gunes_paneli.jpg", desc: "Işıktan enerji üretir." },
    "Havya": { img: "Arduino%20Atölyesi/havya.jpg", desc: "Lehimleme aracı." },
    "HC-06 Bluetooth": { img: "Arduino%20Atölyesi/hc06_bluetooth.jpg", desc: "Kablosuz iletişim." },
    "IR Kumanda Kiti": { img: "Arduino%20Atölyesi/ir_kumanda_kit.jpg", desc: "Uzaktan kontrol seti." },
    "Işık Sensörü (LDR)": { img: "Arduino%20Atölyesi/ldr_sensor.jpg", desc: "Işık şiddeti ölçer." },
    "Joystick": { img: "Arduino%20Atölyesi/joystick.jpg", desc: "Yön kontrol kolu." },
    "Jumper Kablo": { img: "Arduino%20Atölyesi/jumper.jpg", desc: "Bağlantı kabloları." },
    "Kalıcı Buton": { img: "Arduino%20Atölyesi/kalici_buton.jpg", desc: "Konumunu koruyan anahtar." },
    "Kamera Modülü": { img: "Arduino%20Atölyesi/kamera_modulu.jpg", desc: "Görüntü sensörü." },
    "Kenar Sensörü": { img: "Arduino%20Atölyesi/kenar_sensorı.jpg", desc: "Boşluk algılayıcı." },
    "Keypad": { img: "Arduino%20Atölyesi/keypad.jpg", desc: "Sayısal tuş takımı." },
    "Kondansatör": { img: "Arduino%20Atölyesi/kondansator.jpg", desc: "Enerji depolayıcı." },
    "Krokodil Kablo": { img: "Arduino%20Atölyesi/krokodil.jpg", desc: "Kıskaçlı test kablosu." },
    "Kumpas": { img: "Arduino%20Atölyesi/kumpas.jpg", desc: "Hassas ölçüm aracı." },
    "L293D Entegre": { img: "Arduino%20Atölyesi/l293d.jpg", desc: "Motor sürücü." },
    "L298N Motor Sürücü": { img: "Arduino%20Atölyesi/l298n.jpg", desc: "Motor yön kontrolü." },
    "LCD Ekran": { img: "Arduino%20Atölyesi/lcd_ekran.jpg", desc: "Yazı gösterge ekranı." },
    "LED": { img: "Arduino%20Atölyesi/led.jpg", desc: "Işıklı bildirim." },
    "Lehim Pastası": { img: "Arduino%20Atölyesi/lehim_pastasi.jpg", desc: "Lehimleme yardımcısı." },
    "Lehim Pompası": { img: "Arduino%20Atölyesi/lehim_pompasi.jpg", desc: "Eski lehimi çekme." },
    "Lehim Standı": { img: "Arduino%20Atölyesi/lehim_standi.jpg", desc: "Havya taşıyıcı." },
    "Lehim Teli": { img: "Arduino%20Atölyesi/lehim_teli.jpg", desc: "Bağlantı metali." },
    "Li-Po Batarya": { img: "Arduino%20Atölyesi/li-po_batarya.jpg", desc: "Yüksek kapasiteli güç." },
    "Makaron": { img: "Arduino%20Atölyesi/makaron.jpg", desc: "Kablo yalıtımı." },
    "Manyetik Kontak": { img: "Arduino%20Atölyesi/manyetik_kontak.jpg", desc: "Güvenlik sensörü." },
    "Mesafe Sensörü": { img: "Arduino%20Atölyesi/mesafe_sensoru.jpg", desc: "Mesafe ölçer." },
    "Mikrofon Modülü": { img: "Arduino%20Atölyesi/mikrofon_modulu.jpg", desc: "Ses algılayıcı." },
    "Multimetre": { img: "Arduino%20Atölyesi/multimetre.jpg", desc: "Ölçüm cihazı." },
    "Nabız Sensörü": { img: "Arduino%20Atölyesi/nabiz_sensoru.jpg", desc: "Kalp ritmi ölçer." },
    "Nem Kontrol": { img: "Arduino%20Atölyesi/nem_kontrol.jpg", desc: "Toprak nem ölçer." },
    "OLED Ekran": { img: "Arduino%20Atölyesi/oled_ekran.jpg", desc: "Grafik ekran." },
    "Parmak İzi": { img: "Arduino%20Atölyesi/parmak_izi.jpg", desc: "Biyometrik okuyucu." },
    "Piezo Buzzer": { img: "Arduino%20Atölyesi/piezo_buzzer.jpg", desc: "Titreşimli ses." },
    "Pil Yuvası": { img: "Arduino%20Atölyesi/pil_yuvasi.jpg", desc: "Güç bağlantısı." },
    "PIR Sensör": { img: "Arduino%20Atölyesi/pir_sensor.jpg", desc: "Hareket algılayıcı." },
    "Potansiyometre": { img: "Arduino%20Atölyesi/potansiyometre.jpg", desc: "Ayarlı direnç." },
    "Redüktörlü Motor": { img: "Arduino%20Atölyesi/reduktorlu_motor.jpg", desc: "Güçlü DC motor." },
    "Voltaj Regülatörü": { img: "Arduino%20Atölyesi/regulator.jpg", desc: "Gerilim sabitleyici." },
    "Renk Sensörü": { img: "Arduino%20Atölyesi/renk_sensoru.jpg", desc: "RGB algılayıcı." },
    "RFID Kit": { img: "Arduino%20Atölyesi/rfid_kit.jpg", desc: "Kartlı geçiş." },
    "RTC Saat Modülü": { img: "Arduino%20Atölyesi/rtc_modul.jpg", desc: "Zaman modülü." },
    "Sarhoş Tekerlek": { img: "Arduino%20Atölyesi/sarhos_tekerlek.jpg", desc: "Destek tekeri." },
    "Servo Motor": { img: "Arduino%20Atölyesi/servo.jpg", desc: "Açılı motor." },
    "Sigorta": { img: "Arduino%20Atölyesi/sigorta.jpg", desc: "Devre koruyucu." },
    "Step Motor": { img: "Arduino%20Atölyesi/step_motor.jpg", desc: "Hassas motor." },
    "Su Pompası": { img: "Arduino%20Atölyesi/su_pompasi.jpg", desc: "Sıvı aktarıcı." },
    "Tact Buton": { img: "Arduino%20Atölyesi/tact_buton.jpg", desc: "Küçük buton." },
    "Tekerlek": { img: "Arduino%20Atölyesi/Tekerlek.jpg", desc: "Robot tekerleği." },
    "Touch Pad": { img: "Arduino%20Atölyesi/touch_pad.jpg", desc: "Dokunmatik yüzey." },
    "Toz Sensörü": { img: "Arduino%20Atölyesi/toz_sensoru.jpg", desc: "Toz ölçer." },
    "TP4056 Şarj": { img: "Arduino%20Atölyesi/tp4056.jpg", desc: "Pil şarj devresi." },
    "Transistör": { img: "Arduino%20Atölyesi/transistor.jpg", desc: "Sinyal anahtarlayıcı." },
    "USB Kablo": { img: "Arduino%20Atölyesi/usb.jpg", desc: "Veri kablosu." },
    "Vakum Motoru": { img: "Arduino%20Atölyesi/vakum_motoru.jpg", desc: "Emiş motoru." },
    "Yağmur Sensörü": { img: "Arduino%20Atölyesi/yagmur_sensoru.jpg", desc: "Yağış algılayıcı." }
};

const projectDatabase = [
    { id: "p1", name: "1. Bluetooth Araba", required: ["Arduino Uno R3", "HC-06 Bluetooth", "L298N Motor Sürücü", "Redüktörlü Motor", "Tekerlek"], steps: [{ img: "Ardıino%20Proje%20Görselleri/Bluetooth%20araba.png", text: "Motorları ve Bluetooth modülünü şemaya göre bağlayın." }] },
    { id: "p2", name: "2. Engelden Kaçan Robot", required: ["Arduino Uno R3", "Mesafe Sensörü", "Servo Motor", "L298N Motor Sürücü", "Tekerlek"], steps: [{ img: "Ardıino%20Proje%20Görselleri/engelden%20kaçan%20araba.png", text: "Mesafe sensörünü öne takıp otonom sürüşü kodlayın." }] },
    { id: "p3", name: "3. RFID Kapı Sistemi", required: ["Arduino Uno R3", "RFID Kit", "Servo Motor", "LCD Ekran"], steps: [{ img: "Ardıino%20Proje%20Görselleri/rfıd%20kapı%20sistemi.png", text: "RFID SPI bağlantılarını yapıp yetkili kartla kilidi açın." }] },
    { id: "p4", name: "4. Yangın Alarm Sistemi", required: ["Arduino Uno R3", "Alev Sensörü", "Buzzer", "LED"], steps: [{ img: "Ardıino%20Proje%20Görselleri/yangın%20alarm%20sistemi.png", text: "Alev algılandığında buzzer ile alarm çalın." }] },
    { id: "p5", name: "5. Akıllı Sulama", required: ["Arduino Uno R3", "Nem Kontrol", "Su Pompası"], steps: [{ img: "Ardıino%20Proje%20Görselleri/akıllı%20sulama%20.jpg", text: "Toprak nemi düştüğünde pompayı otomatik çalıştırın." }] },
    { id: "p6", name: "6. Ses Kontrollü Işık", required: ["Arduino Uno R3", "Mikrofon Modülü", "24V Röle"], steps: [{ img: "Ardıino%20Proje%20Görselleri/ses%20kontrollü%20ışık.jpg", text: "Sesi algılayınca ışığı açan devreyi kurun." }] },
    { id: "p7", name: "7. Joystick Kontrollü Araba", required: ["Arduino Uno R3", "Joystick", "L298N Motor Sürücü", "Tekerlek"], steps: [{ img: "Ardıino%20Proje%20Görselleri/joystick%20kontrollü%20araba.jpg", text: "Joystick hareketlerini motor yönlerine atayın." }] },
    { id: "p8", name: "8. IR Kumandalı Robot", required: ["Arduino Uno R3", "IR Kumanda Kiti", "L298N Motor Sürücü", "Tekerlek"], steps: [{ img: "Ardıino%20Proje%20Görselleri/ır%20kumandalı%20robot.jpg", text: "Kumanda tuşlarıyla robotu uzaktan yönetin." }] },
    { id: "p9", name: "9. Güvenlik Sistemi", required: ["Arduino Uno R3", "PIR Sensör", "Buzzer", "Keypad"], steps: [{ img: "Ardıino%20Proje%20Görselleri/güvenlik%20sistemi.jpg", text: "Hareket algılandığında alarm çalan sistemi kurun." }] },
    { id: "p10", name: "10. Gaz Alarmı", required: ["Arduino Uno R3", "Gaz Sensörü", "Buzzer", "LCD Ekran"], steps: [{ img: "Ardıino%20Proje%20Görselleri/gaz%20alarmı.jpg", text: "Sızıntı anında LCD'de uyarı gösterin." }] },
    { id: "p11", name: "11. WiFi Kamera Sistemi", required: ["ESP32-Cam", "PIR Sensör", "9V Pil"], steps: [{ img: "Ardıino%20Proje%20Görselleri/wifi%20kamera%20sistemi.jpg", text: "Hareket olunca WiFi üzerinden görüntü aktarın." }] },
    { id: "p12", name: "12. Nabız Ölçer", required: ["Arduino Uno R3", "Nabız Sensörü", "OLED Ekran"], steps: [{ img: "Ardıino%20Proje%20Görselleri/nabız%20ölçer.jpg", text: "Kalp ritmini hesaplayıp ekranda grafikleyin." }] },
    { id: "p13", name: "13. Akıllı Sera", required: ["Arduino Uno R3", "Nem Kontrol", "DHT11 Sıcaklık Sensörü", "LCD Ekran"], steps: [{ img: "Ardıino%20Proje%20Görselleri/akıllı%20sera.jpg", text: "Sera verilerini LCD ekrandan takip edin." }] },
    { id: "p14", name: "14. Saat Sistemi", required: ["Arduino Uno R3", "RTC Saat Modülü", "7 Segment Ekran"], steps: [{ img: "Ardıino%20Proje%20Görselleri/saat%20sistemi.jpg", text: "Güncel saati sayısal ekranda gösterin." }] },
    { id: "p15", name: "15. Touch Kontrollü Araba", required: ["Arduino Uno R3", "Touch Pad", "L298N Motor Sürücü", "Tekerlek"], steps: [{ img: "Ardıino%20Proje%20Görselleri/touch%20kontrollü%20araba.jpg", text: "Dokunmatik yüzeyle aracı yönlendirin." }] },
    { id: "p16", name: "16. Akıllı Park Sensörü", required: ["Arduino Uno R3", "Mesafe Sensörü", "Buzzer", "LED"], steps: [{ img: "Ardıino%20Proje%20Görselleri/park%20sensörü.jpg", text: "Mesafeye göre ses hızını ayarlayın." }] },
    { id: "p17", name: "17. Çizgi İzleyen", required: ["Arduino Uno R3", "L298N Motor Sürücü", "Çizgi Sensörü", "Tekerlek"], steps: [{ img: "Ardıino%20Proje%20Görselleri/çizgi%20izleyen%20araba.jpg", text: "Siyah çizgiyi takip eden sistemi kurun." }] },
    { id: "p18", name: "18. Yüz Tanıma Sistemi", required: ["ESP32-Cam", "24V Röle", "OLED Ekran"], steps: [{ img: "Ardıino%20Proje%20Görselleri/yüz%20tanıma%20sistemi.jpg", text: "Kayıtlı yüzü görünce geçit verin." }] },
    { id: "p19", name: "19. Labirent Oyunu", required: ["Arduino Nano", "Joystick", "Servo Motor"], steps: [{ img: "Ardıino%20Proje%20Görselleri/labirent%20oyunu.jpg", text: "Joystick ile tablasını hareket ettirin." }] },
    { id: "p20", name: "20. Otto Robot", required: ["Arduino Nano", "Servo Motor", "Mesafe Sensörü"], steps: [{ img: "Ardıino%20Proje%20Görselleri/otto%20robot.jpg", text: "Servo motorlarla robotu yürütün." }] },
    { id: "p21", name: "21. Renk Ayırıcı", required: ["Arduino Nano", "Renk Sensörü", "Servo Motor"], steps: [{ img: "Ardıino%20Proje%20Görselleri/renk%20ayırıcı.jpg", text: "Renge göre servoyu doğru kutuya döndürün." }] },
    { id: "p22", name: "22. Sumo Robot", required: ["Arduino Uno R3", "L298N Motor Sürücü", "Tekerlek", "Çizgi Sensörü"], steps: [{ img: "Ardıino%20Proje%20Görselleri/sumo%20robot.jpg", text: "Rakibi dışarı atan savaşçı robotu yapın." }] },
    { id: "p23", name: "23. Ateş Ölçer", required: ["Arduino Nano", "DHT11 Sıcaklık Sensörü", "LCD Ekran"], steps: [{ img: "Ardıino%20Proje%20Görselleri/ateş%20ölçer.jpg", text: "Isıyı ölçüp ekrana yazdırın." }] },
    { id: "p24", name: "24. Akıllı Saat Projesi", required: ["Arduino Nano", "RTC Saat Modülü", "OLED Ekran"], steps: [{ img: "Ardıino%20Proje%20Görselleri/akıllı%20saat.jpg", text: "Bileğe takılabilir dijital saat yapın." }] },
    { id: "p25", name: "25. Dijital Su Terazisi", required: ["Arduino Nano", "ADXL345 Eğim Sensörü", "OLED Ekran"], steps: [{ img: "Ardıino%20Proje%20Görselleri/dijital%20su%20terazisi.jpg", text: "Eğim derecesini ekranda gösterin." }] },
    { id: "p26", name: "26. Parmak İzi Kasa", required: ["Arduino Nano", "Parmak İzi", "Servo Motor"], steps: [{ img: "Ardıino%20Proje%20Görselleri/parmak%20izi%20okuyucu%20ile%20kasa%20kilidi.jpg", text: "Parmak iziyle kilidi açan kasa yapın." }] },
    { id: "p27", name: "27. Robot Süpürge", required: ["Arduino Uno R3", "Mesafe Sensörü", "Vakum Motoru", "Tekerlek"], steps: [{ img: "Ardıino%20Proje%20Görselleri/robot%20süpürge.jpg", text: "Otonom süpürme sistemini tamamlayın." }]}
];

let selectedInventory = [];
let currentProject = null;
let currentStep = 0;

document.addEventListener("DOMContentLoaded", () => {
    const sortedNames = Object.keys(materialData).sort((a, b) => a.localeCompare(a, 'tr'));
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
        parent.innerHTML = `<div style="color:#666; font-size:14px; text-align:center; padding:20px;">Görsel klasörde bulunamadı. Lütfen klasör adını (Ardıino) ve dosya adını kontrol edin: ${step.img}</div>`;
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
