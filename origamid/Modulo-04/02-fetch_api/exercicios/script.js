/* Utilizando o API https://viacep.com.br/ws/${CEP}/json/
crie um formulário onde o usuário pode digitar o cep
e o endereço compleo e retornando ao clicar em buscar */

const inputCep = document.getElementById('cep')
const btnCep = document.getElementById('btnCep')
const resultadoCep = document.querySelector('.resultadoCep')

btnCep.addEventListener('click', handleClick)

function handleClick(event){
  event.preventDefault()
  const cep = inputCep.value
  buscaCep(cep)
}

function buscaCep(cep){
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(r => r.text())
  .then(body => {
    resultadoCep.innerText = body 
  })
}

/* Utilicando a API https://blockchain.info/ticker retorne no DOM
o valor de compra da bitcoin em reais e atualize este valor a cada 30s */

const btcDisplay = document.querySelector('.btc')

function fetchBtc(){
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(btcJson => {
    btcDisplay.innerText = ('R$' + btcJson.BRL.buy).replace('.', ',')
  })
}

fetchBtc()

/* Utilizando o API https://api.chucknorris.io/jokes/random retorne uma
piada randomica do chucknorris, toda vez que clicar em próxima */

const btnProxima = document.querySelector('.proximo')
const divPiada = document.querySelector('.piada')

function puxarPiada(){
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(piada => {
    divPiada.innerText = piada.value
  })
}

btnProxima.addEventListener('click', puxarPiada)