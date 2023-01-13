// JOGO CAMPO MINADO
//criar tabuleiro
function criarTabuleiro(tamanho) {
  var tabuleiro = new Array(tamanho);

  for (let l = 0; l < tabuleiro.length; l++) {
    tabuleiro[l] = [];
    for (let c = 0; c < tabuleiro.length; c++) {
      tabuleiro[l][c] = "0";
    }
  }

  return tabuleiro;
}

// criar um numero aleatorio entre os valores passados e retorna ele
function radomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//recebe quantidade de minhas e um tabuleiro e cria um array com posicoes onde serao inseridas as minas e retorna array onde as minhas devem ser inseriadas

function posicaoDasMinas(minas, tabuleiro) {
  const mapaMinas = [];
  const mapaMinasUnico = [];

  while (mapaMinas.length < minas) {
    const linha = radomNum(0, tabuleiro.length - 1);
    const coluna = radomNum(0, tabuleiro.length - 1);

    const posicao = [linha, coluna];

    if (!mapaMinasUnico.includes(`${linha}-${coluna}`)) {
      mapaMinas.push(posicao);
      mapaMinasUnico.push(`${linha}-${coluna}`);
    }
  }
  return mapaMinas;
}
//inseri as minas mapeados no array e retorna tabuleiro atualizado com as minas.
function inserirMinas(mapa, tabuleiro) {
  for (let i = 0; i < mapa.length; i++) {
    const linha = mapa[i][0];
    const coluna = mapa[i][1];

    tabuleiro[linha][coluna] = "*";
  }
  return tabuleiro;
}

tb = criarTabuleiro(5);
posicaoMinas = posicaoDasMinas(9, tb);
console.log(posicaoDasMinas(9, tb));
tabuleiroAtualizado = inserirMinas(posicaoMinas, tb);

let a = 0;
