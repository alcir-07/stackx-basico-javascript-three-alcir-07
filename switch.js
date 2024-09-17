// Retorna o dia da semana correspondente a um número
function retornaDiaSemana(number) {
    // Sua implementação aqui
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    if (numero < 1 || numero > 7) {
      throw new Error('Número inválido. Deve ser entre 1 e 7.');
    }
    return diasSemana[numero - 1];    
}
console.log(retornaDiaSemana(1));
console.log(retornaDiaSemana(3)); 
console.log(retornaDiaSemana(7));

// Retorna o preço do produto com base no código de produto
function retornaPrecoProduto(code) {
    // Sua implementação aqui
      // Defina um dicionário de produtos com seus preços
  const produtos = {
    'P001': 10.99,
    'P002': 5.99,
    'P003': 7.99,
    // Adicione mais produtos conforme necessário
  };

  // Verifique se o código do produto existe no dicionário
  if (produtos.hasOwnProperty(code)) {
    return produtos[code];
  } else {
    return 'Produto não encontrado'; // Retorne uma mensagem se o produto não for encontrado
  }    
}

// Retorna a categoria do produto com base no tipo de produto
function retornaCategoriaProduto(type) {
    // Sua implementação aqui
      // Defina um dicionário de categorias com seus tipos de produtos
  const categorias = {
    'Eletrônicos': ['TV', 'Notebook', 'Smartphone'],
    'Eletrodomésticos': ['Fogão', 'Geladeira', 'Lavadora'],
    'Vestuário': ['Camisa', 'Calça', 'Sapato'],
    // Adicione mais categorias conforme necessário
  };

  // Verifique se o tipo de produto existe em alguma categoria
  for (const categoria in categorias) {
    if (categorias[categoria].includes(type)) {
      return categoria;
    }
  }

  return 'Categoria não encontrada'; // Retorne uma mensagem se a categoria não for encontrada
}

module.exports = { retornaDiaSemana, retornaPrecoProduto, retornaCategoriaProduto };