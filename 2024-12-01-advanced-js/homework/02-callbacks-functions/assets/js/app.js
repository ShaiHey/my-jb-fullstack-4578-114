const getRandomNumber = () => parseInt(Math.random() * 100);

function showRandomNumber() {
    document.write(getRandomNumber());
}

function cool(callback) {
    callback();
}

cool(showRandomNumber);

// Inline Function
cool(function showRandomNumber() {
    document.write(getRandomNumber());
});

// Anonymous Function
cool(function () {
    document.write(getRandomNumber());
});

// Arrow Function
cool(() => document.write(getRandomNumber()));