function getRandomNumber() {
  const numbers = [1, 2, 3, 4, 5];
  return Math.floor(Math.random() * (numbers.length - 1)) + 1;
}

console.log(getRandomNumber());
