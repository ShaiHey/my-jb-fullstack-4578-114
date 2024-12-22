function hover(btn) {
    const button = document.getElementById(`btn${btn}`);
    button.className = "hover";
}

function out(btn) {
    const button = document.getElementById(`btn${btn}`);
    button.className = "btn";
}