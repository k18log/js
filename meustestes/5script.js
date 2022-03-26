function verificar() {
    
    var nome = window.document.getElementById('txtnome')
    var n = String(nome.value)
    var idade = window.document.getElementById('txtidade')
    var i = Number(idade.value)
    var prof = document.getElementById('txtprof')
    var p = String(prof.value)
    var res = document.getElementById('res')
    var genero = ''
    var sex = document.getElementsByName('radiosex')
    if (sex[0].checked) {
        genero = 'homem'
    } else if (sex[1].checked) {
        genero = 'mulher'
    } else if (sex[2].checked) {
        genero = 'E.T.'
    } 

res.innerHTML = `Você é ${genero}, seu nome é <strong>${n}</strong>, tem ${i} anos de idade e sua profissão é ${p}.`

}