const shoppingCart = [
    {
        id: 1,
        name: "Lenovo Laptop",
        price: 1000
    },
    {
        id: 2,
        name: `HP Screen 2"`,
        price: 600
    },
    {
        id: 3,
        name: "Logitech mouse",
        price: 20
    },
]

localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));

const info = JSON.parse(localStorage.getItem("shoppingCart"));
console.log(info);