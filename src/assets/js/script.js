const wrapper = document.querySelector(".wrapper"),
 form = wrapper.querySelector("form")
 qrInput = wrapper.querySelector("#qrInput"),
 generateBtn = wrapper.querySelector("form button"),
 qrImg = wrapper.querySelector(".qr-code img");
let preValue;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let qrValue = qrInput.value.trim();

    if (!qrValue || preValue == qrValue){
        alert("Preencha o campo para gerar o input")
        return
    };

    preValue = qrValue;
    generateBtn.innerText = "Gerando QR Code.....";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;

    qrImg.addEventListener("load",() => {
        wrapper.classList.add("active");
        generateBtn.innerText = "QR Code Gerado";
    })
})

qrInput.addEventListener("keyup",() => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
        generateBtn.innerText = "Gerar QR Code";
    }
});