const myName: string = "Yossi";

// hasName(myName) // TS error...
hasName(!!myName)

function hasName(hasName: boolean) {
    if(hasName) {
        console.log("They have a name")
    }
}