var selecao

function escolhaCaminho() {
    selecao = prompt("1 - Pegar a Esquerda\n2 - Pegar a Direita")
    while(true) {
        if(selecao == 1){
            window.location = ("./Caminhos_Cav/selecao1/esquerda.html");
            break;
        } else if (selecao == 2) {
            window.location = ("./Caminhos_Cav/selecao1/direita.html");
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            selecao = prompt("1 - Pegar a Esquerda\n2 - Pegar a Direita")
        }
    }
}