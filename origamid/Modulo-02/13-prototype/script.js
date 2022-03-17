/*Crie uma função construtora de Pessoas,
deve conter nome, sobrenome e idade. Crie um método
no protótipo que retorne o nome completo da pessoa*/

function Pessoa(nome, sobrenome, idade){
    this.nome = nome
    this.sobenome = sobrenome
    this.idade = idade
}

Pessoa.prototype.nomeCompleto = function(){
    return `${this.nome} + ${this.sobrenome}`
}

/*Liste os métodos acessados por dados criados com
NodeList, HTMLCollection, Document*/
Object.getOwnPropertyNames(Nodelist.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)


//Liste os construtores dos dados abaixo:
const li = document.querySelector('li')

li // HTMLLIElement
li.click // Function
li.innerText // String
li.value // Number
li.hidden // Boolean
li.offsetLeft // Number
li.click() // Undefined

//Qual o construtor do dado abaixo:
li.hidden.constructor.name // String