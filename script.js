// ARDUINO TASARIM MERKEZİ 
const materialData = {
    "24V Röle": { img: "Arduino%20Atölyesi/24v_role.jpg", desc: "Yüksek voltajlı cihazları kontrol eder." },
    "7 Segment Ekran": { img: "Arduino%20Atölyesi/7segment_ekran.jpg", desc: "Rakam ve karakter gösteren LED panel." },
    "9V Pil": { img: "Arduino%20Atölyesi/9v_pil.jpg", desc: "Taşınabilir enerji kaynağı." },
    "ADXL345 Eğim Sensörü": { img: "Arduino%20Atölyesi/adxl345.jpg", desc: "Hassas eğim ve ivme ölçümü yapar." },
    "Alev Sensörü": { img: "Arduino%20Atölyesi/ates_sensoru.jpg", desc: "Yangın ve kızılötesi ışığı algılar." },
    "Arduino Nano": { img: "Arduino%20Atölyesi/arduino_nano.jpg", desc: "Küçük boyutlu projeler için kompakt kart." },
    "Arduino Uno R3": { img: "Arduino%20Atölyesi/arduino_uno.jpg", desc: "Sistemin ana kontrol merkezi." },
    "Ateş Sensörü": { img: "Arduino%20Atölyesi/ates_sensoru.jpg", desc: "Alev algılama modülü." },
    "Breadboard": { img: "Arduino%20Atölyesi/breadboard.jpg", desc: "Lehimsiz devre kurma test tahtası." },
    "Buton": { img: "Arduino%20Atölyesi/buton.jpg", desc: "Basıldığında devreyi tamamlayan anahtar." },
    "Buzzer": { img: "Arduino%20Atölyesi/buzzer.jpg", desc: "Sesli uyarı ve sinyal elemanı." },
    "Çizgi Sensörü": { img: "Arduino%20Atölyesi/cizgi_sensoru.jpg", desc: "Siyah/beyaz farkını algılayan sensör." },
    "DC Motor": { img: "Arduino%20Atölyesi/dc_motor.jpg", desc: "Tekerlekleri döndüren standart motor." },
    "DHT11 Sıcaklık Sensörü": { img: "Arduino%20Atölyesi/sicaklik_sensoru.jpg", desc: "Isı ve nem takibi sağlar." },
    "Dijital Amplifikatör": { img: "Arduino%20Atölyesi/dijital_amplifikator.jpg", desc: "Ses sinyallerini güçlendirir." },
    "DIP Switch": { img: "Arduino%20Atölyesi/dip_switch.jpg", desc: "Çoklu ayar anahtarı grubu." },
    "Direnç": { img: "Arduino%20Atölyesi/direnc.jpg", desc: "Akımı sınırlayarak parçaları korur." },
    "DTMF Modülü": { img: "Arduino%20Atölyesi/dtmf_modul.jpg", desc: "Telefon tuş seslerini algılar." },
    "ESP32-Cam": { img: "Arduino%20Atölyesi/esp32_cam.jpg", desc: "WiFi destekli AI kamera modülü." },
    "Fan Modülü": { img: "Arduino%20Atölyesi/fan_modulu.jpg", desc: "Havalandırma ve soğutma pervanesi." },
    "Gaz Sensörü": { img: "Arduino%20Atölyesi/gaz_sensoru.jpg", desc: "Havadaki yanıcı gazları ölçer." },
    "GPS Modülü": { img: "Arduino%20Atölyesi/gps_modulu.jpg", desc: "Uydu üzerinden konum verisi sağlar." },
    "Güneş Paneli": { img: "Arduino%20Atölyesi/gunes_paneli.jpg", desc: "Işığı elektrik enerjisine çevirir." },
    "Havya": { img: "Arduino%20Atölyesi/havya.jpg", desc: "Lehimleme aleti." },
    "HC-06 Bluetooth": { img: "Arduino%20Atölyesi/hc06_bluetooth.jpg", desc: "Kablosuz iletişim sağlar." },
    "IR Kumanda Kiti": { img: "Arduino%20Atölyesi/ir_kumanda_kit.jpg", desc: "Uzaktan kumanda seti." },
    "Joystick": { img: "Arduino%20Atölyesi/joystick.jpg", desc: "İki eksenli yön kontrol kolu." },
    "Jumper Kablo": { img: "Arduino%20Atölyesi/jumper.jpg", desc: "Bileşenler arası bağlantı kablosu." },
    "Kalıcı Buton": { img: "Arduino%20Atölyesi/kalici_buton.jpg", desc: "Konumunu koruyan anahtar." },
    "Kamera Modülü": { img: "Arduino%20Atölyesi/kamera_modulu.jpg", desc: "Görüntü algılama lensi." },
    "Kenar Sensörü": { img: "Arduino%20Atölyesi/kenar_sensoru.jpg", desc: "Boşlukları algılayan sensör." },
    "Keypad": { img: "Arduino%20Atölyesi/keypad.jpg", desc: "Sayısal veri giriş tuş takımı." },
    "Kondansatör": { img: "Arduino%20Atölyesi/kondansator.jpg", desc: "Enerji depolayan devre elemanı." },
    "Krokodil Kablo": { img: "Arduino%20Atölyesi/krokodil.jpg", desc: "Kıskaçlı test bağlantı kablosu." },
    "Kumpas": { img: "Arduino%20Atölyesi/kumpas.jpg", desc: "Hassas ölçüm aracı." },
    "L293D Entegre": { img: "Arduino%20Atölyesi/l293d.jpg", desc: "Motor sürücü çipi." },
    "L298N Motor Sürücü": { img: "Arduino%20Atölyesi/l298n.jpg", desc: "Motor hız ve yön kontrol devresi." },
    "LCD Ekran": { img: "Arduino%20Atölyesi/lcd_ekran.jpg", desc: "Yazılı bilgi ekranı." },
    "LDR Işık Sensörü": { img: "Arduino%20Atölyesi/ldr_sensor.jpg", desc: "Işık şiddetini ölçer." },
    "LED": { img: "Arduino%20Atölyesi/led.jpg", desc: "Işıklı bildirim elemanı." },
    "Lehim Pastası": { img: "Arduino%20Atölyesi/lehim_pastasi.jpg", desc: "Lehimi kolaylaştıran madde." },
    "Lehim Pompası": { img: "Arduino%20Atölyesi/lehim_pompasi.jpg", desc: "Eski lehimi çekme aracı." },
    "Lehim Standı": { img: "Arduino%20Atölyesi/lehim_standi.jpg", desc: "Sıcak havya taşıyıcısı." },
    "Lehim Teli": { img: "Arduino%20Atölyesi/lehim_teli.jpg", desc: "Bağlantı metali." },
    "Li-Po Batarya": { img: "Arduino%20Atölyesi/li-po_batarya.jpg", desc: "Yüksek kapasiteli şarjlı pil." },
    "Makaron": { img: "Arduino%20Atölyesi/makaron.jpg", desc: "Kablo yalıtım kılıfı." },
    "Manyetik Kontak": { img: "Arduino%20Atölyesi/manyetik_kontak.jpg", desc: "Kapı/Pencere sensörü." },
    "Mesafe Sensörü": { img: "Arduino%20Atölyesi/mesafe_sensoru.jpg", desc: "Mesafe ölçümü yapar." },
    "Mikrofon Modülü": { img: "Arduino%20Atölyesi/mikrofon_modulu.jpg", desc: "Ses şiddetini algılar." },
    "Multimetre": { img: "Arduino%20Atölyesi/multimetre.jpg", desc: "Voltaj ve akım ölçer." },
    "Nabız Sensörü": { img: "Arduino%20Atölyesi/nabiz_sensoru.jpg", desc: "Kalp atış hızını ölçer." },
    "Nem Kontrol": { img: "Arduino%20Atölyesi/nem_kontrol.jpg", desc: "Toprak nemini ölçer." },
    "OLED Ekran": { img: "Arduino%20Atölyesi/oled_ekran.jpg", desc: "Grafik bilgi ekranı." },
    "Parmak İzi": { img: "Arduino%20Atölyesi/parmak_izi.jpg", desc: "Biyometrik okuyucu." },
    "Piezo Buzzer": { img: "Arduino%20Atölyesi/piezo_buzzer.jpg", desc: "Titreşimle ses verir." },
    "Pil Yuvası": { img: "Arduino%20Atölyesi/pil_yuvasi.jpg", desc: "Güç bağlantısı sağlar." },
    "PIR Sensör": { img: "Arduino%20Atölyesi/pir_sensor.jpg", desc: "Hareket algılayıcı." },
    "Potansiyometre": { img: "Arduino%20Atölyesi/potansiyometre.jpg", desc: "Ayarlı direnç." },
    "Redüktörlü Motor": { img: "Arduino%20Atölyesi/reduktorlu_motor.jpg", desc: "Güçlü hareket motoru." },
    "Voltaj Regülatörü": { img: "Arduino%20Atölyesi/regulator.jpg", desc: "Gerilimi sabitleyen eleman." },
    "Renk Sensörü": { img: "Arduino%20Atölyesi/renk_sensoru.jpg", desc: "RGB renkleri ayırt eder." },
    "RFID Kit": { img: "Arduino%20Atölyesi/rfid_kit.jpg", desc: "Kartlı geçiş sistemi." },
    "RTC Saat Modülü": { img: "Arduino%20Atölyesi/rtc_modul.jpg", desc: "Gerçek zamanlı saat." },
    "Sarhoş Tekerlek": { img: "Arduino%20Atölyesi/sarhos_tekerlek.jpg", desc: "Robot destek tekeri." },
    "Servo Motor": { img: "Arduino%20Atölyesi/servo.jpg", desc: "Hassas açılı motor." },
    "Ses Sensörü": { img: "Arduino%20Atölyesi/ses_sensoru.jpg", desc: "Sesleri elektrik sinyaline çevirir." },
    "Sigorta": { img: "Arduino%20Atölyesi/sigorta.jpg", desc: "Devre koruma elemanı." },
    "Step Motor": { img: "Arduino%20Atölyesi/step_motor.jpg", desc: "Hassas adımlı motor." },
    "Su Pompası": { img: "Arduino%20Atölyesi/su_pompasi.jpg", desc: "Sıvı aktarma motoru." },
    "Tact Buton": { img: "Arduino%20Atölyesi/tact_buton.jpg", desc: "Küçük tetik butonu." },
    "Tekerlek": { img: "Arduino%20Atölyesi/Tekerlek.jpg", desc: "Robot tekerleği." },
    "Touch Pad": { img: "Arduino%20Atölyesi/touch_pad.jpg", desc: "Dokunmatik kontrol yüzeyi." },
    "Toz Sensörü": { img: "Arduino%20Atölyesi/toz_sensoru.jpg", desc: "Toz miktarını ölçer." },
    "TP4056 Şarj Modülü": { img: "Arduino%20Atölyesi/tp4056.jpg", desc: "Pil şarj devresi." },
    "Transistör": { img: "Arduino%20Atölyesi/transistor.jpg", desc: "Sinyal anahtarlayıcı." },
    "USB Kablo": { img: "Arduino%20Atölyesi/usb.jpg", desc: "Arduino veri kablosu." },
    "Vakum Motoru": { img: "Arduino%20Atölyesi/vakum_motoru.jpg", desc: "Süpürme motoru." },
    "Yağmur Sensörü": { img: "Arduino%20Atölyesi/yagmur_sensoru.jpg", desc: "Yağışı algılar." }
};

