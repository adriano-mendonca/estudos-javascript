// Alterando texto com documento .txt
const txt = fetch('./doc.txt')
txt.then(r => r.text())
.then(body => {
  const div = document.querySelector('div')
  div.innerText = body
})

// Alterando estilo direto de um arquivo .css
const estilo = fetch('./style.css')

estilo.then(r => r.text())
.then(body => {
  const conteudo = document.querySelector('.conteudo')
  const style = document.createElement('style')
  style.innerHTML = body
  conteudo.appendChild(style)
})

//Pegando html e tratando como um body de página
const sobre = fetch('./sobre.html')
const div = document.createElement('div')
sobre.then(r => r.text()
)
.then(body => {
  div.innerHTML = body
  const titulo = div.querySelector('h1')
  document.querySelector('h1').innerText = titulo.innerText
})

//Requisição via fetch de uma imagem
const imagem = fetch('./ifpi-logo.png')

imagem.then(r => r.blob())
.then(body => {
  const blobUrl = URL.createObjectURL(body)
  const imagemDom = document.querySelector('img')
  imagemDom.src = blobUrl
})