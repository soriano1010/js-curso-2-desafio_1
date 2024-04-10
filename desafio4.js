let largura = parseFloat(prompt("Informe a largura da sala:"));
let altura = parseFloat(prompt("Informe a altura da sala:"));
let perimetro;
let area;

function perimetroSala(parLargura, parAltura){
    perimetro = (parLargura+parAltura);

    area = (parLargura*parAltura);
}

perimetroSala(largura, altura);
    alert (`O perimetro da sala é de ${perimetro.toFixed(2)}`);
    alert (`A area da sala é de ${area.toFixed(2)}`);
    
