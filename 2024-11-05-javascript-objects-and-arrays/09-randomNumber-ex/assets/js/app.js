const randomNumber50 = Math.random() * 50;
const randomNumber1030 = Math.random() * (30 - 10) + 10;
const randomNumber2050 = Math.random() * (50 - 20) + 20;
const randomNumber3050 = Math.random() * (51 - 20) + 20;

document.write(`0-50 : ${parseInt(randomNumber50)}<br>`);

document.write(`10-30 : ${parseInt(randomNumber1030)}<br>`);

document.write(`20-50 : ${parseInt(randomNumber2050)}<br>`);

document.write(`20-50 (inclusive) : ${parseInt(randomNumber3050)}<br>`);