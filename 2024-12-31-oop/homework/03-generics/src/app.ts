import Backup from "./backup.js";
import Kitten from "./kitten.js";

const stringValue = new Backup("String value", "Alert");

const numberValue = new Backup("Number value", 5)

const boolValue = new Backup("Boolean value", true);

const dateValue = new Backup("Date value", new Date());

const kittenValue = new Backup("Kitten Value", new Kitten("Cat", 2, "Red"));

stringValue.display();
numberValue.display();
boolValue.display();
dateValue.display();
kittenValue.display();