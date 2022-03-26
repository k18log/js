function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (Fano.value.length == 0 || Fano.value > ano) {
        window.alert('Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(Fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança-m.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }
                
        } else {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança-f.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-f.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}