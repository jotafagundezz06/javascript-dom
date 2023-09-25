// neste arquivo vai ficar: sons de play, pause e fim e o cronometro 

let tempoDecorridoEmSegundos = 5 ; // varivel que vai armazenar o tempo em segundos
const botaoStart = document.querySelector('#start-pause'); // varivel qie  vai pegar o botao da pagina
let intervaloId = null
let somPlay = new Audio('/sons/play.wav'); // variavel que vai tocar o som de play
let somPause = new Audio('/sons/pause.mp3'); // variavel que vai tocar o som de pause
let somFim = new Audio('/sons/beep.mp3'); // variavel que vai tocar o som de fim

const contagemRegressiva = () => { // funçao que vai fazer a contagem regreciva 
    if (tempoDecorridoEmSegundos <= 0){ // se o tempor for menor ou igual a 0
        zerar() // chama a funçao de zerar o cronometro 
        somFim.play();
        alert('Tempo FInalizado'); // avisa que o tempo acabou
        return;
    }
    tempoDecorridoEmSegundos -= 1 ; // vai pegar o tempo e diminuir por um segundo 
    console.log('temporizador:' + tempoDecorridoEmSegundos); 
}

botaoStart.addEventListener('click', iniciarOuPusar); // adiciona o evento de click no botao e dispara o temporizador

function iniciarOuPusar () { // funçao que vai automatizar o temporizador 
        if (intervaloId){ // se ocorer uma pausa
            zerar() // ativa a funçao zerar
            somPause.play(); // vai tocar a musica de pause
            return;
        }
    intervaloId = setInterval(contagemRegressiva, 1000); // vai recever a funçao do temporizador e em quanto tempo ela tem que ocorrer
        somPlay.play(); // ativa a musica de play 
}

function zerar (){ // funçao que vai parar o temporizador
    clearInterval(intervaloId); // vai acabar com o inetervalo 
    intervaloId = null ; // variavel volta a ser nulo 
}