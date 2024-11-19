function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function change() {
    const input = document.getElementById('input');
    const colors = ['red', 'green', 'blue', 'yellow', 'white', 'purple'];

    input.style.backgroundColor = colors[getRandomNumber(colors.length)];
}