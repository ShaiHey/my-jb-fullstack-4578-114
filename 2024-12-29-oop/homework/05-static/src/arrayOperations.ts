export default class ArrayOperations {
    public constructor(
        public readonly arrayNumber: number[],
    ) {}

    getSum() {
        return this.arrayNumber.reduce((acc, current) => acc + current, 0)
    }

    getAvg() {
        return this.getSum() / this.arrayNumber.length
    }

    getMax() {
        return Math.max(...this.arrayNumber)
    }

    getMin() {
        return Math.min(...this.arrayNumber)
    }
}