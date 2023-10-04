
const resultado = document.querySelector('.resultado');


function escreverNumero(numero) {
  resultado.textContent += numero;
}

function escreverOperacao(operacao) {
    resultado.textContent += operacao;
}

function calcular() {
  try {
    resultado.textContent = eval(resultado.textContent); // Usando eval para avaliar a expressão
  } catch (error) {
    resultado.textContent = 'Erro';
  }
}

function calcularRaizQuadrada() {
  const expressao = resultado.textContent;
  const numero = parseFloat(expressao);
  if (!isNaN(numero)) {
    resultado.textContent = Math.sqrt(numero);
  } else {
    resultado.textContent = 'Erro';
  }
}

function calcularPotenciaA2() {
  const expressao = resultado.textContent;
  const numero = parseFloat(expressao);
  if(!isNaN(numero)) {
    resultado.textContent = Math.pow(numero, 2);
  } else {
    resultado.textContent = 'Erro';
  }
}

function calcularExponenciacao() {
  const expressao = resultado.textContent;
  const operacaoIndex = expressao.indexOf('ⁿ');
  
  if (operacaoIndex !== -1) {
    const base = parseFloat(expressao.substring(0, operacaoIndex));
    const expoente = parseFloat(expressao.substring(operacaoIndex + 1));
    
    if (!isNaN(base) && !isNaN(expoente)) {
      const resultadoExponenciacao = Math.pow(base, expoente);
      resultado.textContent = resultadoExponenciacao;
    } else {
      resultado.textContent = 'Erro';
    }
  }
}

function calcularFatorial() {
  const expressao = resultado.textContent;
  const numero = parseFloat(expressao);
  if (!isNaN(numero)) {
    resultado.textContent = fatorial(numero);
  } else {
    resultado.textContent = 'Erro';
  }
}

function fatorial(n) {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return 'Erro';
  } else {
    return n * fatorial(n - 1);
  }
}

function calcularLogBase2() {
  const expressao = resultado.textContent;
  const numero = parseFloat(expressao);
  if (!isNaN(numero) && numero > 0) {
    resultado.textContent = Math.log2(numero);
  } else {
    resultado.textContent = 'Erro';
  }
}

function calcularLogBase10() {
  const expressao = resultado.textContent;
  const numero = parseFloat(expressao);
  if (!isNaN(numero) && numero > 0) {
    resultado.textContent = Math.log10(numero);
  } else {
    resultado.textContent = 'Erro';
  }
}

function calcularLogNatural() {
  const expressao = resultado.textContent;
  const operacaoIndex = expressao.indexOf('N');
  
  if (operacaoIndex !== -1) {
    const numero = parseFloat(expressao.substring(0, operacaoIndex));
    
    if (!isNaN(numero)) {
      const resultadoLogNatural = Math.log(numero);
      resultado.textContent = resultadoLogNatural;
    } else {
      resultado.textContent = 'Erro';
    }
  }
}

function atualizarVisor(valor) {
  resultado.textContent += valor;
}

function calcularResultado() {
  try {
    resultado.textContent = eval(resultado.textContent);
  } catch (error) {
    resultado.textContent = 'Erro';
  }
}

document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (/^[0-9\+\-\*\/\(\)\.]+$/.test(key)) {
    atualizarVisor(key);
  } else if (key === 'Enter') {
    calcularResultado();
  } else if (key === 'Backspace') {
    resultado.textContent = resultado.textContent.slice(0, -1);
  } else if (key === 'C') {
    resultado.textContent = '';
  }
});

function limpar() {
  resultado.textContent = '';
}


//Resgata o id e adciona a função para cada botão
 document.querySelector('#btnRaizQuadrada').addEventListener('click', calcularRaizQuadrada);
 document.querySelector('#btnElevarAoQuadrado').addEventListener('click', calcularPotenciaA2);
 document.querySelector('#btnExponenciacao').addEventListener('click', calcularExponenciacao);
 document.querySelector('#btnFatorial').addEventListener('click', calcularFatorial);
 document.querySelector('#btnLogBase2').addEventListener('click', calcularLogBase2);
 document.querySelector('#btnLogBase10').addEventListener('click', calcularLogBase10);
 document.querySelector('#btnLogNatural').addEventListener('click', calcularLogNatural);

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
