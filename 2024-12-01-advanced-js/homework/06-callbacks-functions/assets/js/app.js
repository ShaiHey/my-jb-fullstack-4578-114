function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function nice(paintCallback) {
	paintCallback("Green");
}

nice(setBackgroundColor);

// Inline Function
nice(function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
});

// Anonymous Function
nice(function (color) {
    document.body.style.backgroundColor = color;
});

// Arrow Function
nice(color => document.body.style.backgroundColor = color);