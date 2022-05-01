async function puxarDados(){
  try {
    const responseDados = await fetch('./dados.json') //Espera a requisição ser resolvida para executar o script
    const jsonDados = await responseDados.json()

    document.body.innerText = jsonDados.linguagem
  } catch(erro){ //Retorna para qualquer tipo de erro, inclusive de sintaxe
    console.log(erro)
  }
}

puxarDados()