const projectDatabase = [
    { 
        id: "p1", name: "1. Bluetooth Araba", required: ["Arduino Uno R3", "HC-06 Bluetooth", "L298N Motor Sürücü", "Redüktörlü Motor", "Tekerlek"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/Bluetooth%20araba.png", text: "1. Şase kurulumunu yapın ve 4 adet redüktörlü motoru tekerleklerle birleştirerek şaseye sabitleyin." },
            { img: "Ardıino%20Proje%20Görselleri/Bluetooth%20araba.png", text: "2. L298N motor sürücüyü vidalayın. Sağ motorları OUT1-OUT2, sol motorları OUT3-OUT4 klemenslerine bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/Bluetooth%20araba.png", text: "3. Pilin + kutbunu L298N'in 12V girişine, - kutbunu GND'ye bağlayın. Ayrıca L298N GND ile Arduino GND'yi birleştirin." },
            { img: "Ardıino%20Proje%20Görselleri/Bluetooth%20araba.png", text: "4. L298N'in IN1, IN2, IN3, IN4 pinlerini sırasıyla Arduino'nun 4, 5, 6 ve 7 numaralı dijital pinlerine bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/Bluetooth%20araba.png", text: "5. HC-06 Bluetooth modülünün VCC pinini 5V'a, GND pinini GND'ye bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/Bluetooth%20araba.png", text: "6. HC-06'nın TX pinini Arduino'nun RX(0), RX pinini ise Arduino'nun TX(1) pinine bağlayın (Kod yüklerken bu iki kabloyu çıkarın)." }
        ] 
    },
    { 
        id: "p2", name: "2. Engelden Kaçan Robot", required: ["Arduino Uno R3", "Mesafe Sensörü", "Servo Motor", "L298N Motor Sürücü", "Tekerlek"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/engelden%20kaçan%20araba.png", text: "1. Motorları, tekerlekleri ve L298N sürücüyü şaseye monte edip, motor ve güç bağlantılarını yapın (Arduino GND ile ortaklayın)." },
            { img: "Ardıino%20Proje%20Görselleri/engelden%20kaçan%20araba.png", text: "2. Sürücünün IN pinlerini (IN1-IN4) Arduino'nun 4, 5, 6, 7 pinlerine bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/engelden%20kaçan%20araba.png", text: "3. Servo motoru şasenin ön kısmına yerleştirin. Kırmızı kabloyu 5V, kahverengiyi GND'ye bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/engelden%20kaçan%20araba.png", text: "4. Servo motorun sinyal (turuncu/sarı) kablosunu Arduino'nun 9 numaralı PWM pinine takın." },
            { img: "Ardıino%20Proje%20Görselleri/engelden%20kaçan%20araba.png", text: "5. Mesafe sensörünü (HC-SR04) servo motorun üzerine sabitleyin. VCC pinini 5V'a, GND'yi GND'ye bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/engelden%20kaçan%20araba.png", text: "6. Sensörün Trig pinini Arduino 10, Echo pinini ise Arduino 11 numaralı pinlerine bağlayarak devreyi bitirin." }
        ] 
    },
    { 
        id: "p3", name: "3. RFID Kapı Sistemi", required: ["Arduino Uno R3", "RFID Kit", "Servo Motor", "LCD Ekran"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/rfıd%20kapı%20sistemi.png", text: "1. RFID (RC522) modülünün 3.3V pinini Arduino'nun 3.3V pinine bağlayın (Kesinlikle 5V'a bağlamayın, modül yanar!)." },
            { img: "Ardıino%20Proje%20Görselleri/rfıd%20kapı%20sistemi.png", text: "2. RFID pin bağlantıları: GND->GND, RST->D9, SDA(SS)->D10, MOSI->D11, MISO->D12, SCK->D13." },
            { img: "Ardıino%20Proje%20Görselleri/rfıd%20kapı%20sistemi.png", text: "3. Servo Motoru kapı kilit mekanizmasına monte edin." },
            { img: "Ardıino%20Proje%20Görselleri/rfıd%20kapı%20sistemi.png", text: "4. Servo bağlantıları: Kırmızı kablo 5V, Kahvererdegi kablo GND, Turuncu sinyal kablosu D8." },
            { img: "Ardıino%20Proje%20Görselleri/rfıd%20kapı%20sistemi.png", text: "5. LCD Ekranı I2C modülü ile bağlıyorsanız: VCC->5V, GND->GND." },
            { img: "Ardıino%20Proje%20Görselleri/rfıd%20kapı%20sistemi.png", text: "6. LCD I2C pinleri: SDA->A4, SCL->A5 pinlerine bağlayın. I2C adresi koda eklenmelidir." }
        ] 
    },
    { 
        id: "p4", name: "4. Yangın Alarm Sistemi", required: ["Arduino Uno R3", "Alev Sensörü", "Buzzer", "LED"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/yangın%20alarm%20sistemi.png", text: "1. Alev sensörünün VCC pinini Arduino'nun 5V çıkışına, GND pinini GND hattına bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/yangın%20alarm%20sistemi.png", text: "2. Alev sensörünün D0 (dijital çıkış) pinini Arduino'nun 2 numaralı dijital pinine takın." },
            { img: "Ardıino%20Proje%20Görselleri/yangın%20alarm%20sistemi.png", text: "3. Buzzer'ın uzun bacağını (+) Arduino'nun 8 numaralı pinine bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/yangın%20alarm%20sistemi.png", text: "4. Buzzer'ın kısa bacağını (-) breadboard üzerinden GND hattına bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/yangın%20alarm%20sistemi.png", text: "5. Kırmızı LED'in uzun bacağına (anot) 220 ohm direnç takarak Arduino'nun 9 numaralı pinine bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/yangın%20alarm%20sistemi.png", text: "6. LED'in kısa bacağını (katot) GND hattına bağlayarak devreyi tamamlayın." }
        ] 
    },
    { 
        id: "p5", name: "5. Akıllı Sulama", required: ["Arduino Uno R3", "Nem Kontrol", "Su Pompası"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/akıllı%20sulama%20.jpg", text: "1. Toprak nem sensörünün problarını kontrol kartına bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/akıllı%20sulama%20.jpg", text: "2. Sensör kartındaki VCC'yi 5V'a, GND'yi GND'ye, Analog çıkışı (A0) Arduino A0 pinine bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/akıllı%20sulama%20.jpg", text: "3. Su pompası için bir transistör (örn: TIP120) veya Röle modülü kullanın." },
            { img: "Ardıino%20Proje%20Görselleri/akıllı%20sulama%20.jpg", text: "4. Röle modülü kullanıyorsanız: VCC->5V, GND->GND, IN pini->Arduino D7." },
            { img: "Ardıino%20Proje%20Görselleri/akıllı%20sulama%20.jpg", text: "5. Su pompasının (+) ucunu dış güç kaynağına (pil), (-) ucunu rölenin NO klemensine bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/akıllı%20sulama%20.jpg", text: "6. Güç kaynağının GND'si ile rölenin COM klemensini birleştirip su hortumlarını takın." }
        ] 
    },
    { 
        id: "p6", name: "6. Ses Kontrollü Işık", required: ["Arduino Uno R3", "Mikrofon Modülü", "24V Röle"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/ses%20kontrollü%20ışık.jpg", text: "1. Mikrofon (ses) modülünün VCC pinini 5V'a, GND pinini Arduino GND'ye bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/ses%20kontrollü%20ışık.jpg", text: "2. Mikrofonun Dijital Out (D0) veya Analog (A0) pinini (koda göre) Arduino D2 veya A0 pinine takın." },
            { img: "Ardıino%20Proje%20Görselleri/ses%20kontrollü%20ışık.jpg", text: "3. Röle modülünün VCC pinini 5V, GND pinini GND, Sinyal(IN) pinini Arduino D8 pinine bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/ses%20kontrollü%20ışık.jpg", text: "4. Rölenin hassasiyet ayarını modül üzerindeki potansiyometreden tornavida ile yapın." },
            { img: "Ardıino%20Proje%20Görselleri/ses%20kontrollü%20ışık.jpg", text: "5. Kontrol edilecek lambanın (DC veya 220V AC dikkatli olun!) güç kablosunun bir hattını kesip Rölenin COM ve NO klemenslerine girin." }
        ] 
    },
    { 
        id: "p7", name: "7. Joystick Kontrollü Araba", required: ["Arduino Uno R3", "Joystick", "L298N Motor Sürücü", "Tekerlek"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/joystick%20kontrollü%20araba.jpg", text: "1. Şaseyi, motorları ve tekerlekleri toplayıp L298N sürücü bağlantılarını (Engelden Kaçan Robot gibi) yapın." },
            { img: "Ardıino%20Proje%20Görselleri/joystick%20kontrollü%20araba.jpg", text: "2. Sürücü kontrol pinlerini (IN1-IN4) Arduino D4, D5, D6, D7 pinlerine takın." },
            { img: "Ardıino%20Proje%20Görselleri/joystick%20kontrollü%20araba.jpg", text: "3. Joystick modülünün 5V pinini Arduino 5V, GND pinini GND'ye takın." },
            { img: "Ardıino%20Proje%20Görselleri/joystick%20kontrollü%20araba.jpg", text: "4. Joystick VRX pinini Arduino A0, VRY pinini Arduino A1 pinine bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/joystick%20kontrollü%20araba.jpg", text: "5. (Opsiyonel) Joystick butonunu kullanmak için SW pinini D2 pinine takıp pull-up direnç ayarlayın." }
        ] 
    },
    { 
        id: "p8", name: "8. Işık İzleyen Robot", required: ["Arduino Uno R3", "LDR Işık Sensörü", "L298N Motor Sürücü", "Redüktörlü Motor", "Tekerlek"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/isik_izleyen.jpg", text: "1. İki adet DC motoru şaseye yerleştirin ve L298N motor sürücü bağlantılarını tamamlayın." },
            { img: "Ardıino%20Proje%20Görselleri/isik_izleyen.jpg", text: "2. İki adet LDR Işık Sensörünü robotun sağ ve sol ön kısımlarına bakacak şekilde sabitleyin." },
            { img: "Ardıino%20Proje%20Görselleri/isik_izleyen.jpg", text: "3. Sağ LDR'yi 10k direnç ile pull-down yaparak Arduino'nun A0 analog pinine bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/isik_izleyen.jpg", text: "4. Sol LDR'yi aynı şekilde 10k direnç ile Arduino'nun A1 analog pinine bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/isik_izleyen.jpg", text: "5. L298N'nin IN1, IN2, IN3, IN4 pinlerini sırasıyla Arduino'nun D4, D5, D6, D7 pinlerine takın." }
        ] 
    },
    { 
        id: "p9", name: "9. Akıllı Çöp Kutusu", required: ["Arduino Uno R3", "Mesafe Sensörü", "Servo Motor"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/akilli_cop.jpg", text: "1. Çöp kutusunun kapağını kaldırabilecek şekilde Servo Motoru menteşe kısmına sabitleyin." },
            { img: "Ardıino%20Proje%20Görselleri/akilli_cop.jpg", text: "2. Servo motorun kırmızı kablosunu 5V, kahverengi kablosunu GND, sinyal kablosunu ise D9'a takın." },
            { img: "Ardıino%20Proje%20Görselleri/akilli_cop.jpg", text: "3. Mesafe sensörünü (HC-SR04) çöp kutusunun dış yüzeyine, size bakacak şekilde yerleştirin." },
            { img: "Ardıino%20Proje%20Görselleri/akilli_cop.jpg", text: "4. Mesafe sensörünün VCC->5V, GND->GND, Trig->D10 ve Echo->D11 bağlantılarını yapın." },
            { img: "Ardıino%20Proje%20Görselleri/akilli_cop.jpg", text: "5. Cisim algılandığında servoyu 90 derece döndüren ve 3 saniye sonra kapatan kodu yükleyin." }
        ] 
    },
    { 
        id: "p10", name: "10. Şifreli Kapı Kilidi", required: ["Arduino Uno R3", "Keypad", "Servo Motor", "LCD Ekran"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/sifreli_kapi.jpg", text: "1. 4x3 veya 4x4 Keypad'in satır ve sütun pinlerini Arduino'nun D2'den başlayarak dijital pinlerine bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/sifreli_kapi.jpg", text: "2. Servo motoru kapının veya kasanın kilit mekanizmasına yerleştirin." },
            { img: "Ardıino%20Proje%20Görselleri/sifreli_kapi.jpg", text: "3. Servo sinyal kablosunu Arduino'nun D9 pinine, güç kablolarını 5V ve GND'ye bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/sifreli_kapi.jpg", text: "4. I2C LCD Ekranın VCC ve GND bağlantılarını yapıp, SDA'yı A4'e ve SCL'yi A5'e bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/sifreli_kapi.jpg", text: "5. Doğru şifre girildiğinde ekrana 'Acildi' yazdırarak servo motoru hareket ettirin." }
        ] 
    },
    { 
        id: "p11", name: "11. Güneş Takip Sistemi", required: ["Arduino Uno R3", "LDR Işık Sensörü", "Servo Motor", "Güneş Paneli"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/gunes_takip.jpg", text: "1. Güneş panelini hareket ettirecek 2 adet servo motoru (Pan ve Tilt) yerleştirin." },
            { img: "Ardıino%20Proje%20Görselleri/gunes_takip.jpg", text: "2. Yatay servo sinyalini D9'a, dikey servo sinyalini D10'a bağlayın (Güçlerini 5V ve GND'den alın)." },
            { img: "Ardıino%20Proje%20Görselleri/gunes_takip.jpg", text: "3. Panelin 4 köşesine 4 adet LDR Işık Sensörü yerleştirin." },
            { img: "Ardıino%20Proje%20Görselleri/gunes_takip.jpg", text: "4. LDR'lerin birer uçlarına 5V verin, diğer uçlarına 10k direnç takarak A0, A1, A2, A3 pinlerine girin." },
            { img: "Ardıino%20Proje%20Görselleri/gunes_takip.jpg", text: "5. LDR'lerden gelen ışık farklarını hesaplayarak panelin en parlak yöne dönmesini sağlayın." }
        ] 
    },
    { 
        id: "p12", name: "12. Nabız Ölçer", required: ["Arduino Uno R3", "Nabız Sensörü", "OLED Ekran"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/nabız%20ölçer.jpg", text: "1. Nabız sensörünün (+) pinini 5V'a, (-) pinini GND'ye bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/nabız%20ölçer.jpg", text: "2. Sensörün sinyal (S) pinini Arduino'nun A0 analog girişine bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/nabız%20ölçer.jpg", text: "3. OLED ekranın VDD(VCC) pinini 5V'a (veya 3.3V, modelinize göre), GND'yi GND'ye takın." },
            { img: "Ardıino%20Proje%20Görselleri/nabız%20ölçer.jpg", text: "4. OLED ekran I2C pinlerinden SCK/SCL'yi Arduino A5'e bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/nabız%20ölçer.jpg", text: "5. OLED ekran SDA pinini Arduino A4'e bağlayın ve parmağınızı sensöre koyup test edin." }
        ] 
    },
    { 
        id: "p13", name: "13. Akıllı Sera", required: ["Arduino Uno R3", "Nem Kontrol", "DHT11 Sıcaklık Sensörü", "LCD Ekran"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/akıllı%20sera.jpg", text: "1. DHT11 sensörünün VCC'sini 5V'a, GND'sini GND'ye bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/akıllı%20sera.jpg", text: "2. DHT11 Data(Sinyal) pinini Arduino D2 pinine takın." },
            { img: "Ardıino%20Proje%20Görselleri/akıllı%20sera.jpg", text: "3. Toprak nem sensörünün kontrol kartı bağlantılarını yapıp A0 çıkışını Arduino A0 pinine bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/akıllı%20sera.jpg", text: "4. I2C LCD ekran bağlantıları için VCC->5V, GND->GND." },
            { img: "Ardıino%20Proje%20Görselleri/akıllı%20sera.jpg", text: "5. LCD SDA->A4, SCL->A5 olacak şekilde I2C haberleşme kablolarını takın." }
        ] 
    },
    { 
        id: "p14", name: "14. Hava Durumu İstasyonu", required: ["Arduino Uno R3", "DHT11 Sıcaklık Sensörü", "Yağmur Sensörü", "LCD Ekran"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/hava_durumu.jpg", text: "1. DHT11 Sıcaklık Sensörünün VCC'sini 5V, GND'sini GND, data ucunu D2'ye bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/hava_durumu.jpg", text: "2. Yağmur sensörünün algılayıcı levhasını modül kartına bağlayıp dış ortama yerleştirin." },
            { img: "Ardıino%20Proje%20Görselleri/hava_durumu.jpg", text: "3. Yağmur modülünün Analog(A0) ucunu Arduino A0 pinine, güç pinlerini (5V/GND) bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/hava_durumu.jpg", text: "4. I2C LCD Ekran modülünün SDA'sını A4'e, SCL'sini A5'e takın." },
            { img: "Ardıino%20Proje%20Görselleri/hava_durumu.jpg", text: "5. Tüm sensörlerden gelen veriyi okuyup ekranda düzenli olarak güncelleyin." }
        ] 
    },
    { 
        id: "p15", name: "15. Akıllı Lazer/Radar", required: ["Arduino Uno R3", "Mesafe Sensörü", "Servo Motor", "Buzzer"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/radar.jpg", text: "1. Servo motoru düz bir zemine sabitleyin." },
            { img: "Ardıino%20Proje%20Görselleri/radar.jpg", text: "2. Mesafe sensörünü (HC-SR04) Servo motorun dönen üst miline yerleştirin." },
            { img: "Ardıino%20Proje%20Görselleri/radar.jpg", text: "3. Servonun sinyal kablosunu D9 pinine takıp 5V/GND bağlantılarını yapın." },
            { img: "Ardıino%20Proje%20Görselleri/radar.jpg", text: "4. Mesafe sensörünün Trig pinini D10, Echo pinini D11'e bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/radar.jpg", text: "5. Buzzer'ın artı(+) bacağını D8'e bağlayıp, yakın bir cisim algılandığında öttürün." }
        ] 
    },
    { 
        id: "p16", name: "16. Akıllı Park Sensörü", required: ["Arduino Uno R3", "Mesafe Sensörü", "Buzzer", "LED"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/park%20sensörü.jpg", text: "1. HC-SR04 Mesafe sensörünü breadboard'a yerleştirin. VCC->5V, GND->GND." },
            { img: "Ardıino%20Proje%20Görselleri/park%20sensörü.jpg", text: "2. Sensörün Trig pinini D9, Echo pinini D10 numaralı pinlere bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/park%20sensörü.jpg", text: "3. Buzzer'ın uzun bacağını (+) D8'e, kısa bacağını (-) GND'ye bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/park%20sensörü.jpg", text: "4. Kırmızı, Sarı ve Yeşil LED'lerin uzun bacaklarına 220 ohm direnç takın." },
            { img: "Ardıino%20Proje%20Görselleri/park%20sensörü.jpg", text: "5. Dirençleri sırasıyla D5 (Yeşil), D6 (Sarı), D7 (Kırmızı) pinlerine bağlayın. Tüm katotları(kısa bacak) GND'de birleştirin." }
        ] 
    },
    { 
        id: "p17", name: "17. Çizgi İzleyen", required: ["Arduino Uno R3", "L298N Motor Sürücü", "Çizgi Sensörü", "Tekerlek"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/çizgi%20izleyen%20araba.jpg", text: "1. Robot şasesine motor, tekerlek, sarhoş tekerlek ve L298N bağlantılarını temel sürüş şemasına göre yapın." },
            { img: "Ardıino%20Proje%20Görselleri/çizgi%20izleyen%20araba.jpg", text: "2. 2 adet Çizgi sensörünü (TCRT5000 vb.) robotun ön-alt tarafına yere bakacak şekilde sabitleyin." },
            { img: "Ardıino%20Proje%20Görselleri/çizgi%20izleyen%20araba.jpg", text: "3. Sağ çizgi sensörünün VCC->5V, GND->GND, D0 (Dijital) pinini Arduino D2'ye bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/çizgi%20izleyen%20araba.jpg", text: "4. Sol çizgi sensörünün VCC->5V, GND->GND, D0 (Dijital) pinini Arduino D3'e bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/çizgi%20izleyen%20araba.jpg", text: "5. Çizgi sensörlerinin üzerindeki potansiyometreyi çevirerek siyah/beyaz zemin hassasiyetini ayarlayın." }
        ] 
    },
    { 
        id: "p18", name: "18. Yüz Tanıma Sistemi", required: ["ESP32-Cam", "24V Röle", "OLED Ekran"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/yüz%20tanıma%20sistemi.jpg", text: "1. ESP32-Cam modülüne kod yüklemek için bir FTDI (USB to TTL) programlayıcı bağlayın (5V, GND, U0R->TX, U0T->RX, IO0->GND)." },
            { img: "Ardıino%20Proje%20Görselleri/yüz%20tanıma%20sistemi.jpg", text: "2. Kodu yükledikten sonra IO0 ile GND arasındaki jumper'ı söküp modülü yeniden başlatın." },
            { img: "Ardıino%20Proje%20Görselleri/yüz%20tanıma%20sistemi.jpg", text: "3. Röle modülünün VCC(5V) ve GND bağlantılarını ESP32-Cam'in 5V ve GND pinlerinden alın." },
            { img: "Ardıino%20Proje%20Görselleri/yüz%20tanıma%20sistemi.jpg", text: "4. Rölenin Sinyal(IN) pinini ESP32-Cam üzerinde belirlediğiniz (Örn: GPIO 4) pinine bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/yüz%20tanıma%20sistemi.jpg", text: "5. OLED ekranı bağlamak için GPIO 14 (SCL) ve GPIO 15 (SDA) pinlerini kullanıp gücünü 3.3V veya 5V'dan alın." }
        ] 
    },
    { 
        id: "p19", name: "19. Labirent Oyunu", required: ["Arduino Nano", "Joystick", "Servo Motor"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/labirent%20oyunu.jpg", text: "1. Labirent platformunun altına X ve Y eksenlerini kontrol etmesi için 2 adet servo motor yerleştirin." },
            { img: "Ardıino%20Proje%20Görselleri/labirent%20oyunu.jpg", text: "2. X ekseni servosunun sinyal kablosunu Arduino Nano D9 pinine, Y eksenini D10 pinine takın (Güçleri 5V/GND)." },
            { img: "Ardıino%20Proje%20Görselleri/labirent%20oyunu.jpg", text: "3. Joystick modülünün 5V pinini Arduino 5V'a, GND pinini GND'ye takın." },
            { img: "Ardıino%20Proje%20Görselleri/labirent%20oyunu.jpg", text: "4. Joystick VRX pinini A0 analog girişine, VRY pinini A1 analog girişine bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/labirent%20oyunu.jpg", text: "5. Servolara ve Nano'ya binen yük fazla olacağından, servolar için harici bir 5V güç kaynağı (pil) kullanmayı unutmayın." }
        ] 
    },
    { 
        id: "p20", name: "20. Otto Robot", required: ["Arduino Nano", "Servo Motor", "Mesafe Sensörü"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/otto%20robot.jpg", text: "1. 4 adet Servo motorun montajını (2 ayak bileği, 2 kalça) 3D baskı gövdesine yapın." },
            { img: "Ardıino%20Proje%20Görselleri/otto%20robot.jpg", text: "2. Nano sensör kalkanı (Shield) kullanarak veya breadboard ile servoların VCC ve GND'lerini ortaklayın." },
            { img: "Ardıino%20Proje%20Görselleri/otto%20robot.jpg", text: "3. Sol bacak D2, Sağ bacak D3, Sol ayak D4, Sağ ayak D5 pinlerine servo sinyal kablolarını takın." },
            { img: "Ardıino%20Proje%20Görselleri/otto%20robot.jpg", text: "4. HC-SR04 Mesafe sensörünü kafa kısmına takın (Gözler)." },
            { img: "Ardıino%20Proje%20Görselleri/otto%20robot.jpg", text: "5. Sensör Trig pinini D8, Echo pinini D9'a, VCC->5V ve GND->GND'ye bağlayarak devreyi kapatın." }
        ] 
    },
    { 
        id: "p21", name: "21. Renk Ayırıcı", required: ["Arduino Nano", "Renk Sensörü", "Servo Motor"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/renk%20ayırıcı.jpg", text: "1. TCS3200 Renk Sensörünü rampanın altına cisimlerin geçeceği yere sabitleyin." },
            { img: "Ardıino%20Proje%20Görselleri/renk%20ayırıcı.jpg", text: "2. Sensör bağlantıları: VCC->5V, GND->GND, S0->D4, S1->D5, S2->D6, S3->D7, OUT->D8." },
            { img: "Ardıino%20Proje%20Görselleri/renk%20ayırıcı.jpg", text: "3. Parçaları alttaki haznelere düşürecek yönlendirici kol için 1. Servo motoru yerleştirin (Sinyal->D9)." },
            { img: "Ardıino%20Proje%20Görselleri/renk%20ayırıcı.jpg", text: "4. Parçaları üst hazneden tek tek sensöre düşürecek 2. Servo motoru yerleştirin (Sinyal->D10)." },
            { img: "Ardıino%20Proje%20Görselleri/renk%20ayırıcı.jpg", text: "5. Her iki servonun VCC(5V) ve GND bağlantılarını yaparak harici güç ile destekleyin." }
        ] 
    },
    { 
        id: "p22", name: "22. Akıllı Otopark Bariyeri", required: ["Arduino Uno R3", "Mesafe Sensörü", "Servo Motor", "RFID Kit"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/otopark_bariyer.jpg", text: "1. Bariyer kolunu hareket ettirmek için Servo Motoru bağlayın (Sinyal->D9)." },
            { img: "Ardıino%20Proje%20Görselleri/otopark_bariyer.jpg", text: "2. Aracı algılamak için Mesafe Sensörünün Trig pinini D6, Echo pinini D7'ye takın." },
            { img: "Ardıino%20Proje%20Görselleri/otopark_bariyer.jpg", text: "3. RFID kitinin 3.3V pinini takıp, diğer pinleri D10(SDA), D11, D12, D13 sırasıyla yerleştirin." },
            { img: "Ardıino%20Proje%20Görselleri/otopark_bariyer.jpg", text: "4. Bütün bileşenlerin toprak (GND) bağlantılarını breadboard üzerinde birleştirin." },
            { img: "Ardıino%20Proje%20Görselleri/otopark_bariyer.jpg", text: "5. Tanımlı kart okutulursa ve araç yakındaysa bariyeri açan kodu yükleyin." }
        ] 
    },
    { 
        id: "p23", name: "23. Gaz Kaçağı Alarmı", required: ["Arduino Uno R3", "Gaz Sensörü", "Buzzer", "LED"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/gaz_kacagi.jpg", text: "1. MQ Serisi gaz sensörünün VCC pinini 5V, GND pinini GND hattına takın." },
            { img: "Ardıino%20Proje%20Görselleri/gaz_kacagi.jpg", text: "2. Gaz sensörünün Analog Çıkış (A0) pinini Arduino'nun A0 pinine bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/gaz_kacagi.jpg", text: "3. Uyarı için Buzzer'ın (+) bacağını D8, (-) bacağını GND'ye takın." },
            { img: "Ardıino%20Proje%20Görselleri/gaz_kacagi.jpg", text: "4. Kırmızı LED'i D9, Yeşil LED'i D10'a 220 ohm dirençlerle bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/gaz_kacagi.jpg", text: "5. Gaz algılandığında yeşil LED'i söndürüp kırmızı LED'i ve alarmı aktifleştirin." }
        ] 
    },
    { 
        id: "p24", name: "24. Akıllı Saat", required: ["Arduino Nano", "RTC Saat Modülü", "OLED Ekran"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/akıllı%20saat.jpg", text: "1. DS3231 RTC (Gerçek Zamanlı Saat) modülünün içine CR2032 pilini takın." },
            { img: "Ardıino%20Proje%20Görselleri/akıllı%20saat.jpg", text: "2. RTC'nin VCC pinini 5V'a, GND pinini GND'ye takın. SDA'yı Nano A4'e, SCL'yi Nano A5'e bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/akıllı%20saat.jpg", text: "3. I2C OLED Ekranı da aynı I2C hattına bağlayın (VCC->5V, GND->GND, SDA->A4, SCL->A5)." },
            { img: "Ardıino%20Proje%20Görselleri/akıllı%20saat.jpg", text: "4. (Eğer modüller arası I2C çakışması olmazsa) Breadboard üzerinde SDA ve SCL hatlarını paralel bağlayabilirsiniz." },
            { img: "Ardıino%20Proje%20Görselleri/akıllı%20saat.jpg", text: "5. Devreyi kompakt hale getirmek için küçük bir Li-Po batarya ve TP4056 ile şarj devresini Nano'nun VIN/GND pinlerine bağlayın." }
        ] 
    },
    { 
        id: "p25", name: "25. Dijital Metre", required: ["Arduino Uno R3", "Mesafe Sensörü", "LCD Ekran", "9V Pil"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/dijital_metre.jpg", text: "1. Projeyi taşınabilir yapmak için 9V pili, pil yuvası aracılığıyla Arduino'nun güç girişine takın." },
            { img: "Ardıino%20Proje%20Görselleri/dijital_metre.jpg", text: "2. HC-SR04 Mesafe sensörünü takın, Trig->D9 ve Echo->D10 pinlerine bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/dijital_metre.jpg", text: "3. I2C LCD Ekranı bağlamak için SDA pinini A4'e, SCL pinini A5'e takın." },
            { img: "Ardıino%20Proje%20Görselleri/dijital_metre.jpg", text: "4. Tüm 5V ve GND güç bağlantılarını breadboard üzerinde çoğaltarak dağıtın." },
            { img: "Ardıino%20Proje%20Görselleri/dijital_metre.jpg", text: "5. Sensörden milisaniye cinsinden dönen süreyi santimetreye çevirip ekranda yazdırın." }
        ] 
    },
    { 
        id: "p26", name: "26. Parmak İzi Kasa", required: ["Arduino Nano", "Parmak İzi", "Servo Motor"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/parmak%20izi%20okuyucu%20ile%20kasa%20kilidi.jpg", text: "1. AS608 (veya benzeri) parmak izi modülünün VCC (kırmızı) kablosunu 5V'a, GND (siyah) kablosunu GND'ye takın." },
            { img: "Ardıino%20Proje%20Görselleri/parmak%20izi%20okuyucu%20ile%20kasa%20kilidi.jpg", text: "2. Modülün TX (sarı/yeşil) kablosunu Nano D2'ye, RX (beyaz) kablosunu Nano D3'e bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/parmak%20izi%20okuyucu%20ile%20kasa%20kilidi.jpg", text: "3. Kasa kilidini açıp kapatacak Servo Motorun kırmızı kablosunu 5V'a, kahverengini GND'ye takın." },
            { img: "Ardıino%20Proje%20Görselleri/parmak%20izi%20okuyucu%20ile%20kasa%20kilidi.jpg", text: "4. Servo motorun sinyal(turuncu) kablosunu Nano D9 pinine bağlayın." },
            { img: "Ardıino%20Proje%20Görselleri/parmak%20izi%20okuyucu%20ile%20kasa%20kilidi.jpg", text: "5. Kayıt kodunu atarak parmak izinizi modüle kaydedin, ardından asıl kasa açma kodunu yükleyin." }
        ] 
    },
    { 
        id: "p27", name: "27. Robot Süpürge", required: ["Arduino Uno R3", "Mesafe Sensörü", "Vakum Motoru", "Tekerlek"], 
        steps: [
            { img: "Ardıino%20Proje%20Görselleri/robot%20süpürge.jpg", text: "1. Robot şasesine hareket için gerekli L298N, DC motor ve tekerlek bağlantılarını 'Engelden Kaçan Robot' düzeninde kurun." },
            { img: "Ardıino%20Proje%20Görselleri/robot%20süpürge.jpg", text: "2. Robotun çarpmasını önlemek için Mesafe Sensörünü (HC-SR04) şasenin ön kısmına VCC/GND, Trig->A0, Echo->A1 olarak takın." },
            { img: "Ardıino%20Proje%20Görselleri/robot%20süpürge.jpg", text: "3. Vakum/Süpürge fan motorunu yüksek akım çekeceği için bir Röle Modülü (veya Mosfet) üzerinden sürün." },
            { img: "Ardıino%20Proje%20Görselleri/robot%20süpürge.jpg", text: "4. Röle modülünün VCC/GND bağlantılarını yapıp, IN(Sinyal) pinini Arduino D8 pinine takın." },
            { img: "Ardıino%20Proje%20Görselleri/robot%20süpürge.jpg", text: "5. Vakum motorunun (+) ucunu harici bataryaya, (-) ucunu Rölenin NO pinine, Röle COM pinini batarya GND'sine bağlayarak devreyi bitirin." }
        ] 
    }
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
        parent.innerHTML = `<div style="color:#666; font-size:14px; text-align:center; padding:20px;">Görsel "Ardıino Proje Görselleri" klasöründe bulunamadı. Lütfen klasör adını ve dosya adını kontrol edin.</div>`;
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
