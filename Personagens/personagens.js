
var selecao

function escolhaPersonagem() {
    selecao = prompt("Com qual personagem deseja jogar? Digite:\n1 - O Cavaleiro Hortan\n2 - O Hobbit Bylim\n3 - A Elfa Agwen")
    while(true) {
        if (selecao == 1) {
            window.location = ('../Histórias/Cavaleiro/cavaleiro.html')
            break;
        } else if (selecao == 2) {
            window.location = ('../Histórias/Hobbit/hobbit.html')
            break;
        } else if (selecao == 3) {
            window.location = ('../Histórias/Elfa/elfa.html')
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 a 3.")
            selecao = prompt("Com qual personagem deseja jogar? Digite:\n1 - O Cavaleiro Hortan\n2 - O Hobbit Bylim\n3 - O Elfo Agwen")
        }
    }
    }
   

