function sayGoodbye() {
    // We don't use this way to access dom elements
    // console.log(document.body.firstChild.nextSibling);

    document.getElementById("myParagraph").innerText="Goodbye";
}

function saveName() {
    localStorage.setItem("username", document.getElementById("nameInput").value);
}

function restoreName() {
    document.getElementById("nameInput").value = localStorage.getItem('username');
}