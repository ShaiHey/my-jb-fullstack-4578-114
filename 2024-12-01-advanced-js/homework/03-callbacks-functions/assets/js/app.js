function showNumber(num) {
    document.write(num);
}

function nice(callback) {
	callback(100);
}

nice(showNumber);

// Inline Function
nice(function showNumber(num) {
    document.write(num);
});

// Anonymous Function
nice(function (num) {
    document.write(num);
});

// Arrow Function
nice(num => document.write(num));