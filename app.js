//exer2
let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do desafio";

//exer3
function verificarConsole(){
    console.log ("O botão foi clicado!");
}

//exer4
function verificarAlerta(){
    alert ("Eu amo JS!");
}

//exer5
function verificarPrompt(){
    let cidade;
    cidade = prompt ("Informe o nome de uma cidade do Brasil:");
    alert(`Estive em ${cidade} e lembrei de você`);
}

//exer6
function verificarSoma(){
    let numero1 = parseInt(prompt ("Informe um número:"));
    let numero2 = parseInt(prompt ("Informe outro número:"));
    let resultado;
    resultado = (numero1+numero2);
    alert (`O resultado da soma é ${resultado}`);
}