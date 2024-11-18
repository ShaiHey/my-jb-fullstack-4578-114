function send() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    alert(`
    First Name : ${firstName}
    Last Name : ${lastName}
    Email : ${email}
    Phone : ${phone}
    Message : ${message}`
    );
}