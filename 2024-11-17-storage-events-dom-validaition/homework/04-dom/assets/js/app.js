function send() {
    let message = document.getElementById('firstName').value && document.getElementById('lastName').value ? `${document.getElementById('firstName').value} ${document.getElementById('lastName').value}` : "You didn't write first or last name";
    alert(message);
}