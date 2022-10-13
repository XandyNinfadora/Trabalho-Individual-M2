// Base64

function textoCod(textoInput) {
    let textoCodMod = removeAcentosEspaços(textoInput);
    let textoCod = btoa(textoCodMod);
    let meinhaDiv = document.querySelector('textarea');
    meinhaDiv.textContent = (textoCod);

}

function textoUnCod(textoCod) {
    let textoUnCoded = atob(textoCod);
    let textoCodificado = document.querySelector('textarea');
    textoCodificado.textContent = (textoUnCoded);
}

function removeAcentosEspaços(texto) {
    return texto.normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
}



// Cifra de César

// colocar o texto somente em letras maiúsculas para serem convertidas.
function textoCodCF(textoInputCF) {
    let textoCodCFMod = removeAcentosEspaços(textoInputCF);
    let textoCodCF = cifraCesar(textoCodCFMod, 3);
    let textoCodCFShow = document.querySelector('textarea');
    textoCodCFShow.textContent = (textoCodCF);
}

function textoUnCodCF(textoCodCF) {
    let textoUnCodedCF = cifraCesarUnCod(textoCodCF, -3);
    let textoCodificadoCF = document.querySelector('textarea');
    textoCodificadoCF.textContent = (textoUnCodedCF);
}


function cifraCesarUnCod(text, s) {

    let result = ""
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.toUpperCase(text[i])) {
            let ch = String.fromCharCode((char.charCodeAt(0) + s - 65) % 26 + 65);
            result += ch;
        }
        else {
            let ch = String.fromCharCode((char.charCodeAt(0) + s - 97) % 26 + 97);
            result += ch;
        }
    }
    return result;

}

function cifraCesar(text, s) {

    let result = ""
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.toUpperCase(text[i])) {
            let ch = String.fromCharCode((char.charCodeAt(0) + s - 65) % 26 + 65);
            result += ch;
        }
        else {
            let ch = String.fromCharCode((char.charCodeAt(0) + s - 97) % 26 + 97);
            result += ch;
        }
    }
    return result;
}
