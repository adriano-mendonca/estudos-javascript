//Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu a')
menu.forEach(element => {
    element.classList.add('ativo')
});

//Remova a classe ativo de todos os itens do menu e mantenha apenas o primeiro
const $menu = Array.from(menu)

$menu.forEach((e, i) => {
    if (i>0){
        e.classList.remove('ativo')
    }
})

//Verifique se as imagens possuem atributo alt
const img = document.querySelectorAll('img')

img.forEach((image) => {
     const possuiAtributo = image.hasAttribute('alt')
     console.log(image, possuiAtributo)
})
//Modifique o href do link externo do menu
const link = document.querySelector('a[href^="http]')
link.setAttribute('href', 'https:/www.google.com/')