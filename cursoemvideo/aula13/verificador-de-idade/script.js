function verificar(){
    var data= new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados!')
    } else {
        var sex = document.getElementsByName('radsex')
        var id = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sex[0].checked){
            gênero = 'Homem'
            if (id >= 0 && id <= 12){
                img.setAttribute('src', 'images/crianca-menino.png')
            } else if (id <= 18){
                img.setAttribute('src', 'images/adolescente-homem.png')
            } else if (id <= 50) {
                img.setAttribute('src', 'images/adulto-homem.png')
            } else {
                img.setAttribute('src', 'images/idoso.png')
            }
        } else {
            gênero = 'Mulher'
            if (id >= 0 && id <= 12){
                img.setAttribute('src', 'images/crianca-menina.png')
            } else if (id <= 18){
                img.setAttribute('src', 'images/adolescente-mulher.png')
            } else if (id <= 50) {
                img.setAttribute('src', 'images/adulto-mulher.png')
            } else {
                img.setAttribute('src', 'images/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com <strong>${id}</strong> anos.`
        res.appendChild(img)
    }
}