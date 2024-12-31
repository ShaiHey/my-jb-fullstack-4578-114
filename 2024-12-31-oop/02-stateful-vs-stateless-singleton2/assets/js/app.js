import AnimalService from "./animalService.js";
const animalService = AnimalService.getInstance();
const animalService2 = AnimalService.getInstance();
animalService.getAnimalsFromDatabase();
animalService2.getAnimalsFromDatabase();
