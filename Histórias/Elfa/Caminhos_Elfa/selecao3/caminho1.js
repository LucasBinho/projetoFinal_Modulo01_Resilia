var selecao

function escolhaOpcoes() {
    selecao = prompt("Digite:\n1 - Desafiar o monstro usando seu arco e flecha\n2 - Esperar escondida para ver se o monstro dormia")

    while(true) {
        if(selecao == 1 ){
            window.location = ("../selecao4/caminho1.html");
            break;
        } else if (selecao == 2) {
            window.location = ("../selecao4/caminho2.html")
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            selecao = prompt("Digite:\n1 - Desafiar o monstro usando seu arco e flecha\n2 - Esperar escondida para ver se o monstro dormia")
        }
    }
}