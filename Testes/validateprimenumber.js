// Faz validação de todos os numeros primos de 1 até 1000, e retorna a soma deles.

const main = (params) => {
  const primeNumbers = [];

  for (let i = 1; i <= 1000; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }

  const result = primeNumbers.reduce((prev, curre) => {
    return prev + curre;
  });
  return result;
};
function isPrime(number) {
  let isPrime = true;
  if (number === 1 || number < 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime ? true : false;
}

const primeNumbers = [];

for (let i = 1; i <= 1000; i++) {
  if (isPrime(i)) {
    primeNumbers.push(i);
  }
}

console.log(main(isPrime));
