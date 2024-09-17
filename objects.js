// Calcula o perímetro e a área de um retângulo
function calcularRetangulo(retangulo) {
    // Sua implementação aqui
    function calcularPerimetro(largura, altura) {
        return 2 * (largura + altura);
    }
    
    function calcularArea(largura, altura) {
        return largura * altura;
    }
    
    // Exemplo de uso
    let largura = 5;
    let altura = 10;
    
    let perimetro = calcularPerimetro(largura, altura);
    let area = calcularArea(largura, altura);
    
    console.log("Perímetro:", perimetro); 
    console.log("Área:", area); 
}

// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa) {
    // Sua implementação aqui
    //A função ehAdulto verifica se a propriedade idade do objeto pessoa é maior ou igual a 18.
    // Se for, retorna true, indicando que a pessoa é maior de idade; caso contrário, retorna false.
    return pessoa.idade >= 18;
}

// Concatena os valores de um objeto em uma string
function concatenaValores(obj) {
    // Sua implementação aqui
    // Object.values(obj) retorna um array contendo os valores do objeto.
    // join('') concatena todos os valores do array em uma única string, sem separadores. 
    //Se você quiser adicionar um separador, como uma vírgula ou um espaço, você pode passá-lo como argumento para o método join().
    return Object.values(obj).join('');
}

module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
