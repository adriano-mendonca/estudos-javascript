/* const promessa = new Promise((resolve, reject) => {
  let condicao = false
  
  if(condicao){
    setTimeout(() => {
      resolve('Estou pronto!')
    }, 2000)
  } else {
    reject(Error('Ainda não estou pronto!'))
  }
})

promessa.then(resolucao => {
  console.log(resolucao)
}).catch(rejeitado => {
  console.log(rejeitado)
}) */

const login = new Promise(resolve => {
  setTimeout(() => {
    resolve('Usuário Logado!')
  }, 1500) 
})

const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados Carregados')
  }, 2000) 
})

const carregouTudo = Promise.all([login, dados])

carregouTudo.then((resolucao) => {
  console.log(resolucao)
})