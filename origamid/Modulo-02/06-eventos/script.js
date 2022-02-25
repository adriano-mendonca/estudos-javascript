/* Quando o usuário clicar nos links internos do site,
adicione a classe ativo ao item clicado e remova dos demais
itens caso eles possuam a mesma. Previna o comportamento padrão
desses links*/

const linksInternos = document.querySelectorAll('a[href^=#]')

function handleLink(event){
    event.preventDefault()
    linksInternos.forEach((item) => {
        item.classList.remove('ativo')
    })
    this.event.currentTarget.classList.add('ativo')
}

linksInternos.forEach((item) => {
    item.addEventListener('click', handleLink)
})

/* Selecione todos os elementos do site começando a partir do body
ao clique mostre exatamente quais elementos estão sendo clicados*/
const allElements = document.querySelectorAll('body *')

function handleElemento(evento){
    console.log(evento.currentTarget)
}

allElements.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento)
})

/*Utilizando o código anterios, ao invés de mostrar no console,
remova o elemento que está sendo clicado, o método remove() remove um elemento*/
const allElements = document.querySelectorAll('body *')

function handleElemento(evento){
    console.log(evento.currentTarget.remove())
}

allElements.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento)
})


// Se o usuário clicar na tecla (t), aumento todo o texto do site.
function handleClickt(event){
    if(event.key == 't'){
        document.documentElement.classList.add('aumentar-texto')
    }
}

window.addEventListener('keydown', handleClickt)