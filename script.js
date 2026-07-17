function updateStepUI() {
    if (!currentProject) return;
    const step = currentProject.steps[currentStep];
    const imgEl = document.getElementById('m-project-img');
    
    document.getElementById('m-project-name').innerText = currentProject.name;
    document.getElementById('step-indicator').innerText = `ADIM ${currentStep + 1} / ${currentProject.steps.length}`;
    document.getElementById('m-project-steps').innerText = step.text;
    
    imgEl.style.display = 'block';
    
    // Yolu kodla değil, doğrudan JSON'dan geldiği gibi veriyoruz
    imgEl.src = step.img; 
    
    imgEl.onerror = function() {
        this.style.display = 'none';
        console.error("Görsel Yüklenemedi! Aranan Tam Yol: " + window.location.href + step.img);
        
        let err = document.getElementById('error-msg');
        if (!err) {
            err = document.createElement('div');
            err.id = 'error-msg';
            err.style.color = '#ff4d4d';
            err.style.padding = '20px';
            // Konsoldaki yolu görmeniz için buraya ekliyoruz
            err.innerText = "Görsel yüklenemedi. Klasör adı veya dosya adı eşleşmiyor. Konsolu (F12) kontrol et.";
            this.parentElement.appendChild(err);
        }
    };
    
    document.getElementById('m-project-parts').innerHTML = currentProject.required
        .map(p => `<span class="part-tag">${p}</span>`).join('');
}
