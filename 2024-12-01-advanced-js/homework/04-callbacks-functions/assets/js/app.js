function selectNumber(a, b, c, d, e) {
    const numbers = [a, b, c, d, e];
    const randomNumber = Math.floor(Math.random() * numbers.length);

    return numbers[randomNumber];
}

function amazing(callback) {
	const num = callback(42, 128, 37, 81, 66);
	document.write(`Number: ${num}`);
}

amazing(selectNumber);

// Inline Function
amazing(function selectNumber(a, b, c, d, e) {
    const numbers = [a, b, c, d, e];
    const randomNumber = Math.floor(Math.random() * numbers.length);

    return numbers[randomNumber];
});

// Anonymous Function
amazing(function (a, b, c, d, e) {
    const numbers = [a, b, c, d, e];
    const randomNumber = Math.floor(Math.random() * numbers.length);

    return numbers[randomNumber];
});

// Arrow Function
amazing((a, b, c, d, e) => {
    const numbers = [a, b, c, d, e];
    const randomNumber = Math.floor(Math.random() * numbers.length);

    return numbers[randomNumber];
});