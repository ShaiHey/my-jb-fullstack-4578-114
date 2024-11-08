const rectangle = {
    width: 100,
    height: 50,
    color: "green",
    x: 5,
    y: 2
}

document.write(`Width : ${rectangle.width}<br>Height : ${rectangle.height}<br>Color : ${rectangle.color}<br>X : ${rectangle.x}<br>Y : ${rectangle.y}<br>`);

// Object.keys(rectangle).forEach(key => {
//     document.write(`${key}: ${rectangle[key]}<br>`);
// });

document.write("<hr/>");

for (const key in rectangle) {
    document.write(`${key} : ${rectangle[key]}<br>`);
}