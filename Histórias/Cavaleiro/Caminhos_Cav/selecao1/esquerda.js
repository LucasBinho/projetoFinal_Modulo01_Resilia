var selecao

function escolhaOpcoes() {
    selecao = prompt("Digite:\n1 - Para ajudar o amigo do hobbit desconhecido\n2 - Ignorar o empréstimo do álcool e seguir seu caminho")

    while(true) {
        if(selecao == 1 ){
            window.location = ("../selecao2/caminho1.html");
            break;
        } else if (selecao == 2) {
            window.location = ("../selecao2/caminho2.html")
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            selecao = prompt("Digite:\n1 - Para ajudar o amigo do hobbit desconhecido\n2 - Ignorar o empréstimo do álcool e seguir seu caminho")
        }
    }
}