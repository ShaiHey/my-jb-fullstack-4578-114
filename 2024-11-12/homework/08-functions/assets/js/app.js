function printCurrentTime() {
    const currentDate = new Date();
    document.write(`Current time is : ${currentDate.getHours()}:${currentDate.getMinutes()}`);
}

printCurrentTime();