const car1 = {
    model: "Audi RS7",
    year: 2024,
    color: "abt",
}

const car2 = {
    model: "Lamborghini Urus SE",
    year: 2024,
    color: "red",
}

const car3 = {
    model: "Porsche 911 GT3 RS",
    year: 2024,
    color: "grey",
}

const cars = [car1, car2, car3];

for(let i=0; i < cars.length; i++){
    document.write(`Car ${i+1} :<br>`);
    document.write(`Model: ${cars[i].model}<br>`);
    document.write(`Year: ${cars[i].year}<br>`);
    document.write(`Color: ${cars[i].color}<br><hr/>`);
}

for(const car of cars){
    document.write(`<h3>Properties of ${car.model}:</h3><br>`);
    for(const property in car){
        document.write(`${property} : ${car[property]}<br>`);
    }
    document.write("<hr/>");
}