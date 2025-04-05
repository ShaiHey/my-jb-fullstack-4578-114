mongoDb = new Mongo();

db = mongoDb.getDB("toysrus");

db.targets.insertOne({
    target: 'adult'
})

db.targets.insertOne({
    target: 'kids'
})

const adultTarget = db.targets.findOne({ target: 'adult' });
db.games.insertOne({
    targetId: adultTarget._id,
    target: adultTarget._id,
    name: "Poker",
    description: "This is a poker game",
    price: 70
})

const kidsTarget = db.targets.findOne({ target: 'kids' });
db.games.insertOne({
    targetId: kidsTarget._id,
    target: kidsTarget._id,
    name: "Taki",
    description: "This is a cards game",
    price: 10
})