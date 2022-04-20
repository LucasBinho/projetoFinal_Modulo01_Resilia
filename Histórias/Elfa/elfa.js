var selecao

function escolhaCaminho() {
    selecao = prompt("1 - Achar que os lacaios estavam mentindo\n2 - Como não tem mais nada de interessante para fazer, decide descobrir se é verdade")
    while(true) {
        if(selecao == 1){
            window.location = ("../Elfa/Caminhos_Elfa/selecao1/caminho1.html");
            break;
        } else if (selecao == 2) {
            window.location = ("../Elfa/Caminhos_Elfa/selecao1/caminho2.html");
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            selecao = prompt("1 - Pegar a Esquerda\n2 - Pegar a Direita")
        }
    }
}