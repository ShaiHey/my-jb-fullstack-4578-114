const client = {
    firstName: "Shai",
    lastName: "Heyman",
    eMail: "shaihey@test.com",
    phoneNumber: "0132222222",
    card: {
        type: "VISA",
        number: "1234567890123456",
        expiration: "07/30",
        cvv: "123"
    }
}

document.write(`First Name : ${client.firstName}<br>Last Name : ${client.lastName}<br>eMail : ${client.eMail}<br>Phone : ${client.phoneNumber}<br>`);
document.write(`Type : ${client.card.type}<br>Card number : ${client.card.number}<br>Expiration Date : ${client.card.expiration}<br>CVV : ${client.card.cvv}<br>`);

document.write("<hr/>");

for (const key in client) {
    if(key === "card"){
        for (const key2 in client[key]) {
            document.write(`${key2} : ${client[key][key2]}<br>`);
        }
    } else {
        document.write(`${key} : ${client[key]}<br>`);
    }
}