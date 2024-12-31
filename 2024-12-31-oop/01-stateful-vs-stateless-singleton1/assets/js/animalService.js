import Animal from "./animal.js";
class AnimalService {
    static getInstance() {
        return this.instance;
    }
    // This is a stateless class
    // it doesn't hold ANY data
    constructor() { }
    getAnimalsFromDatabase() {
        // ... Fetches animals from database
        return [new Animal(2), new Animal(4), new Animal(6)];
    }
}
AnimalService.instance = new AnimalService();
export default AnimalService;
