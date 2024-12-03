function setBackgroundColor(a, b, c) {
    const colors = [a, b, c];
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColor];
    return colors[randomColor];
}

function amazing(paintCallback) {
	const paintedColor = paintCallback("Red", "Green", "Blue");
	console.log(`Painted Color: ${paintedColor}`);
}


amazing(setBackgroundColor);

// Inline Function
amazing(function setBackgroundColor(a, b, c) {
    const colors = [a, b, c];
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColor];
    return colors[randomColor];
});

// Anonymous Function
amazing(function (a, b, c) {
    const colors = [a, b, c];
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColor];
    return colors[randomColor];
});

// Arrow Function
amazing((a, b, c) => {
    const colors = [a, b, c];
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColor];
    return colors[randomColor];
});