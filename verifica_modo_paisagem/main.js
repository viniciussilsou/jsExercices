//funcao recebe dimenssoes de uma imagem e retorna se esta no modo paisagem.

/*function paisagem(altura, largura) {
  if (altura > largura) {
    return false;
  } else {
    return true;
  }
}
*/

// abstracao utilzando tenario:

const paisagem2 = (altura, largura) => (altura > largura ? false : true);

console.log(paisagem2(1080, 1920));
