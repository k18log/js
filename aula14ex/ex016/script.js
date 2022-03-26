function verificar() {

    var inicio = document.getElementById('inicio')
    var i = Number(inicio.value)
    var fim = document.getElementById('fim')
    var f = Number(fim.value)
    var passo = document.getElementById('passo')
    var p = Number(passo.value)
    var res = ''

    for (i; i <= f; i += p) {
        res += (`${i} => `)
    }

    document.getElementById('res').innerText = `${res} Fim`
}


