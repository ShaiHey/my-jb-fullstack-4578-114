import Drum from "./drum.js";
import GrandPiano from "./grand-piano.js";
import Guitar from "./guitar.js";
import Piano from "./piano.js";
const guitar = new Guitar("Stratocaster", "Fender", "Sunburst", 6);
const drum = new Drum("Drumset 5000", "Pearl", "Gloss Black", 22);
const piano = new Piano("P-125", "Yamaha", "Black", 88);
const grandPiano = new GrandPiano("Model B", "Steinway & Sons", "Polished Black", 88, 1.80);
guitar.display();
guitar.makeSound();
console.log("---------------------");
drum.display();
drum.makeSound();
console.log("---------------------");
piano.display();
piano.makeSound();
piano.test();
piano.tune();
console.log("---------------------");
grandPiano.display();
grandPiano.makeSound();
grandPiano.test();
grandPiano.tune();
