var selecao

function escolhaCaminho() {
    selecao = prompt("1 - Permanece no acampamento com a fogueira\n2 - Sai em busca de alimento")
    while(true) {
        if(selecao == 1){
            window.location = ("../selecao2/caminho1.html");
            break;
        } else if (selecao == 2) {
            window.location = ("../selecao2/caminho2.html");
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            selecao = prompt("1 - Permanece no acampamento com a fogueira\n2 - Sai em busca de alimento")
        }
    }
}