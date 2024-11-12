function getAbsolute(number) {
    return Math.abs(number);
    // return number < 0 ? -number : number;
}

const absoluteNum = getAbsolute(-20);
console.log(absoluteNum);