function parimpar(n) {
    if (n % 2 == 0) {
        return 'PAR'
    } else {
        return 'ÍMPAR'
    }
}
// console.log(parimpar(4)) - Form simplificada sem precisar criar uma variável

let res = parimpar(1054)
console.log(res)
