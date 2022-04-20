var selecao

function escolhaOpcoes() {
    selecao = prompt("Digite:\n1 - Seguir pelas esquerda, em águas tranquilas\n2 - Seguir pela direita, em águas agitadas")

    while(true) {
        if(selecao == 1 ){
            window.location = ("../selecao3/caminho1.html");
            break;
        } else if (selecao == 2) {
            window.location = ("../selecao3/caminho2.html")
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            selecao = prompt("Digite:\n1 - Seguir pelas esquerda, em águas tranquilas\n2 - Seguir pela direita, em águas agitadas")
        }
    }
}