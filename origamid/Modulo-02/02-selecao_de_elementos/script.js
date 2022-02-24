//Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img')
console.log(imagens)

//Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"')
console.log(imagensAnimais)

//Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]')
console.log(linksInternos)

//Selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelectorAll('.animais-descrição h2')
console.log(h2Animais)

//Selecione o último p do sie

const paragrafos = document.querySelectorAll("p")
const ultimoP = paragrafos[paragrafos.length - 1]
console.log(ultimoP)