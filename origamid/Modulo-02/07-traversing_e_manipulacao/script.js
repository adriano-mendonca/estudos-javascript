//Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const cloneMenu = menu.cloneNode(true)

copy.appendChild(cloneMenu)

//Selecione o primeiro dt da dl de faq

const faq = document.querySelector('.faq')

const primeiroDt = faq.querySelector('dt')


//Selecione o dd referente ao primeiro dt
const dt = primeiroDt.nextElementSibling

//Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML