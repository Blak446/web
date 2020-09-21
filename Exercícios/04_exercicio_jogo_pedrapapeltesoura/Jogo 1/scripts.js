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
}