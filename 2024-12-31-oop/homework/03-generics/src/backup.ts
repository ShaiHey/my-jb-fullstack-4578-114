export default class Backup<T> {
    constructor(
        private subject: string,
        private value: T
    ) {}

    display() {
        console.log(`Subject: ${this.subject}`);
        console.log(`Value: ${this.value}`);
    }
}