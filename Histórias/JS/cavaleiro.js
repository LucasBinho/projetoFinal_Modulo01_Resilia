var selecao

function escolhaCaminho() {
    selecao = prompt("1 - Pegar a Esquerda\n2 - Pegar a Direita")
    while(true) {
        if(selecao == 1){
            window.location = ("../Cavaleiro/Caminhos_Cav/selecao1/acerto1.html");
            break;
        } else if (selecao == 2) {
            window.location = ("../Cavaleiro/Caminhos_Cav/selecao1/erro1.html");
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            selecao = prompt("1 - Pegar a Esquerda\n2 - Pegar a Direita")
        }
    }
}

function escolhaOpcoes() {
    selecao = prompt("Digite:\n1 - Para ajudar o amigo do hobbit desconhecido\n2 - Ignorar o empréstimo do álcool e seguir seu caminho")

    while(true) {
        if(selecao == 1 ){
            window.location = ("../selecao2/acerto2.html");
            break;
        } else if (selecao == 2) {
            window.location = ("../selecao2/erro2.html")
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            selecao = prompt("Digite:\n1 - Para ajudar o amigo do hobbit desconhecido\n2 - Ignorar o empréstimo do álcool e seguir seu caminho")
        }
    }
}

function escolhaOpcoes2() {
    selecao = prompt("Digite:\n1 - Interpretar a dica do ferido hobbit como a necessidade de acender uma tocha.\n2 - Seguir seus instintos e encarar a caverna em sua forma natural.")

    while(true) {
        if(selecao == 1 ){
            window.location = ("../selecao3/erro3.html");
            break;
        } else if (selecao == 2) {
            window.location = ("../selecao3/acerto3.html");
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            selecao = prompt("Digite:\n1 - Interpretar a dica do ferido hobbit como a necessidade de acender uma tocha.\n2 - Seguir seus instintos e encarar a caverna em sua forma natural.")
        }
    }
    
}

function escolhaOpcoes3() {
    selecao = prompt("Digite:\n1 - Tentar subir a corda.\n2 - Descer a ribanceira em direção ao clarão.")

    while(true) {
        if(selecao == 1 ){
            window.location = ("../selecao4/acerto4.html");
            break;
        } else if (selecao == 2) {
            window.location = ("../selecao4/erro4.html");
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            selecao = prompt("Digite:\n1 - Interpretar a dica do ferido hobbit como a necessidade de acender uma tocha.\n2 - Seguir seus instintos e encarar a caverna em sua forma natural.")
        }
    }
    
}

function continuar() {
    window.location = ("../../../../gameover/winner.html")
}