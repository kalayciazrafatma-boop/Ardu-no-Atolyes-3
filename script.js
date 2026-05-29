// ARDUINO LAB
const materialData = {
    "24V Röle": { img: "Ardiino%20Proje%20Görselleri/24v_role.jpg", desc: "Yüksek voltajlı cihazları kontrol etmek içindir." },
    "7 Segment Ekran": { img: "Ardiino%20Proje%20Görselleri/7segment_ekran.jpg", desc: "Rakamları göstermek için kullanılan LED ekran." },
    "9V Pil": { img: "Ardiino%20Proje%20Görselleri/9v_pil.jpg", desc: "Devreye enerji sağlayan temel güç kaynağı." },
    "ADXL345 Eğim Sensörü": { img: "Ardiino%20Proje%20Görselleri/adxl345.jpg", desc: "Hassas eğim ve ivme ölçümü yapar." },
    "Alev Sensörü": { img: "Ardiino%20Proje%20Görselleri/ates_sensoru.jpg", desc: "Yangın ve kızılötesi ışığı algılar." },
    "Arduino Nano": { img: "Ardiino%20Proje%20Görselleri/arduino_nano.jpg", desc: "Kompakt, breadboard uyumlu mikrodenetleyici." },
    "Arduino Uno R3": { img: "Ardiino%20Proje%20Görselleri/arduino_uno.jpg", desc: "Sistemin ana kontrol merkezi." },
    "Breadboard": { img: "Ardiino%20Proje%20Görselleri/breadboard.jpg", desc: "Lehimsiz devre kurma test tahtası." },
    "Buton": { img: "Ardiino%20Proje%20Görselleri/buton.jpg", desc: "Basıldığında sinyal gönderen anahtar." },
    "Buzzer": { img: "Ardiino%20Proje%20Görselleri/buzzer.jpg", desc: "Sesli uyarı ve sinyal vermeyi sağlar." },
    "Çizgi Sensörü": { img: "Ardiino%20Proje%20Görselleri/cizgi_sensoru.jpg", desc: "Siyah ve beyaz zemini ayırt eder." },
    "DC Motor": { img: "Ardiino%20Proje%20Görselleri/dc_motor.jpg", desc: "Tekerlekleri döndüren standart motor." },
    "Dijital Amplifikatör": { img: "Ardiino%20Proje%20Görselleri/dijital_amplifikator.jpg", desc: "Ses sinyallerini yükseltir." },
    "DIP Switch": { img: "Ardiino%20Proje%20Görselleri/dip_switch.jpg", desc: "Çoklu açma-kapama ayar anahtarı." },
    "Direnç": { img: "Ardiino%20Proje%20Görselleri/direnc.jpg", desc: "Akımı sınırlayarak parçaları korur." },
    "DTMF Modülü": { img: "Ardiino%20Proje%20Görselleri/dtmf_modul.jpg", desc: "Telefon tuş seslerini algılar." },
    "ESP32-Cam": { img: "Ardiino%20Proje%20Görselleri/esp32_cam.jpg", desc: "WiFi kamera ve AI modülü." },
    "Fan Modülü": { img: "Ardiino%20Proje%20Görselleri/fan_modulu.jpg", desc: "Havalandırma ve soğutma pervanesi." },
    "Gaz Sensörü": { img: "Ardiino%20Proje%20Görselleri/gaz_sensoru.jpg", desc: "Havadaki gaz miktarını ölçer." },
    "GPS Modülü": { img: "Ardiino%20Proje%20Görselleri/gps_modulu.jpg", desc: "Uydu üzerinden konum verisi sağlar." },
    "Güneş Paneli": { img: "Ardiino%20Proje%20Görselleri/gunes_paneli.jpg", desc: "Işığı elektriğe çevirir." },
    "Havya": { img: "Ardiino%20Proje%20Görselleri/havya.jpg", desc: "Lehimleme aleti." },
    "HC-06 Bluetooth": { img: "Ardiino%20Proje%20Görselleri/hc06_bluetooth.jpg", desc: "Kablosuz kontrol sağlar." },
    "IR Kumanda Kiti": { img: "Ardiino%20Proje%20Görselleri/ir_kumanda_kit.jpg", desc: "Uzaktan kumanda seti." },
    "Joystick": { img: "Ardiino%20Proje%20Görselleri/joystick.jpg", desc: "Manuel yön kontrol kolu." },
    "Jumper Kablo": { img: "Ardiino%20Proje%20Görselleri/jumper.jpg", desc: "Bileşenler arası bağlantı kurar." },
    "Kalıcı Buton": { img: "Ardiino%20Proje%20Görselleri/kalici_buton.jpg", desc: "Konumunu koruyan buton." },
    "Kamera Modülü": { img: "Ardiino%20Proje%20Görselleri/kamera_modulu.jpg", desc: "Görüntü algılama lensi." },
    "Kenar Sensörü": { img: "Ardiino%20Proje%20Görselleri/kenar_sensoru.jpg", desc: "Boşlukları algılayan sensör." },
    "Keypad": { img: "Ardiino%20Proje%20Görselleri/keypad.jpg", desc: "Sayısal tuş takımı." },
    "Kondansatör": { img: "Ardiino%20Proje%20Görselleri/kondansator.jpg", desc: "Enerji depolayan eleman." },
    "Krokodil Kablo": { img: "Ardiino%20Proje%20Görselleri/krokodil.jpg", desc: "Kıskaçlı test kablosu." },
    "Kumpas": { img: "Ardiino%20Proje%20Görselleri/kumpas.jpg", desc: "Hassas ölçüm aracı." },
    "L293D Entegre": { img: "Ardiino%20Proje%20Görselleri/l293d.jpg", desc: "Küçük motor sürücü çipi." },
    "L298N Motor Sürücü": { img: "Ardiino%20Proje%20Görselleri/l298n.jpg", desc: "Motor hız ve yön kontrolü." },
    "LCD Ekran": { img: "Ardiino%20Proje%20Görselleri/lcd_ekran.jpg", desc: "Bilgi yazdırma ekranı." },
    "LDR Işık Sensörü": { img: "Ardiino%20Proje%20Görselleri/ldr_sensor.jpg", desc: "Işık şiddetini ölçer." },
    "LED": { img: "Ardiino%20Proje%20Görselleri/led.jpg", desc: "Işıklı bildirim elemanı." },
    "Lehim Pastası": { img: "Ardiino%20Proje%20Görselleri/lehim_pastasi.jpg", desc: "Lehimlemeyi kolaylaştırır." },
    "Lehim Pompası": { img: "Ardiino%20Proje%20Görselleri/lehim_pompasi.jpg", desc: "Eski lehimi çekme aracı." },
    "Lehim Standı": { img: "Ardiino%20Proje%20Görselleri/lehim_standi.jpg", desc: "Sıcak havya taşıyıcısı." },
    "Lehim Teli": { img: "Ardiino%20Proje%20Görselleri/lehim_teli.jpg", desc: "Bağlantı metali." },
    "Li-Po Batarya": { img: "Ardiino%20Proje%20Görselleri/lipo_batarya.jpg", desc: "Yüksek kapasiteli pil." },
    "Makaron": { img: "Ardiino%20Proje%20Görselleri/makaron.jpg", desc: "Kablo yalıtım kılıfı." },
    "Manyetik Kontak": { img: "Ardiino%20Proje%20Görselleri/manyetik_kontak.jpg", desc: "Kapı/pencere sensörü." },
    "Mesafe Sensörü": { img: "Ardiino%20Proje%20Görselleri/mesafe_sensoru.jpg", desc: "Engel mesafesini ölçer." },
    "Mikrofon Modülü": { img: "Ardiino%20Proje%20Görselleri/mikrofon_modulu.jpg", desc: "Ses şiddetini algılar." },
    "Multimetre": { img: "Ardiino%20Proje%20Görselleri/multimetre.jpg", desc: "Ölçüm ve test cihazı." },
    "Nabız Sensörü": { img: "Ardiino%20Proje%20Görselleri/nabiz_sensoru.jpg", desc: "Kalp atış hızını ölçer." },
    "Nem Kontrol": { img: "Ardiino%20Proje%20Görselleri/nem_kontrol.jpg", desc: "Toprak nemini ölçer." },
    "OLED Ekran": { img: "Ardiino%20Proje%20Görselleri/oled_ekran.jpg", desc: "Dijital grafik ekran." },
    "Parmak İzi": { img: "Ardiino%20Proje%20Görselleri/parmak_izi.jpg", desc: "Biyometrik okuyucu." },
    "Piezo Buzzer": { img: "Ardiino%20Proje%20Görselleri/piezo_buzzer.jpg", desc: "Titreşimli ses elemanı." },
    "Pil Yuvası": { img: "Ardiino%20Proje%20Görselleri/pil_yuvasi.jpg", desc: "Pilleri bir arada tutar." },
    "PIR Sensör": { img: "Ardiino%20Proje%20Görselleri/pir_sensor.jpg", desc: "Hareket algılayıcı." },
    "Potansiyometre": { img: "Ardiino%20Proje%20Görselleri/potansiyometre.jpg", desc: "Ayarlı direnç." },
    "Redüktörlü Motor": { img: "Ardiino%20Proje%20Görselleri/reduktorlu_motor.jpg", desc: "Güçlü dişli motor." },
    "Voltaj Regülatörü": { img: "Ardiino%20Proje%20Görselleri/regulator.jpg", desc: "Gerilimi sabitler." },
    "Renk Sensörü": { img: "Ardiino%20Proje%20Görselleri/renk_sensoru.jpg", desc: "Renkleri ayırt eder." },
    "RFID Kit": { img: "Ardiino%20Proje%20Görselleri/rfid_kit.jpg", desc: "Kartlı geçiş sistemi." },
    "RTC Saat Modülü": { img: "Ardiino%20Proje%20Görselleri/rtc_modul.jpg", desc: "Gerçek zamanlı saat." },
    "Sarhoş Tekerlek": { img: "Ardiino%20Proje%20Görselleri/sarhos_tekerlek.jpg", desc: "Yönlendirici tekerlek." },
    "Servo Motor": { img: "Ardiino%20Proje%20Görselleri/servo.jpg", desc: "Hassas açılı motor." },
    "Ses Sensörü": { img: "Ardiino%20Proje%20Görselleri/ses_sensoru.jpg", desc: "Sesleri algılar." },
    "Sıcaklık Sensörü": { img: "Ardiino%20Proje%20Görselleri/sicaklik_sensoru.jpg", desc: "Isı ölçer." },
    "Sigorta": { img: "Ardiino%20Proje%20Görselleri/sigorta.jpg", desc: "Aşırı akımı keser." },
    "Step Motor": { img: "Ardiino%20Proje%20Görselleri/step_motor.jpg", desc: "Adımlı hassas motor." },
    "Su Pompası": { img: "Ardiino%20Proje%20Görselleri/su_pompasi.jpg", desc: "Sıvı aktarma motoru." },
    "Tact Buton": { img: "Ardiino%20Proje%20Görselleri/tact_buton.jpg", desc: "Küçük tetik anahtarı." },
    "Tekerlek": { img: "Ardiino%20Proje%20Görselleri/Tekerlek.jpg", desc: "Robot tekerleği." },
    "Touch Pad": { img: "Ardiino%20Proje%20Görselleri/touch_pad.jpg", desc: "Dokunmatik yüzey." },
    "Toz Sensörü": { img: "Ardiino%20Proje%20Görselleri/toz_sensoru.jpg", desc: "Havadaki tozu ölçer." },
    "TP4056 Şarj": { img: "Ardiino%20Proje%20Görselleri/tp4056.jpg", desc: "Pil şarj devresi." },
    "Transistör": { img: "Ardiino%20Proje%20Görselleri/transistor.jpg", desc: "Sinyal anahtarlayıcı." },
    "USB Kablo": { img: "Ardiino%20Proje%20Görselleri/usb.jpg", desc: "Veri kablosu." },
    "Vakum Motoru": { img: "Ardiino%20Proje%20Görselleri/vakum_motoru.jpg", desc: "Süpürme motoru." },
    "Yağmur Sensörü": { img: "Ardiino%20Proje%20Görselleri/yagmur_sensoru.jpg", desc: "Yağışı algılar." }
};

