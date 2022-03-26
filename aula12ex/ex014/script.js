function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
if (minuto < 10) {
    minuto = '0' + minuto
}
//var hora = data.getHours() + ':' + data.getMinutes()
msg.innerHTML = `Agora são <strong>${hora}:${minuto}</strong>`
if (hora >= 0 && hora < 12) {
    // Bom dia
    img.src = 'BOM DIA.png'
    document.body.style.background = '#f5e9b5'
} else if (hora >= 12 && hora < 18) {
    // Boa tarde
    img.src = 'BOA TARDE.png'
    window.document.body.style.background = '#918231'
} else {
    // Boa noite
    img.src = 'BOA NOITE.png'
    window.document.body.style.background = '#1a0f4d'
}
}
