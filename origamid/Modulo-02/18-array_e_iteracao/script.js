/*Selecione cada curso e retorne um array com objetos contendo o título,
descrição, aulas e horas de cada curso*/
const cursos = document.querySelectorAll('.cursos')
const arrayCuros = Array.from(cursos)

const objetoCursos = arrayCuros.map((item) => {
    const titulo = curso.querySelector('h1').innerText
    const descricao = curso.querySelector('p').innerText
    const aulas = curso.querySelector('.aulas').innerText
    const horas = curso.querySelector('.horas').innerText
    return {
        titulo,
        descricao,
        aulas,
        horas
    }
})

//Retorne uma lista com os números maiores que 100

const numeros = [3, 44, 333, 23 , 122, 322, 33]
const maiorQue100 = numeros.filter(n => n > 100)

//Verifique se Baixo faz parte da lista e retorne true

const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const isBaixo =  instrumentos.some(item => {
    return item === 'Baixo'
})


//Retorne o valor total das compras
const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Queijo',
        preco: 'R$ 10,60'
    }
]

const valorTotal = compras.reduce((acumulador, item) => {
    const precoLimpo = +item.preco.replace('R$ ', '').replace(',', '.')
    return acumulador + precoLimpo
}, 0)