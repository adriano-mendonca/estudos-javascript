var dadosPessoais = {
    nome: 'Adriano',
    sobrenome: 'Mendonça',
    peso: 87.5,
    idade: 21,
    cidade: 'Floriano',
    mostrarNome(){
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`)
    },
}

dadosPessoais.mostrarNome()

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000
console.log(carro.preco)

var cachorro = {
    raca: 'labrador',
    cor:  'preto',
    nome:  'Thanos',
    idade: 10,
    latir(obj){
        if (obj === 'homem'){
            return 'Latir'
        } else{
             return 'Nada'
        }
    },
}

cachorro.latir('homem')