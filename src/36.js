function printPrimeNumbers(limit) {
  let count = 0;
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      console.log(`Number ${i} is a prime number.`);
      count++;
    }
  }
  console.log(`There are ${count} prime numbers up to ${limit}.`);
}

function isPrime(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

printPrimeNumbers(50);