const projectDatabase = [
    { id: "p1", name: "Bluetooth Araba", required: ["Arduino Uno R3", "HC-06 Bluetooth", "L298N Motor Sürücü", "Redüktörlü Motor", "Tekerlek"], 
      steps: [{ img: "Arduino%20Atölyesi/Bluetooth%20araba.png", text: "ADIM 1: Bluetooth ve motor sürücü bağlantılarını yapın." }] },
    { id: "p2", name: "Engelden Kaçan Robot", required: ["Arduino Uno R3", "Mesafe Sensörü", "Servo Motor", "L298N Motor Sürücü", "Tekerlek"], 
      steps: [{ img: "Arduino%20Atölyesi/engelden%20kaçan%20araba.png", text: "ADIM 1: Mesafe sensörünü servo üzerine sabitleyin." }] },
    { id: "p19", name: "Labirent Oyunu", required: ["Arduino Nano", "Joystick", "Servo Motor"], 
      steps: [{ img: "Arduino%20Atölyesi/labirent%20oyunu.jpg", text: "ADIM 1: Joystick ile servolara yön verin." }] },
    { id: "p20", name: "Otto Robot", required: ["Arduino Nano", "Servo Motor", "Mesafe Sensörü"], 
      steps: [{ img: "Arduino%20Atölyesi/otto%20robot.jpg", text: "ADIM 1: Ayak servolarını Arduino Nano'ya bağlayın." }] },
    { id: "p26", name: "Parmak İzi Kasa", required: ["Arduino Nano", "Parmak İzi", "Step Motor", "OLED Ekran"], 
      steps: [{ img: "Arduino%20Atölyesi/parmak%20izi%20okuyucu%20ile%20kasa%20kilidi.jpg", text: "ADIM 1: Parmak izi okunduğunda step motorla kilidi açın." }] },
    { id: "p27", name: "Robot Süpürge", required: ["Arduino Uno R3", "Mesafe Sensörü", "Vakum Motoru", "Toz Sensörü", "Sarhoş Tekerlek"], 
      steps: [{ img: "Arduino%20Atölyesi/robot%20süpürgr.jpg", text: "ADIM 1: Vakum sistemini aktif ederek otonom temizlik yapın." }] }
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
        parent.innerHTML = `<div style="color:#666; font-size:14px; text-align:center; padding:20px;">Görsel "Arduino Atölyesi" klasöründe bulunamadı. Lütfen ismi kontrol edin: ${currentProject.steps[currentStep].img}</div>`;
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
