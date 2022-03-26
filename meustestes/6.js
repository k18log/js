function confirmar() {

    var light = document.getElementById('light')
    var dark = document.getElementById('dark')
    var escolha = document.getElementById('escolha')
    var energia = document.getElementsByName('radioenergia')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (energia[0].checked) {
        img.setAttribute('src', 'luz.jpg')
    } else {
        img.setAttribute('src', 'trevas.jpg')
    }

    escolha.appendChild(img)
}