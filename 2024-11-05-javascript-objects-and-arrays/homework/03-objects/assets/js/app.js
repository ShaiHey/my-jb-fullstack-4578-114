const clothingItem = {
    manufacturer: "Hadidas",
    size: "L",
    color: "blue",
    price: 20
}

document.write(`Manufacturer : ${clothingItem.manufacturer}<br>Size : ${clothingItem.size}<br>Color : ${clothingItem.color}<br>Price : $${clothingItem.price}<br>`);

// Object.keys(clothingItem).forEach(key => {
//     document.write(`${key}: ${clothingItem[key]}<br>`);
// });

document.write("<hr/>");

for (const key in clothingItem) {
    document.write(`${key} : ${clothingItem[key]}<br>`);
}