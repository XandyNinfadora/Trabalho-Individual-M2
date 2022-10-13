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
    let textoUnCodedCF = cifraCesarUnCod(textoCodCF, 3);
    let textoCodificadoCF = document.querySelector('textarea');
    textoCodificadoCF.textContent = (textoUnCodedCF);
}


function cifraCesar(texto, incremento) {
    let codificado = "";
    for (let i = 0; i < texto.length; i++) {
        let charCode = texto[i];
        let charCodificado = String.fromCharCode((charCode.charCodeAt(0) + incremento + 65) - 65);
        codificado += charCodificado;
    }
    return codificado;
}

function cifraCesarUnCod(texto, incremento) {
    let descodificado = "";
    for (let i = 0; i < texto.length; i++) {
        let charCodificado = texto[i];
        let charDescodificado = String.fromCharCode((charCodificado.charCodeAt(0) - incremento - 65) + 65);
        descodificado += charDescodificado;
    }
    return descodificado;

}
