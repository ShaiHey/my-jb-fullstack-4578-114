function getPersonalInfo() {
    const firstName = prompt("Please enter a first name");
    const lastName = prompt("Please enter a last name");
    const email = prompt("Please enter a email");
    const phone = prompt("Please enter a phone number");
    const age = +prompt("Please enter a age");
    document.getElementById("result").innerHTML = `
        Your information :<br>
        First name : ${firstName},<br>
        Last name : ${lastName},<br>
        Email : ${email},<br>
        Phone number : ${phone},<br>
        Age : ${age},<br>
    `;
}
getPersonalInfo();
