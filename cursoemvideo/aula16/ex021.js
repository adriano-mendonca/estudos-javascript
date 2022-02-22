function fatorial(n){
    let f = 1
    for(let c = n; c > 1; c--){
        f *= c
    }
    return f
}

console.log(fatorial(5))