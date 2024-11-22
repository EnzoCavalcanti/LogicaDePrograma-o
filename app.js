//let titulo = document.querySelector('h1');  //No documento procure o que estiver marcado como h1
//titulo.innerHTML = 'Jogo do número secreto';  //Mostra no lugar do h1 

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let listaDeNumerosSorteados = [];  //O primeiro item de uma lista esta na posição zero 
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); //Uma voz femina brasileira ira ler a tag texto em 
}                                                                            //uma velocidade de 1.2

function exibirMensagemInicial() { 
    exibirTextoNaTela('h1', 'Jogo do número secreto'); 
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); I
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;  //Pega o valor que esta no input 
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('h1', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor');
        } else {
            exibirTextoNaTela('p','O número secreto é maior');
        }
        tentativas++;
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);  //retorna um valor de 1 a 10 e armazena em numeroSecreto
    let quantidadeDeElementosNaLista =listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){  // Se o numero escolheido ja estiver no array de numeros sorteados 
        return gerarNumeroAleatorio();                      // gere outro numero aleatorio
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);      //push inclui o numero escolhido na lista de numeros sorteados
        console.log(listaDeNumerosSorteados);               //pop retira o ultimo elemento da lista
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}