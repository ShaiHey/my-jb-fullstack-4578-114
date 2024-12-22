function send() {
    const email = document.getElementById('email');
    if(!email.value) {
        const errorSpan = document.getElementById('errorEmail');

        errorSpan.innerText = "You didn't put email";
        email.style.backgroundColor = 'red';
    } else {
        alert(email.value);
    }
}