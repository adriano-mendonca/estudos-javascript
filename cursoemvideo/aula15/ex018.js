let num = [5, 1, 2, 4, 8]

console.log(`O array é ${num}`)

num[5] = 9

num.push(3)

console.log(`O vetor tem ${num.length} posições`)

console.log(num.sort())

/*for(var c = 0; c < num.length; c++){
   console.log(`${num[c]}`)
}*/

for(let c in num){
    console.log(num[c])
}

console.log(num.indexOf(7))