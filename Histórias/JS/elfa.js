var selecao

function escolhaCaminho() {
    selecao = prompt("1 - Achar que os lacaios estavam mentindo\n2 - Como não tem mais nada de interessante para fazer, decide descobrir se é verdade")
    while(true) {
        if(selecao == 1){
            window.location = ("../Elfa/Caminhos_Elfa/selecao1/erro1.html");
            break;
        } else if (selecao == 2) {
            window.location = ("../Elfa/Caminhos_Elfa/selecao1/acerto1.html");
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            selecao = prompt("1 - Pegar a Esquerda\n2 - Pegar a Direita")
        }
    }
}

function escolhaOpcoes() {
    selecao = prompt("Digite:\n1 - Seguir pelas árvores, onde ela tem total domínio\n2 - Seguir pelo rio, onde avista um barco")

    while(true) {
        if(selecao == 1 ){
            window.location = ("../selecao2/erro2.html");
            break;
        } else if (selecao == 2) {
            window.location = ("../selecao2/acerto2.html")
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            selecao = prompt("Digite:\n1 - Seguir pelas árvores, onde ela tem total domínio\n2 - Seguir pelo rio, onde avista um barco")
        }
    }
}

function escolhaOpcoes2() {
    selecao = prompt("Digite:\n1 - Seguir pelas esquerda, em águas tranquilas\n2 - Seguir pela direita, em águas agitadas")

    while(true) {
        if(selecao == 1 ){
            window.location = ("../selecao3/acerto3.html");
            break;
        } else if (selecao == 2) {
            window.location = ("../selecao3/erro3.html")
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            selecao = prompt("Digite:\n1 - Seguir pelas esquerda, em águas tranquilas\n2 - Seguir pela direita, em águas agitadas")
        }
    }
}

function escolhaOpcoes3() {
    selecao = prompt("Digite:\n1 - Desafiar o monstro usando seu arco e flecha\n2 - Esperar escondida para ver se o monstro dormia")

    while(true) {
        if(selecao == 1 ){
            window.location = ("../selecao4/acerto4.html");
            break;
        } else if (selecao == 2) {
            window.location = ("../selecao4/erro4.html")
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            selecao = prompt("Digite:\n1 - Desafiar o monstro usando seu arco e flecha\n2 - Esperar escondida para ver se o monstro dormia")
        }
    }
}

function continuar() {
    window.location = ("../../../../gameover/winner.html")
}