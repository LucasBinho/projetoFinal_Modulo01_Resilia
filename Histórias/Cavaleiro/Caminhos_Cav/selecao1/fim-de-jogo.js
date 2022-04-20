var selecao

function escolhaOpcoes() {
    selecao = prompt("Deseja jogar novamente? Digite:\n1 - Para jogar novamente\n2 - Para finalizar sua participação")
    while(true) {
        if(selecao == 1 ){
            window.location = ("../../../../index.html");
            break;
        } else if (selecao == 2) {
            window.location = ("../../../../gameover/gameover.html");
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            selecao = prompt("Deseja jogar novamente? Digite:\n1 - Para jogar novamente\n2 - Para finalizar sua participação")
        }
    }
    }
  