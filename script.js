function updateStepUI() {
    if (!currentProject) return;

    const step = currentProject.steps[currentStep];

    document.getElementById("m-project-name").innerText = currentProject.name;
    document.getElementById("step-indicator").innerText =
        `ADIM ${currentStep + 1} / ${currentProject.steps.length}`;
    document.getElementById("m-project-steps").innerText = step.text;

    const imgEl = document.getElementById("m-project-img");

    // Resim alanını sıfırla
    imgEl.style.display = "block";
    imgEl.parentElement.innerHTML = `
        <img id="m-project-img"
             style="max-width:100%;max-height:500px;border-radius:8px;">
    `;

    const newImg = document.getElementById("m-project-img");

    // Dosya yolunu yazdır
    console.log("Yüklenen Görsel:", step.img);

    newImg.src = encodeURI(step.img);

    newImg.onload = function () {
        console.log("Görsel başarıyla yüklendi.");
    };

    newImg.onerror = function () {
        console.error("Görsel bulunamadı:", step.img);

        this.parentElement.innerHTML = `
        <div style="padding:25px;text-align:center;color:#ff4444;">
            <h3>❌ Görsel bulunamadı</h3>
            <p><b>Aranan dosya:</b></p>
            <code>${step.img}</code>
        </div>`;
    };

    document.getElementById("m-project-parts").innerHTML =
        currentProject.required
            .map(p => `<span class="part-tag">${p}</span>`)
            .join("");
}
