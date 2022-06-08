function calculadora() {
    const opcao = prompt("Que operação deseja realizar? \n[1] Adição \n[2] Subtração \n[3] Multiplicação \n[4] Divisão");
    if (opcao == 1) {
        let num1 = Number(prompt("Digite um número: "));
        let num2 = Number(prompt("Digite outero número: "));
        const soma = num1 + num2;
        alert(`A soma entre ${num1} e ${num2} é ${soma}`)
    } else if (opcao == 2) {
        let num1 = Number(prompt("Digite um número: "));
        let num2 = Number(prompt("Digite outero número: "));
        const subtracao = num1 - num2;
        alert(`A subtração entre ${num1} e ${num2} é ${subtracao}`)
    } else if (opcao == 3) {
        let num1 = Number(prompt("Digite um número: "));
        let num2 = Number(prompt("Digite outero número: "));
        const multiplicacao = num1 * num2;
        alert(`A soma entre ${num1} e ${num2} é ${multiplicacao}`)
    } else if (opcao == 4) {
        let num1 = Number(prompt("Digite um número: "));
        let num2 = Number(prompt("Digite outero número: "));
        const divisao = num1 / num2;
        alert(`A soma entre ${num1} e ${num2} é ${divisao}`)
    } else {
        alert("Insira um número válido!");
    }

}
calculadora()