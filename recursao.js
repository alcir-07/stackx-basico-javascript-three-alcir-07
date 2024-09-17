// Soma dos números inteiros de 1 a n
function somaNumeros(n) {
  // Sua implementação aqui
  let soma = 0;
  for (let i = 1; i <= n; i++) {
    soma += i;
  }
  return soma;  
}

// Verifica se um número é par
function ehPar(number) {
  // Sua implementação aqui
  return number % 2 === 0;
}
console.log(ehPar(4)); 
console.log(ehPar(3)); 

function fibonacci(n) {
  // Sua implementação aqui
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
console.log(fibonacci(5));

module.exports = { somaNumeros, ehPar, fibonacci };