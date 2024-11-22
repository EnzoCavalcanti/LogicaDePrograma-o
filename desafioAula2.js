//Desafio 1
function exibirOla(){
    console.log('Olá, mundo!');
}
exibirOla();

//Desafio 2
function exibirNome(nome) {
    console.log(`Olá, ${nome}`);
}
exibirNome('Enzo');

//Desafio 3
function dobroNumero(numero){
    return numero * 2;
}

let resultado = dobroNumero(8);
console.log(resultado);

//Desafio 4
function calcularMedia(a,b,c){
    return (a + b + c)/3;
}

let media = calcularMedia(2,4,6);
console.log(media);

//Desafio 5
function encontrarMaior(a,b){
    return a > b ? a : b;
}

let numeroMaior = encontrarMaior(36,12);
console.log(numeroMaior);

//Desafio 6
function multiplica(numero){
    return numero * numero;
}

let numeroMultiplica = multiplica(6);
console.log(numeroMultiplica);