function contar(){
    let i = document.getElementById('num1')
    let p = document.querySelector('input#num2')
    let f = document.getElementById('num3')
    
    let res = document.getElementById('res')

    
    if(f.value.length == 0 || i.value.length == 0 || p.value.length == 0){
        window.alert('[ERRO] Dados Inválidos!')
        res.innerHTML = '<p>Impossível contar!</p>'
    } else {
        let inicio = Number(i.value)
        let passo = Number(p.value)
        let fim = Number(f.value)
        res.innerHTML = '<p>Contando: </p>'
        if(passo == 0) {
            window.alert('Passo Inválido! Considerando passo = 1')
            passo = 1
        }
        if (inicio > fim){
            for(inicio; inicio >= fim; inicio -= passo){
                res.innerHTML += `${inicio} &#x1F449; `
            }
        } else {
            for(inicio; inicio <= fim; inicio += passo){
                res.innerHTML += `${inicio} \u{1F449} `
            }
        }
        res.innerHTML += '&#x1F3C1;'
    } 
    
}