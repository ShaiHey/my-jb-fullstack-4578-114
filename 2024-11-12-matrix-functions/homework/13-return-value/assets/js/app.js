function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function createArray(long) {
  if(typeof long !== "number") return;

  const arr = [];
  for(let i = 1; i <= long; i++){
    arr.push(getRandomNumber());
  }

  return arr;
}

console.log(createArray(1));

console.log(createArray(3));

console.log(createArray(5));