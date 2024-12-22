function change() {
    const color = document.getElementById("color").value;
    console.log(color)
    localStorage.setItem("color", color);
    document.getElementById("body").style.backgroundColor = localStorage.getItem("color");
}

window.onload = function theme(){
    document.getElementById("body").style.backgroundColor = localStorage.getItem("color");
}