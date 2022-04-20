var selecao

function escolhaCaminho() {
    selecao = prompt("1 - Um caminho livre e bem demarcado\n2 - Uma estrada sinuosa e escura, cheia de espinhos")
    while(true) {
        if(selecao == 1){
            window.location = ("../selecao3/caminho1.html");
            break;
        } else if (selecao == 2) {
            window.location = ("../selecao3/caminho2.html");
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            selecao = prompt("1 - Um caminho livre e bem demarcado\n2 - Uma estrada sinuosa e escura, cheia de espinhos")
        }
    }
}