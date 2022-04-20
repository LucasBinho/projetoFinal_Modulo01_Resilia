var selecao

function escolhaCaminho() {
    selecao = prompt("1 - Foge e volta para o conforto de sua casa\n2 - Procura uma maneira de distrair o Golem e entrar na caverna")
    while(true) {
        if(selecao == 1){
            window.location = ("../selecao4/caminho1.html");
            break;
        } else if (selecao == 2) {
            window.location = ("../selecao4/caminho2.html");
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            selecao = prompt("1 - Foge e volta para o conforto de sua casa\n2 - Procura uma maneira de distrair o Golem e entrar na caverna")
        }
    }
}