
var selecao

function escolhaPersonagem() {
    alert ("A sua jornada dentro da misteriosa Floresta de Beldoforth começa aqui. Para começar, deverá escolher seu personagem.")
    selecao = prompt("Com qual personagem deseja jogar? Digite:\n1 - O Cavaleiro Hortan\n2 - O Hobbit Bylim\n3 - O Elfo Agwen")

    if (selecao == 1) {
        return location = ('../Histórias/Cavaleiro/cavaleiro.html')
    } else if (selecao == 2) {
        return location = ('../Histórias/Hobbit/hobbit.html')
    } else if (selecao == 3) {
        return location = ('../Histórias/Elfo/elfo.html')
    } else {
        alert("Por favor, digite uma opção válidade 1 a 3.")
    }
}

