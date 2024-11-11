const myCat = {
    name: "Max",
    age: 2,
    color: "Black",
    isSterile: true
}

const jsonString = JSON.stringify(myCat);
alert(jsonString)

const yourCat = JSON.parse(jsonString);

for(const property in yourCat){
    const value = property === "isSterile" ? yourCat[property] ? "Yes" : "No" : yourCat[property];
    document.write(`${property} : ${value}<br>`);
}