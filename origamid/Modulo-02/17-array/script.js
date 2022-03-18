 const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão']

 /*Remova o primeiro valor de comidas e coloque em uma variável
 remova o último valor de comidas de coloque em uma variável
 adicione 'Arroz' ao final da array
 adicione 'Peixe' e 'Batata' ao início da array*/

const primeiraComida = comidas.shift()
const ultimaComida = comidas.pop()
comidas.push('Arroz')
comidas.unshift('Peixe', 'Batata')


const estudantes = ['Márcio', 'Brenda', 'Joana', 'Kleber',  'Adriano']

/*Arrume os estudantes em ordem alfabética
inverta a ordem dos estudantes, verifique se Joana faz parte dos estudantes
verifique se Juliana faz parte dos estudantes*/
estudantes.sort()
console.log(estudantes)
estudantes.reverse()
console.log(estudantes)
console.log(estudantes.includes('Joana'))
console.log(estudantes.includes('Juliana'))

let html = `<section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contato</div>
            </section>`
//Substitua section por ul e div por li, utilizando split e join

html = html.split('section').join('ul').split('div').join('li')

const carros = ['Fiat', 'Ferrari', 'Mercedes', 'Honda']
//Remova o último carro, mas antes de remover salve o array original em outra variável

const carrosCopia = carros.slice()

carros.pop()
console.log(carros)
console.log(carrosCopia)