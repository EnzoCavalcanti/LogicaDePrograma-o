let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarConsole(){
    console.log('O botão foi clicado');
}

function exibirAlert(){
    alert('Eu amo JS :3');
}

function exibirPrompt(){
    let cidade = prompt('Informe o nome de alguma cidade');
    alert(`Estive em ${cidade} e pensei em você`);
}

function verificarSoma(){
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let soma = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} somado com ${segundoNumero} é igual a ${soma}`);
}