var anosVitoria = [1959, 1962, 1970, 1994, 2002]

anosVitoria.forEach(function(anos){
    console.log(`O Brasil ganhou a copa no ano de ${anos}`)
})

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(let c = 0; c < frutas.length; c++){
    console.log(frutas[c])
    if(frutas[c] == 'Pera'){
        break
    }
}

var ultimaFruta = frutas[frutas.length - 1]
console.log(ultimaFruta)