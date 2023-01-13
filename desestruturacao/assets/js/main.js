const elementos = [
  { tag: "p", text: "Paragrafo" },
  { tag: "div", text: "div criada" },
  { tag: "footer", text: "footer criado" },
  { tag: "section", text: "section criada" },
];

const container = document.querySelector(".container"); //seleciona a class elemento no HTML, documento para o DOM (document object model)
const div = document.createElement("div"); //criar uma div no hmtl.

for (let i = 0; i < elementos.length; i++) {
  let { tag, text } = elementos[i]; //desestruturacao do obj elemento, criando para cadad indice duas variaveis com os valor do obj
  let tagCriada = document.createElement(tag); //para cada tag se cria um elemento no HTML
  tagCriada.innerText = text; //inserir o valor de texto para cada tag criado no HMTL;
  div.appendChild(tagCriada); // coloca cada tag criada dentro da DIV no HTML.
}

container.appendChild(div); //inseri a div no documento HTML na class container
