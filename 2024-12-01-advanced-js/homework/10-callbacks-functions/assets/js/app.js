const getRandomNumber = () => parseInt(Math.random() * 100);

function show100RandomNumber() {    
    setInterval(() => {
        const numbers = [];
        for(let i=0; i < 100; i++){
            numbers.push(getRandomNumber());
        }
        document.body.innerHTML = numbers;
    }, 1000 * 3);
}

function cool(callback) {
	callback();
}

cool(show100RandomNumber);

// Inline Function
cool(function show100RandomNumber() {    
    setInterval(() => {
        const numbers = [];
        for(let i=0; i < 100; i++){
            numbers.push(getRandomNumber());
        }
        document.body.innerHTML = numbers;
    }, 1000 * 3);
});

// Anonymous Function
cool(function () {    
    setInterval(() => {
        const numbers = [];
        for(let i=0; i < 100; i++){
            numbers.push(getRandomNumber());
        }
        document.body.innerHTML = numbers;
    }, 1000 * 3);
});

// Arrow Function
cool(() => {
    setInterval(() => {
        const numbers = [];
        for(let i=0; i < 100; i++){
            numbers.push(getRandomNumber());
        }
        document.body.innerHTML = numbers;
    }, 1000 * 3);
});