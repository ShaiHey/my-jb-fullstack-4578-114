function showName() {
    document.write("Shai");
}

function doSome(callback) {
    callback();
}

doSome(showName);

// Inline Function
doSome(function showName() {
    document.write("Shai");
});

// Anonymous Function
doSome(function () {
    document.write("Shai");
});

// Arrow Function
doSome(() => document.write("Shai"));