var selecao

function escolhaOpcoes() {
    selecao = prompt("Digite:\n1 - Seguir pelas árvores, onde ela tem total domínio\n2 - Seguir pelo rio, onde avista um barco")

    while(true) {
        if(selecao == 1 ){
            window.location = ("../selecao2/caminho1.html");
            break;
        } else if (selecao == 2) {
            window.location = ("../selecao2/caminho2.html")
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            selecao = prompt("Digite:\n1 - Seguir pelas árvores, onde ela tem total domínio\n2 - Seguir pelo rio, onde avista um barco")
        }
    }
}