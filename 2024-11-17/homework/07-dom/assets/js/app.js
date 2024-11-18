function getRandomNumber() {
    return Math.floor(Math.random() * 6);
}

function change() {
    const input = document.getElementById('input');
    const color = ['red', 'green', 'blue', 'yellow', 'white', 'purple'];

    input.style.backgroundColor = color[getRandomNumber()];
}