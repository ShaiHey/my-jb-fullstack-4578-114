export default class Backup {
    constructor(subject, value) {
        this.subject = subject;
        this.value = value;
    }
    display() {
        console.log(`Subject: ${this.subject}`);
        console.log(`Value: ${this.value}`);
    }
}
