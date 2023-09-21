const html = document.querySelector('html'); // constsnte que vai pegar a tag html da pagina 
const focoBt = document.querySelector('.app__card-button--foco');  // constante que vai pegar o botao de foco do html
const curtoBt = document.querySelector('.app__card-button--curto'); // constante que vai pegar o bota de descnaso curto do html
const longoBt = document.querySelector('.app__card-button--longo'); // constante que vai pegar o botao de descanso longo do html
const banner = document.querySelector('.app__image'); // selecionar a imagem da pagina 
const titulo = document.querySelector('.app__title'); // seleciona a classe de titulo da pagina

focoBt.addEventListener('click', () => { // vai criar um evento de click no botao de foco 
    alterarContexto('foco') // pega a classe de foco
})
curtoBt.addEventListener('click', () => { // vai criar um evento de click no botao de foco curto
    alterarContexto('descanso-curto') // pega a classe de descanso curto
})
longoBt.addEventListener('click', () => { // vai criar um evento de click no botao de foco longo
    alterarContexto('descanso-longo') // pega a classe de descanso longo
})

function alterarContexto (contexto){ // funçao que vai alguerar a cor e a iamgem da pagina
    html.setAttribute('data-contexto', contexto ); // pega o data contesto e muda acor da pagina pela a classe
    banner.setAttribute('src', `/imagens/${contexto}.png`); // pega o src e muda a imagem 
    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            
            break;
        case 'descanso-curto':
            titulo.innerHTML = `
            Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;
        case 'descanso-longo':
            titulo.innerHTML = `
            Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>
            `
        default:
            break;
    }
}