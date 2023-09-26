// neste arquivo vai ficar: mudancas de cor de imagem e de texto na pagina e colocaçao da musica ambiente

const html = document.querySelector('html'); // constsnte que vai pegar a tag html da pagina 
const focoBt = document.querySelector('.app__card-button--foco');  // constante que vai pegar o botao de foco do html
const curtoBt = document.querySelector('.app__card-button--curto'); // constante que vai pegar o bota de descnaso curto do html
const longoBt = document.querySelector('.app__card-button--longo'); // constante que vai pegar o botao de descanso longo do html
const banner = document.querySelector('.app__image'); // selecionar a imagem da pagina 
const titulo = document.querySelector('.app__title'); // seleciona a classe de titulo da pagina
const butom = document.querySelectorAll('.app__card-button'); // seleciona todas as classes de botao que tem na pagina
const musicaFocoInput = document.querySelector('#alternar-musica') // seleciona o imput da musica
let musica = new Audio('/sons/luna-rise-part-one.mp3'); // varivel que vai armazenar o som
musica.loop = true // vai musica vai tocar em um loop 

musicaFocoInput.addEventListener('change',function () { // evento de ligar a musica 
    if(musica.paused) { // se a musica estiver pausada 
            musica.play() // de o play
        } else {  // se nao 
            musica.pause() // pause a musica 
        }
})

focoBt.addEventListener('click', () => { // vai criar um evento de click no botao de foco
    tempoDecorridoEmSegundos = 1500; // tempo do cronometro no foco 
    alterarContexto('foco') // pega a classe de foco
    focoBt.classList.add('active'); // ativa o desenho de ativado do botao 
})
curtoBt.addEventListener('click', () => { // vai criar um evento de click no botao de foco curto
    tempoDecorridoEmSegundos = 300 ; // tempo do cronometro no descanso curto 
    alterarContexto('descanso-curto') // pega a classe de descanso curto
    curtoBt.classList.add('active'); // ativa o desenho de ativado do botao 
})
longoBt.addEventListener('click', () => { // vai criar um evento de click no botao de foco longo
    tempoDecorridoEmSegundos = 600 ; // tempo do cronometro no descanso longo 
    alterarContexto('descanso-longo') // pega a classe de descanso longo
    longoBt.classList.add('active'); // ativa o desenho de ativado do botao
})

function alterarContexto (contexto){ // funçao que vai alguerar a cor e a iamgem da pagina
    mostraNaTela() // mostra o cronometro
    butom.forEach(function(contexto){
    contexto.classList.remove('active') // vai remover de acordo com o contexto
    });
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