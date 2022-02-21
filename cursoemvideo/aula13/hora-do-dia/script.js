function carregar(){
    var data = new Date()
    var hr = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    var res = document.querySelector('div.res')
    var img = document.getElementById('imagem')

    res.innerHTML = `<p>Agora são ${hr}:${min}:${sec}</p>`
    
    if(hr >= 0 && hr < 12){
        img.src = 'images/manha.png'
        document.body.style.background = '#F2D6CA'
    } else if (hr >= 12 && hr <= 18){
        img.src = 'images/tarde.png'
        document.body.style.background = '#6C1206'
    } else {
        img.src = 'images/noite.png'
        document.body.style.background = '#09192C'
    }
}