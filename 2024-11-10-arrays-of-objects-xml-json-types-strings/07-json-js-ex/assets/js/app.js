const store = {
    name: "Hadidas",
    city: "Netanya",
    street: "Herzl",
    numberStreet: 20,
    typeGoods: "Sport shoes"
}

const jsonString = JSON.stringify(store);
document.write(`${jsonString}<hr/>`);

const storeObject = JSON.parse(jsonString);
console.log(storeObject);