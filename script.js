
const resultado = document.querySelector('.resultado');

function escreverNumero(numero) {
  resultado.textContent += numero;
}

function escreverOperacao(operacao) {
    resultado.textContent += operacao
}

function calcular() {
  try {
    resultado.textContent = eval(resultado.textContent); // Usando eval para avaliar a expressão
  } catch (error) {
    resultado.textContent = 'Erro';
  }
}

function limpar() {
  resultado.textContent = '';
}

// Adiciona eventos de clique aos botões de números e operações
document.querySelectorAll('.numeros-botoes button').forEach((button) => {
  button.addEventListener('click', () => escreverNumero(button.textContent));
});

document.querySelectorAll('.operacoes-botoes button').forEach((button) => {
    button.addEventListener('click', () => escreverOperacao(button.textContent));
});

document.querySelectorAll('.acoes-botoes button').forEach((button) => {
  if (button.textContent === '=') {
    button.addEventListener('click', calcular);
  } else if (button.textContent === '<<') {
    button.addEventListener('click', limpar);
  }
});
