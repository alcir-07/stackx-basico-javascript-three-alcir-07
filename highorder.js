// Implemente a função 'dobrarNumeros' que recebe um array de números
// e retorna um novo array com cada número dobrado.
function dobrarNumeros(numeros) {
    // Sua implementação aqui
    //A função usa o método map(), que aplica uma função a cada elemento do array e 
    //retorna um novo array com os resultados. No caso, a função multiplica cada número por 2.
    return numeros.map(function(numero) {
        return numero * 2;
    });
}

// Implemente a função 'somarValores' que recebe um array de números
// e retorna a soma de todos os valores.
function somarValores(numeros) {
    // Sua implementação aqui
    //A função reduce() percorre o array acumulando os valores. O parâmetro inicial do acumulador (soma) é 0, 
    //e a cada iteração o valor de numero é somado ao acumulador. O resultado final é a soma de todos os elementos do array.
    return numeros.reduce(function(soma, numero) {
        return soma + numero;
    }, 0);
}

// Implemente a função 'filtrarPares' que recebe um array de números
// e retorna um novo array contendo apenas os números pares.
function filtrarPares(numeros) {
    // Sua implementação aqui
    //A função filter() cria um novo array com todos os elementos que satisfazem a condição fornecida.
    // Neste caso, o filtro verifica se o número é par (numero % 2 === 0).
   // O operador % (módulo) retorna o resto da divisão entre dois números.
    //Quando um número é dividido por 2:
    //Se o resto for 0, o número é par.
    //Se o resto for diferente de 0, o número é ímpar.
    return numeros.filter(function(numero) {
        return numero % 2 === 0;
    });
    
}


module.exports = {
    dobrarNumeros,
    somarValores,
    filtrarPares
};