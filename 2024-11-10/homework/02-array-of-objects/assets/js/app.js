const clothes = [
    {
        type: "short",
        size: "L",
        price: 20,
        color: "Blue"
    },
    {
        type: "t-shirt",
        size: "M",
        price: 15,
        color: "Red"
    },
    {
        type: "jeans",
        size: "S",
        price: 40,
        color: "Black"
    },
    {
        type: "jacket",
        size: "L",
        price: 60,
        color: "Green"
    },
    {
        type: "sweater",
        size: "M",
        price: 30,
        color: "Gray"
    }
];

for(const clothe of clothes){
    for(const property in clothe){
        document.write(`${property} : ${clothe[property]}<br>`);
    }
    document.write("<hr/>");
}