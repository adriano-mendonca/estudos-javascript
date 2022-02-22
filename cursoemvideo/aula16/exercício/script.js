let lista = []
let res = document.getElementById('res')

function add(){
    let num = document.getElementById('num')
    res.innerHTML = ''
    if (num.value.length == 0 || Number(num.value) < 0 || Number(num.value) > 100){
        window.alert('[ERRO] Insira um número válido!')
    } else {
        let n = Number(num.value)
        let l = document.getElementById('lista')
        let item = document.createElement('option')

        if(lista.length > 0 && lista.indexOf(n) >= 0){
            window.alert('[ERRO] Este número já foi adicionado! Tente novamente!')
        } else {
            lista.push(n)
            item.text = `Valor ${n} adicionado!`
            l.appendChild(item)
        }
    }
}

function finalizar(){
    if (lista.length == 0){
        window.alert('[ERRO] Adicione um número antes de finalizar!')
    } else {
        lista.sort()
        res.innerHTML = `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${lista[lista.length-1]}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${lista[0]}.</p>`
        let soma = 0
        for(let c = 0; c < lista.length; c++){
            soma += lista[c]
        }
        res.innerHTML += `<p>Somando tosos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${soma/lista.length}.</p>`
    }
}