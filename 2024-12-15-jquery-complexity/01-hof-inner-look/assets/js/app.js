"use strict";

(() => {
    const grades = [10, 20, 50, 90, 80, 70];

    // Loop
    let sum = 0;
    for (const grade of grades) {
        sum += grade;
    }

    // HOF
    grades.reduce((sum, grade) => sum += grade, 0);


    // Loop
    let min = Infinity;
    for (const grade of grades) {
        if(grade < min) min = grade;
    }

    // HOF
    grades.reduce((min, grade) => grade < min ? grade : min, Infinity);

    // Loop
    let HTML = "";
    for (const grade of grades) {
        HTML += `<li>${grade}</li>`
    }

    // HOF
    grades.reduce((html, grade) => html += `<li>${grade}</li>`, "");
})