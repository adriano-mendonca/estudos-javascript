//Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto'
    const marca = 'Fiat'
    let portas = 4;
}

//console.log(cor, marca, portas)

//R: Escopo de bloco, const e let mantém escopo de bloco e não podem ser chamadas fora do bloco

// Como corrigir o erro abaixo ?
const dois = 2;

function somarDois(x){
    
    return x + dois
}

function dividirDois(x){
    return x / dois
}

console.log(somarDois(4))
console.log(dividirDois(6))

//R: Mover a constante 'dois' para fora do bloco de função 'somarDois'

//O que fazer para total retornar 500?

var numero = 50

for(let numero = 0; numero < 10; numero++){
    console.log(numero)
}

const total = 10 * numero
console.log(total)
//R: Apenas colocar a declaração de número do bloco for como let e não var