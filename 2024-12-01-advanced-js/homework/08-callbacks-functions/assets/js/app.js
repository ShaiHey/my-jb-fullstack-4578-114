const getRandomNumber = () => Math.floor(Math.random() * 101);

function showRandomNumber() {
    setInterval(() => {
        document.body.innerHTML = getRandomNumber();
    }, 1000)
}

function cool(callBack) {
	callBack();
}

cool(showRandomNumber);

// Inline Function
cool(function showRandomNumber() {
    setInterval(() => {
        document.body.innerHTML = getRandomNumber();
    }, 1000)
});

// Anonymous Function
cool(function () {
    setInterval(() => {
        document.body.innerHTML = getRandomNumber();
    }, 1000)
});

// Arrow Function
cool(() => {
    setInterval(() => {
        document.body.innerHTML = getRandomNumber();
    }, 1000)
});