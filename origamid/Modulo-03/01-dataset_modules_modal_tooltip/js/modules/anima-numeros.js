export default function initAnimaNumeros(){
  function animaNumeros(){
    const numeros = document.querySelectorAll('[data-numero]')
    numeros.forEach((numero) => {
    const total = +numero.innerText
    let start = 0
    const incremento = Math.floor(total / 100)
    const timer = setInterval(() => {
      start += incremento
      numero.innerText = start
      if(start > total){
        numero.innerText = total
        clearInterval(timer)
      }
    }, 25 * Math.random())
  })}
  
  function handleMutation(mutation){
    if(mutation[0].target.classList.contains('ativo')){
      observador.disconnect()
      animaNumeros()
    }
  }
  
  const target = document.querySelector('.numeros')
  const observador = new MutationObserver(handleMutation)
  observador.observe(target, {attributes: true})
}

