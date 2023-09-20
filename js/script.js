const html = document.querySelector('html'); // constsnte que vai pegar a tag html da pagina 
const focoBt = document.querySelector('.app__card-button--foco');  // constante que vai pegar o botao de foco do html
const curtoBt = document.querySelector('.app__card-button--curto'); // constante que vai pegar o bota de descnaso curto do html
const longoBt = document.querySelector('.app__card-button--longo'); // constante que vai pegar o botao de descanso longo do html

focoBt.addEventListener('click', () => { // vai criar um evento de click no botao de foco 
    html.setAttribute('data-contexto', 'foco'); // vai mudar o atributo do data-contexto para foco

})
curtoBt.addEventListener('click', () => { // vai criar um evento de click no botao de foco curto
    html.setAttribute('data-contexto', 'descanso-curto'); // vai mudar o atributo do data-contexto para descanso-curto
})
longoBt.addEventListener('click', () => { // vai criar um evento de click no botao de foco longo
    html.setAttribute('data-contexto', 'descanso-longo'); // vai mudar o atributo do data-contexto para descanso-longo
})