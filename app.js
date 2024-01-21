let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function botaoConsole() {
  console.log('O botão foi clicado');
}

function botaoAlerta() {
  alert('Eu amo JS!');
}

function botaoPrompt() {
  cidade = prompt('Qual a cidade do Brasil');
  alert(`Estive em ${cidade} e lembrei de você`);
}

function botaoSoma() {
  let numero1 = parseInt(prompt('Digite um numero:'));
  let numero2 = parseInt(prompt('Digite outro numero:'));
  let soma = numero1 + numero2;
  alert(`O resultado da soma é ${soma}`);
}