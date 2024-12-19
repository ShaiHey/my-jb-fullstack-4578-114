function getPersonalInfo() {
    const firstName: string = prompt("Please enter a first name");
    const lastName: string = prompt("Please enter a last name");
    const email: string = prompt("Please enter a email");
    const phone: string = prompt("Please enter a phone number");
    const age: number = +prompt("Please enter a age");

    document.getElementById("result").innerHTML = `
        Your information : 
        First name : ${firstName},
        Last name : ${lastName},
        Email : ${email},
        Phone number : ${phone},
        Age : ${age},
    `
}

getPersonalInfo();