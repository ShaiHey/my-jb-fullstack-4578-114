import Colors from "./colors.js";
function getColorItem(color) {
    switch (color) {
        case Colors.RED:
            return "Apple";
        case Colors.BLUE:
            return "Sky";
        case Colors.YELLOW:
            return "Lemon";
        case Colors.GREY:
            return "Mouse";
        case Colors.BLACK:
            return "Smartphone";
    }
}
const color = Colors.RED;
console.log(`Item with color : ${color} is : ${getColorItem(color)}`);
