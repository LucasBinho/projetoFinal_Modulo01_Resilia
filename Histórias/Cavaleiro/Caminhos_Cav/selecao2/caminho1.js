var selecao

function escolhaOpcoes() {
    selecao = prompt("Digite:\n1 - Interpretar a dica do ferido hobbit como a necessidade de acender uma tocha.\n2 - Seguir seus instintos e encarar a caverna em sua forma natural.")

    while(true) {
        if(selecao == 1 ){
            window.location = ("../selecao3/caminho1.html");
            break;
        } else if (selecao == 2) {
            window.location = ("../selecao3/caminho2.html");
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            selecao = prompt("Digite:\n1 - Interpretar a dica do ferido hobbit como a necessidade de acender uma tocha.\n2 - Seguir seus instintos e encarar a caverna em sua forma natural.")
        }
    }
    
}