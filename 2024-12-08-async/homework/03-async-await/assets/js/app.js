"use strict";

(() => {

  const generateCuteAnimalAfterDelayAsync = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const cuteAnimals = ["Kitten", "Puppy", "Rabbit", "Budgerigar", "Scorpion", "Spider", "Cockroach"];
        const randomAnimal = Math.floor(Math.random() * cuteAnimals.length);
        if(randomAnimal <= 3) {
          resolve(`This is cute animal : ${cuteAnimals[randomAnimal]}`)
        } else {
          reject(`This is not cute animal : ${cuteAnimals[randomAnimal]}`)
        }
      }, 1000);
    });
  }

  document.getElementById("generateAnimal").addEventListener("click", async () => {
    try {
      const result = await generateCuteAnimalAfterDelayAsync();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  });
})();