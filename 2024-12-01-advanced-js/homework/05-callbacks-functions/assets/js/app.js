function setBackgroundColor() {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'grey', 'cyan', 'magenta', 'lime', 'teal', 'indigo', 'violet'];
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColor];
}

function cool(paintCallback) {
	paintCallback();
}

cool(setBackgroundColor);

// Inline Function
cool(function setBackgroundColor() {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'grey', 'cyan', 'magenta', 'lime', 'teal', 'indigo', 'violet'];
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColor];
});

// Anonymous Function
cool(function () {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'grey', 'cyan', 'magenta', 'lime', 'teal', 'indigo', 'violet'];
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColor];
});

// Arrow Function
cool(() => {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'grey', 'cyan', 'magenta', 'lime', 'teal', 'indigo', 'violet'];
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColor];
});