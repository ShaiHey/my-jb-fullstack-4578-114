const radius = +prompt("Enter the radius of the circle:");
const pi = Math.PI;
const circumference = 2 * pi * radius;
const area = pi * radius * radius; 

document.write(`The circumference of the circle is: ${circumference}<br>The area of the circle is: ${area}`);