function codificandoCFeB64() {
    let cifraCs = document.getElementById("cifraCs").checked;
    let base64 = document.getElementById("base64").checked;
    let incremento = parseInt(document.getElementById("incremento").value);
    if (cifraCs == true) {
        let codificado = "";
        let texto = document.getElementById("textoInput").value;
        let texto4 = removeAcentosEspaços(texto);
        for (let i = 0; i < texto4.length; i++) {
            let charCode = texto4[i];
            let charCodificado = String.fromCharCode((charCode.charCodeAt(0) + incremento + 65) - 65);
            codificado += charCodificado;
        }
        document.getElementById("textoVazio").value = codificado;
    }

    if (base64 == true) {
        let texto2 = document.getElementById("textoInput").value;
        let texto3 = removeAcentosEspaços(texto2);
        let textoCod = btoa(texto3);
        document.getElementById("textoVazio").value = textoCod;
    }
}

function descodificandoCFeB64() {
    let cifraCs = document.getElementById("cifraCs").checked;
    let base64 = document.getElementById("base64").checked;
    if (cifraCs == true) {
        let incremento = parseInt(document.getElementById("incremento").value);
        let codificadoDescod = "";
        let texto4Descod = document.getElementById("textoVazio").value;
        for (let i = 0; i < texto4Descod.length; i++) {
            let charCodeDescod = texto4Descod[i];
            let charCodificadoDescod = String.fromCharCode((charCodeDescod.charCodeAt(0) - incremento - 65) + 65);
            codificadoDescod += charCodificadoDescod;
        }
        document.getElementById("textoVazio").value = codificadoDescod;
    }

    if (base64 == true) {
        let texto2Descod = document.getElementById("textoVazio").value;
        let textoCodDescod = atob(texto2Descod);
        document.getElementById("textoVazio").value = textoCodDescod;
    }

}

function nowYouDont() {
    var sashay = document.getElementById("incremento");
    sashay.style.visibility = "hidden";
}

function nowYouSee() {
    var shantay = document.getElementById("incremento");
    shantay.style.visibility = "visible";
}

function removeAcentosEspaços(texto) {
    return texto.normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
}
