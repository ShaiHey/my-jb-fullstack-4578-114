import CoffeeMaker from "./coffee.js";
import HotDogsMaker from "./hotdogs.js";
import Schnitzel from "./schnitzel.js";

export default class FoodTruck implements HotDogsMaker, CoffeeMaker, Schnitzel {
    // public constructor(
    //     public pan: object,
    //     public hotDogsMachine: object,
    //     public espressoMachine: object
    // ) {}

    pan: object
    hotDogsMachine: object
    espressoMachine: object

    fry(addons: object[]): object {
        console.log("Frying schnitzel...")
        return {}
    }
    
    makeLatte(): object {
        console.log("Making latte...")
        return {}
    }

    makeAmericano(): object {
        console.log("Making americano...")
        return {}
    }

    makeHotDogs(): object {
        console.log("Making hot dogs...")
        return {}
    }
}