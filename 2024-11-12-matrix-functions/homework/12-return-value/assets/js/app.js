function getRandomNumber(min, max) {
  return parseInt(Math.random() * ((max + 1) - min)) + min;
}

console.log(getRandomNumber(0, 100));

console.log(getRandomNumber(0, 200));

console.log(getRandomNumber(2, 90));