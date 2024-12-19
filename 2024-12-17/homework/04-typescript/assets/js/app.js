function printMirroredTriangles(n) {
    for (let row = 1; row <= n; row++) {
        for (let blanksLeft = 1; blanksLeft <= n - row; blanksLeft++) {
            document.write("&nbsp;&nbsp;&nbsp;");
        }
        for (let colLeft = 1; colLeft <= row; colLeft++) {
            document.write("* ");
        }
        for (let colRight = row - 1; colRight >= 1; colRight--) {
            document.write("* ");
        }
        document.write("<br>");
    }
    for (let row = n - 1; row >= 1; row--) {
        for (let blanksLeft = 1; blanksLeft <= n - row; blanksLeft++) {
            document.write("&nbsp;&nbsp;&nbsp;");
        }
        for (let colLeft = 1; colLeft <= row; colLeft++) {
            document.write("* ");
        }
        for (let colRight = row - 1; colRight >= 1; colRight--) {
            document.write("* ");
        }
        document.write("<br>");
    }
}
document.getElementById("b1").addEventListener("click", () => {
    const num = +document.getElementById("num").value;
    printMirroredTriangles(num);
});
