// neste arquivo vai ficar: sons de play, pause e fim e o cronometro 

let tempoDecorridoEmSegundos = 1500 ; // varivel que vai armazenar o tempo em segundos
const botaoStart = document.querySelector('#start-pause'); // varivel qie  vai pegar o botao da pagina
let intervaloId = null
let somPlay = new Audio('/sons/play.wav'); // variavel que vai tocar o som de play
let somPause = new Audio('/sons/pause.mp3'); // variavel que vai tocar o som de pause
let somFim = new Audio('/sons/beep.mp3'); // variavel que vai tocar o som de fim
const IniciarouPausarbt = document.querySelector('#start-pause span'); // variavel do botao de começar  e pausar 

const contagemRegressiva = () => { // funçao que vai fazer a contagem regreciva 
    if (tempoDecorridoEmSegundos <= 0){ // se o tempor for menor ou igual a 0
        somFim.play(); // vai tocar a musica de fim 
        alert('Tempo FInalizado'); // avisa que o tempo acabou
        zerar() // chama a funçao de zerar o cronometro
        return;
    }
    tempoDecorridoEmSegundos -= 1 ; // vai pegar o tempo e diminuir por um segundo 
    mostraNaTela() // chama a funçao do cronometro
}

botaoStart.addEventListener('click', iniciarOuPusar); // adiciona o evento de click no botao e dispara o temporizador
// botar a imagem de play no botao de começar
IniciarouPausarbt.innerHTML = '<img class="app__card-primary-butto-icon" src="/imagens/play_arrow.png" alt=""> <span>Começar</span>' 

function iniciarOuPusar () { // funçao que vai automatizar o temporizador 
        if (intervaloId){ // se ocorer uma pausa
            zerar() // ativa a funçao zerar
            somPause.play(); // vai tocar a musica de pause
            return;
        }
    intervaloId = setInterval(contagemRegressiva, 1000); // vai recever a funçao do temporizador e em quanto tempo ela tem que ocorrer
        somPlay.play(); // ativa a musica de play
       // IniciarouPausarbt.textContent = 'Pausar' ; // muda as escrida do botao de começar para pausar
       // vai por a imagem de pause e escrever pausar
        IniciarouPausarbt.innerHTML = '<img class="app__card-primary-butto-icon" src="/imagens/pause.png" alt=""> <span>Pausar</span>'
}

function zerar (){ // funçao que vai parar o temporizador
    clearInterval(intervaloId); // vai acabar com o inetervalo 
    //IniciarouPausarbt.textContent = 'Começar' ; // o botao pausar volta a ser começar
    // vai por a imagem de play e escrever o começar
    IniciarouPausarbt.innerHTML = '<img class="app__card-primary-butto-icon" src="/imagens/play_arrow.png" alt=""> <span>Começar</span>' 
    intervaloId = null ; // variavel volta a ser nulo 
}