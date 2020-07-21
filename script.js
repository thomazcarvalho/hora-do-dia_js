function carregar() {
    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()

    if (String(hora).length < 2) {
        horaCompleta = '0' + String(hora)
    } else {
        horaCompleta = String(hora)
    }
    if (String(minuto).length < 2) {
        horaCompleta = horaCompleta + ':' + '0' + String(minuto)
    } else {
        horaCompleta = horaCompleta + ':' + String(minuto)
    }

    var exibirIntro = window.document.getElementById('intro')
    var exibirHora = window.document.getElementById('txthora')
    var exibirImg = window.document.getElementById('imagem')

    
    exibirHora.innerHTML = `Agora são exatamente ${horaCompleta}.`

    if (hora < 5) {
        exibirIntro.innerHTML = '<strong>Olá, Coruja!</strong>'
        exibirImg.src = '5.png'
        window.document.body.style.background = '#493967'
    } else if (hora < 12) {
        exibirIntro.innerHTML = '<strong>Bom dia!</strong>'
        exibirImg.src = '1.png'
        window.document.body.style.background = '#7ec1ff'
    } else if (hora < 16) {
        exibirIntro.innerHTML = '<strong>Boa tarde!</strong>'
        exibirImg.src = '2.png'
        window.document.body.style.background = '#a8bebd'
    } else if (hora < 19) {
        exibirIntro.innerHTML = '<strong>Boa tarde!</strong>'
        exibirImg.src = '3.png'
        window.document.body.style.background = '#ffc785'
    } else {
        exibirIntro.innerHTML = '<strong>Boa noite!</strong>'
        exibirImg.src = '4.png'
        window.document.body.style.background = '#2e375d'
    }
}