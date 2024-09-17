// Converte uma string para um número inteiro
function convertToInt(string) {
    // Sua implementação aqui
    let stringNumero = "123";
    let numeroInteiro = parseInt(stringNumero);
    console.log(numeroInteiro);  // Saída: 123
}

// Converte um número inteiro para uma string
function convertToString(number) {
    // Sua implementação aqui
    let numeroInteiro = 123;
    let stringNumero = numeroInteiro.toString();
    console.log (stringNumero);  // Saída: "123"
}

// Converte um valor para um booleano
function convertToBoolean(value) {
    // Sua implementação aqui
    return !!value;
}

module.exports = { convertToInt, convertToString, convertToBoolean };