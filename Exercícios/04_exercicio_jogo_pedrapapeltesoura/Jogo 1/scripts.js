function jogada(opcaoJogador)
{
    //Jogada do computador
    var randomNumber = Math.floor(Math.random() * 3);
    var imagem;

    switch(randomNumber)
    {
        case 0: imagem = "Shreck/pedra.png";
                break;
        case 1: imagem = "Shreck/papel.png";
                break;
        case 2: imagem = "Shreck/tesoura.png";
                break;
    }

    var imgComputador = document.getElementById("computador");
    imgComputador.src = imagem;

    //Jogada Jogador
    switch(opcaoJogador)
    {
        case 0: imagem = "Shreck/pedra.png";
                break;
        case 1: imagem = "Shreck/papel.png";
                break;
        case 2: imagem = "Shreck/tesoura.png";
                break;
    }

    var imgComputador = document.getElementById("jogador");
    imgComputador.src = imagem;

    //Resultado do jogo
    var resultado = document.getElementById("resultado");

    //Empate
    if(randomNumber == opcaoJogador)
    {
        resultado.textContent = "EMPATE";
    }
    //VITORIAS E DERROTAS
    else if(randomNumber == 0 && opcaoJogador == 1)
    {
        resultado.textContent = "VITÓRIA";
    }
    else if(randomNumber == 0 && opcaoJogador == 2)
    {
        resultado.textContent = "DERROTA";
    }
    else if(opcaoJogador == 0 && randomNumber == 1)
    {
        resultado.textContent = "DERROTA";
    }
    else if(opcaoJogador == 0 && randomNumber == 2)
    {
        resultado.textContent = "VITÓRIA";
    }
    else if(opcaoJogador == 1 && randomNumber == 2)
    {
        resultado.textContent = "DERROTA";
    }
    else if(opcaoJogador == 2 && randomNumber == 1)
    {
        resultado.textContent = "VITÓRIA";
    }
}