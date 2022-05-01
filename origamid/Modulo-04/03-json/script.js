fetch('./dados.json')
.then(resolve => resolve.json())
.then(body => {
  body.forEach(materia => {
    console.log(materia.aula)
  })
})

const configuracoes = {
  player: "Google",
  tempo: 25.5,
  aula: "4.5 JavaScript",
}

const stringConfig = JSON.stringify(configuracoes)

console.log(stringConfig)