//funcao Fizz Buzz

//recebe numero e verifica se é divisivel por 3 retornando Fizz ou divisivel por 5 retornando Buzz ou por ambos return FizzBuzz;

function fizzBuzz(numero) {
  if (typeof numero === typeof !`Number`) return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return `FizzBuzz`;
  if (numero % 3 !== 0 && numero % 5 !== 0) return ``;
  if (numero % 3 === 0) return `Fizz`;
  if (numero % 5 === 0) return `Buzz`;
}

for (let i = 0; i <= 50; i++) {
  console.log(i, fizzBuzz(i));
}
