mongoDb = new Mongo();

db = mongoDb.getDB("toysrus");

db.games.insertOne({
    target: "kids",
    name: "Taki",
    description: "This is a cards game",
    price: 15
})

db.games.insertOne({
    target: "adult",
    name: "Poker",
    description: "This is a poker game",
    price: 70
})