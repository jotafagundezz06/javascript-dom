const tempoNaTela = document.querySelector('#timer'); // variavel que vai criar o cronometro  na tela

function mostraNaTela (){ // funçao que vai mostrar o cronometro na tela
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)  // varivel que vai receber o tempo
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute : '2-digit', second : '2-digit'}) // vai transformar o 1500 segundos em 25 minitos na tela
    tempoNaTela.innerHTML = `${tempoFormatado}`; // mostrar a variavel tempo na pagina html
}

mostraNaTela() // chamar a variavel para mostrar sempre na tela