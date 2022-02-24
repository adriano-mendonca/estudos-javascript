//retorne a url da página atual utilizando o objeto window

const hrefPagina = window.location.href
console.log(hrefPagina)
/*Seleciona o primeiro elemento da 
página que possua classe ativo*/

const elemento = document.querySelector('.ativo')

//Retorne e a linguagem do navegador

const linguagem = window.navigator.language
console.log(linguagem)

//retorne a largura da janela
const largura = window.innerWidth
console.log(largura)