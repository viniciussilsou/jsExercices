//cria um timer

//func para criar hora por segundos
function relogio() {
  function criarHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }
  const relogio = document.querySelector(".relogio");
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = criarHoraDosSegundos(segundos);
    }, 1000);
  }

  document.addEventListener("click", function (e) {
    //console.log(e.target); target captura evento (neste caso os clicks)
    const el = e.target;

    if (el.classList.contains("zerar")) {
      //checa o class do elemento se contain o valor informado
      relogio.classList.remove("pausado");
      clearInterval(timer);
      relogio.innerHTML = "00:00:00";
      segundos = 0;
    }
    if (el.classList.contains("iniciar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      iniciaRelogio();
    } //capturar envento do button, recebe evento e func em seguida executa sequencia.

    if (el.classList.contains("pausar")) {
      relogio.classList.add("pausado");
      clearInterval(timer); //limpa o estado da variavel manipulando o estado.
    }
  });
}

relogio();

/*
iniciar.addEventListener("click", function (envent) {});

pausar.addEventListener("click", function (event) {});

zerar.addEventListener("click", function (event) {});
*/
