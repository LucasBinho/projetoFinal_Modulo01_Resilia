var selecao

function escolhaCaminho() {
    selecao = prompt("1 - Ele pega o bilhete, rasga e joga no lixo\n2 - Ele analisa o bilhete, decide fazer as malas e parte para a aventura")
    while(true) {
        if(selecao == 1){
            window.location = ("./Caminhos_Hob/selecao1/caminho1.html");
            break;
        } else if (selecao == 2) {
            window.location = ("./Caminhos_Hob/selecao1/caminho2.html");
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            selecao = prompt("1 - Ele pega o bilhete, rasga e joga no lixo\n2 - Ele analisa o bilhete, decide fazer as malas e parte para a aventura")
        }
    }
}