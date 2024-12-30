export default class ArrayOperations {
    constructor(arrayNumber) {
        this.arrayNumber = arrayNumber;
    }
    getSum() {
        return this.arrayNumber.reduce((acc, current) => acc + current, 0);
    }
    getAvg() {
        return this.getSum() / this.arrayNumber.length;
    }
    getMax() {
        return Math.max(...this.arrayNumber);
    }
    getMin() {
        return Math.min(...this.arrayNumber);
    }
}
