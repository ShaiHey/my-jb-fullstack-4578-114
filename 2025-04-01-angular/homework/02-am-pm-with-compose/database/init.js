mongoDb = new Mongo();

db = mongoDb.getDB("ampm");

db.products.insertOne({
    name: "Water",
    prodDate: new Date(),
    expireDate: new Date(),
    category: "drinks",
    price: 10
})

db.products.insertOne({
    name: "Chips",
    prodDate: new Date(),
    expireDate: new Date(),
    category: "snacks",
    price: 8
})