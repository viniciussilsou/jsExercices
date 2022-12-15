const form = document.querySelector("#formulario"); //selecionando formulario do html

form.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const inputPeso = evento.target.querySelector("#peso"); //seleciona o elevento do evento
  const inputAltura = evento.target.querySelector("#altura");

  const peso = Number(inputPeso.value); //pega o valor do elemento .value
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("peso invalido", false);
    return;
  }
  if (!altura) {
    setResultado("altura invalida", false);
    return;
  }
  const imc = getImc(peso, altura);
  const indiceImc = getIndiceImc(imc);

  const msg = `seu nivel imc é ${imc} e seu peso esta ${indiceImc}`;

  setResultado(msg, true);

  console.log(imc, indiceImc);
});

function getIndiceImc(imc) {
  const indice = [
    "abaixo do peso",
    "peso normal",
    "sobrepeso",
    "obesidade grau 1",
    "obesidade grau 2",
    "obesidade grau 3",
  ];

  if (imc >= 39.9) {
    return indice[5];
  }
  if (imc >= 34.9) {
    return indice[4];
  }
  if (imc >= 29.9) {
    return indice[3];
  }
  if (imc >= 24.9) {
    return indice[2];
  }
  if (imc >= 18.5) {
    return indice[1];
  }
  if (imc < 18.5) {
    return indice[0];
  }
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function pCreator() {
  //cria paragrafos HTML em div
  const p = document.createElement("p"); //criando um elemento P dentro da dvi resultado do HTML
  return p;
}

function setResultado(mensagem, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = pCreator();

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = mensagem;
  resultado.appendChild(p);
}
