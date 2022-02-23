var idade = 21
var idadepai = 62

if (idade > idadepai){
    console.log('Minha idade é maior!')
} else {
    console.log('Minha idade é menor')
}

var expressao = (5 - 2) && (5 - ' ') && (5 - 2)
//3

var nome = 'Adriano' //Truthy
var idade = 21 // Truthy
var possuiDoutorado = false //Falsy
var empregoFuturo //Falsy
var dinheiroNaConta = 0 //Falsy

var brasil = 207
var china = 1240

if(brasil > china){
    console.log('Brasil é maior que China')
} else {
    console.log('China é maior que Brasil')
}

if(('Gato' === 'gato') && (5>2)){
    console.log('Veradeiro')
} else (
    console.log('Falso')
)

//falso

if(('Gato' === 'gato') || (5>2)){
    console.log('Gato' && 'Cão')
} else {
    console.log('falso')
}

//Cão