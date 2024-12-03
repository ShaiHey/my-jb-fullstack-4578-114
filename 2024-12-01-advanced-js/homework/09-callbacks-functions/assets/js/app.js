function setBackgroundColor() {    
    setInterval(() => {
        const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'grey', 'cyan', 'magenta', 'lime', 'teal', 'indigo', 'violet'];
        const randomColor = Math.floor(Math.random() * colors.length);
        document.body.style.backgroundColor = colors[randomColor];
    }, 1000);
}

function cool(callback) {
	callback();
}

cool(setBackgroundColor);

// Inline Function
cool(function setBackgroundColor() {    
    setInterval(() => {
        const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'grey', 'cyan', 'magenta', 'lime', 'teal', 'indigo', 'violet'];
        const randomColor = Math.floor(Math.random() * colors.length);
        document.body.style.backgroundColor = colors[randomColor];
    }, 1000);
});

// Anonymous Function
cool(function () {    
    setInterval(() => {
        const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'grey', 'cyan', 'magenta', 'lime', 'teal', 'indigo', 'violet'];
        const randomColor = Math.floor(Math.random() * colors.length);
        document.body.style.backgroundColor = colors[randomColor];
    }, 1000);
});

// Arrow Function
cool(() => {    
    setInterval(() => {
        const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'grey', 'cyan', 'magenta', 'lime', 'teal', 'indigo', 'violet'];
        const randomColor = Math.floor(Math.random() * colors.length);
        document.body.style.backgroundColor = colors[randomColor];
    }, 1000);
});