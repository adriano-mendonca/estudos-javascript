function perimetroDoQuadrado(lado){
    return lado*4
}

console.log(`O quadrado tem perímetro de ${perimetroDoQuadrado(6)}cm.`)

console.log('')
//
function nomeCompleto(nome, sobrenome){
   return `${nome} ${sobrenome}`
}

console.log(`Olá ${nomeCompleto('Adriano', 'Brito de Mendonça')}! Seja Bem-Vindo!`)
console.log('')
//
function parImpar(num){
    if (num%2 == 0){
        return 'PAR'
    } else {
        return 'ÍMPAR'
    }
}

n = 4
console.log(`O número ${n} é ${parImpar(n)}.`)
console.log('')
//
function tipo(x){
    return typeof x
}

console.log(tipo('6'))
console.log('')
//

addEventListener('click', function (){
    console.log('Adriano Brito de Mendonça')
})
//
var totalPaises = 193
function precisoVisitar(paisesVisitados){
    
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar.`
}

function jaVisitei(paisesVisitados){
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países.`
}

console.log(precisoVisitar(20))
console.log(jaVisitei(20))
