var n1 = 1578.5

console.log(n1.toFixed(2)) // 2 casas decimais
console.log(n1.toFixed(2).replace('.', ','))
console.log(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
