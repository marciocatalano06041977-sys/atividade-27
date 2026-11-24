// 1. Recebe o número do usuário
const numero = +prompt("Digite um número inteiro não negativo para calcular o fatorial:");

// 2. Validação da entrada (fatorial não existe para negativos)
if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
  alert("Por favor, digite um número inteiro maior ou igual a zero.");
} else {
  let fatorial = 1;
  let i = numero;

  // 3. Cálculo com DO-WHILE
  do {
    if (i > 1) {
      fatorial *= i;
    }
    i--;
  } while (i > 1);

  // 4. Exibe o resultado
  alert(`O fatorial de ${numero} (${numero}!) é: ${fatorial}`);
}