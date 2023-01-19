//capturar elementos das pagina

const inputTarefa = document.querySelector(".input-tarefa");
const btnAddTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLista() {
  const li = document.createElement("li");
  return li;
}

function criarTarefa(textoinput) {
  const li = criaLista();
  li.innerText = textoinput;
  tarefas.appendChild(li);
  limpaInput(); //apos add o elemento a lista esta fun limpa o input e coloca em foco o elemento.
  criarBtnApagar(li);
  salvarTarefas();
}

function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus(); //focus, quando o elemento esta selecionado, neste caso a funcao coloca o elemento em foco.
}

function criarBtnApagar(li) {
  li.innerText += " ";
  const btnApagar = document.createElement("button"); //criar elemtento HTML.
  btnApagar.innerText = "Apagar";
  //btnApagar.classList.add("apagar"); -- como adicionar um class ao elemento.
  btnApagar.setAttribute("class", "apagar"); //outra forma de add atributo ao elemento, passando o atributo e o nome como parametros.
  li.appendChild(btnApagar);
}

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li"); //cria um NodeList com todos os elemntos li da ul tarefas.
  const listaTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("apagar", "").trim();
    listaTarefas.push(tarefaTexto);
  }
  const tarefasJson = JSON.stringify(listaTarefas); //converte o array para um .json (neste cado passando o valor para a variavel);
  localStorage.setItem("tarefas", tarefasJson); //salvar item no navegador,defino o nome do item, somente strings
}

function addTarefasSalvas() {
  //caputurar a lista de tarefas no local storage
  const tarefas = localStorage.getItem("tarefas"); //caputa no local storage o item iformado.
  const listaTarefas = JSON.parse(tarefas); //converte o json pego no local storage em array.

  for (tarefa of listaTarefas) {
    criarTarefa(tarefa);
  }
}

//captutar o event listener do botao de criar tarefa.
btnAddTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  criarTarefa(inputTarefa.value);
});

//capturar o input e adicionar na lista html com o valor do input
inputTarefa.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
  }
});

document.addEventListener("click", function (event) {
  const el = event.target;
  console.log(el);

  if (el.classList.contains("apagar")) {
    el.parentElement.remove(); //captura o pai do elemento e remove
    salvarTarefas();
  }
});

addTarefasSalvas();
