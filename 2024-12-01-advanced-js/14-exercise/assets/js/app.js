setInterval(() => {
    const time = document.getElementById("time");
    const now = new Date();
    time.innerHTML = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
}, 1 * 1000)