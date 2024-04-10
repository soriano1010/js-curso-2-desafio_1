let dolar = parseFloat(prompt("Informe quantos dolars você tem:"));
let real;

function dolarParaReais(parDolar){
    return parDolar*4.80;
}

real = dolarParaReais(dolar);
alert (`Isso equivale a R$ ${real.toFixed(2)}`);
