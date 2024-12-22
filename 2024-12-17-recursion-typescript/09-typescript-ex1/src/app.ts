document.getElementById("myForm").addEventListener("submit", event => {
    event.preventDefault();
    // When we use the keyword "as"
    // We actually tell typescript: trust me, i know i am doing
    const msg = document.getElementById("msg") as HTMLInputElement;
    console.log(msg.value);
})

function test() {
    type Person = {
        name: string | undefined, // Union type
        middleName?: string, // Same as above, shorter syntax
        familyName: string,
        age: number,
        birthdate: Date
    }

    type Animal = {
        type: string,
        eat: Function
    }

    const toy: Animal = {
        type: "Yorkshare",
        eat: () => { console.log("Eating bonzo") }
    }

    const yossi: Person = toy as unknown as Person;
}