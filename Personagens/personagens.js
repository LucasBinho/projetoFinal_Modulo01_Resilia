
var selecao

function escolhaCavaleiro() {
    selecao = prompt("Tem certeza que deseja selecionar esse personagem? Digite:\n1 - Sim\n2 - Não")
    while(true) {
        if (selecao == 1) {
            window.location = ('../Histórias/Cavaleiro/cavaleiro.html')
            break;
        } else if (selecao == 2) {
            break;
        } else {
            alert("Por favor, digite uma opção válida de 1 ou 2.")
            break;
        }  
        }  
     }

    

    function escolhaHobbit() {
        selecao = prompt("Tem certeza que deseja selecionar esse personagem? Digite:\n1 - Sim\n2 - Não")
        while(true) {
            if (selecao == 1) {
                window.location = ('../Histórias/Hobbit/hobbit.html')
                break;
            } else if (selecao == 2) {
                break;
            } else {
                alert("Por favor, digite uma opção válida de 1 ou 2.")
                break;
            }
            } 
        }
        

        function escolhaElfa() {
            selecao = prompt("Tem certeza que deseja selecionar esse personagem? Digite:\n1 - Sim\n2 - Não")
            while(true) {
                if (selecao == 1) {
                    window.location = ('../Histórias/Elfa/elfa.html')
                    break;
                } else if (selecao == 2) {
                    break;
                } else {
                    alert("Por favor, digite uma opção válida de 1 ou 2.")
                    break;
                }
                } 
            }
       
   

