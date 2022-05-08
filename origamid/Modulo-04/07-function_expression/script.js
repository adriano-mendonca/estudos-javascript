//Remova o erro
const priceNumer = n => +n.replace('R$', '').replace(',', '.')
console.log(priceNumer('R$ 99,99'))

//Crie uma IIFE e isole o escopo de qualquer código JS

(function() {
  var nome = 'Adriano'
  console.log(nome)
})()

//Como podemos utilizar a função abaixo
const active = callback => callback()

active(function(){
  console.log('Teste de Active!')
})
