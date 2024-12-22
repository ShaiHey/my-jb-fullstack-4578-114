function changeParagraph() {
    document.getElementById("myP").innerText=document.getElementById("textInput").value;
    document.getElementById("myP").style.backgroundColor=document.getElementById("colorInput").value;

    // document.getElementById("myP").className = "redBackground" // Edit
    // document.getElementById("myP").classList.add("redBackground") // Add
}