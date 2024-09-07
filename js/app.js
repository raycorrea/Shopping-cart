// Selecionando os elementos do HTML
const produtoSelect = document.getElementById('produto');
const quantidadeInput = document.getElementById('quantidade');
const listaProdutos = document.getElementById('lista-produtos');
const valorTotal = document.getElementById('valor-total');

// Função para adicionar um produto ao carrinho
function adicionar() {
  const produtoSelecionado = produtoSelect.value;
  const quantidade = quantidadeInput.value;

  // Criando um novo elemento para representar o produto no carrinho
  const novoItem = document.createElement('div');
  novoItem.classList.add('carrinho__produtos__produto');
  novoItem.textContent = `${quantidade}x ${produtoSelecionado}`;

  // Adicionando o novo item à lista de produtos
  listaProdutos.appendChild(novoItem);

  // Atualizando o valor total
  atualizarValorTotal();
}

// Função para limpar o carrinho
function limpar() {
  listaProdutos.innerHTML = '';
  valorTotal.textContent = 'R$0';
}

// Função para calcular e atualizar o valor total
function atualizarValorTotal() {
  let total = 0;
  const itensCarrinho = listaProdutos.querySelectorAll('.carrinho__produtos__produto');

  itensCarrinho.forEach(item => {
    const valorProduto = parseFloat(item.textContent.match(/\d+(?:\.\d+)?/g)[1]);
    const quantidade = parseInt(item.textContent.match(/\d+/g)[0]);
    total += valorProduto * quantidade;
  });

  valorTotal.textContent = `R$${total.toFixed(2)}`;
}