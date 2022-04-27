var selecao

function escolhaCaminho() {
    selecao = prompt("1 - Ele pega o bilhete, rasga e joga no lixo\n2 - Ele analisa o bilhete, decide fazer as malas e parte para a aventura")
    while(true) {
        if(selecao == 1){
            window.location = ("../Hobbit/Caminhos_Hob/selecao1/erro1.html");
            break;
        } else if (selecao == 2) {
            window.location = ("../Hobbit/Caminhos_Hob/selecao1/acerto1.html");
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            selecao = prompt("1 - Ele pega o bilhete, rasga e joga no lixo\n2 - Ele analisa o bilhete, decide fazer as malas e parte para a aventura")
        }
    }
}

function escolhaOpcoes() {
    selecao = prompt("1 - Permanece no acampamento com a fogueira\n2 - Sai em busca de alimento")
    while(true) {
        if(selecao == 1){
            window.location = ("../selecao2/acerto2.html");
            break;
        } else if (selecao == 2) {
            window.location = ("../selecao2/erro2.html");
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            selecao = prompt("1 - Permanece no acampamento com a fogueira\n2 - Sai em busca de alimento")
        }
    }
}

function escolhaOpcoes2() {
    selecao = prompt("1 - Um caminho livre e bem demarcado\n2 - Uma estrada sinuosa e escura, cheia de espinhos")
    while(true) {
        if(selecao == 1){
            window.location = ("../selecao3/erro3.html");
            break;
        } else if (selecao == 2) {
            window.location = ("../selecao3/acerto3.html");
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            selecao = prompt("1 - Um caminho livre e bem demarcado\n2 - Uma estrada sinuosa e escura, cheia de espinhos")
        }
    }
}


function escolhaOpcoes3() {
    selecao = prompt("1 - Foge e volta para o conforto de sua casa\n2 - Procura uma maneira de distrair o Golem e entrar na caverna")
    while(true) {
        if(selecao == 1){
            window.location = ("../selecao4/erro4.html");
            break;
        } else if (selecao == 2) {
            window.location = ("../selecao4/acerto4.html");
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            selecao = prompt("1 - Foge e volta para o conforto de sua casa\n2 - Procura uma maneira de distrair o Golem e entrar na caverna")
        }
    }
}

function continuar() {
    window.location = ("../../../../gameover/winner.html")
}