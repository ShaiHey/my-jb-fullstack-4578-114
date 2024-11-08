const creditCard = {
    type: "VISA",
    number: "1234567890123456",
    expiration: "07/30",
    cvv: "123"
}

document.write(`Type : ${creditCard.type}<br>Card number : ${creditCard.number}<br>Expiration Date : ${creditCard.expiration}<br>CVV : ${creditCard.cvv}<br>`);

// Object.keys(creditCard).forEach(key => {
//     document.write(`${key}: ${creditCard[key]}<br>`);
// });

document.write("<hr/>");

for (const key in creditCard) {
    document.write(`${key} : ${creditCard[key]}<br>`);
}