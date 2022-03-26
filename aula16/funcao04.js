function fatorial(n) {
    let fat = 1
    let c = n
    for(c; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))