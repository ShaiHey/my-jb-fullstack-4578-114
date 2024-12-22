const mira = {
    name: "Mira",
    age: 22,
    gender: "Female",
    city: "Petch Tiqwa"
}

const yoav = {
    name: "Yoav",
    age: 22,
    gender: "Male",
    city: "Herzliya"
}

const beery = {
    name: "Beery",
    age: 18,
    gender: "Male",
    city: "Holon"
}

const osher = {
    name: "Osher",
    age: 22,
    gender: "Male",
    city: "Givat Shmuel"
}

const friends = [mira, yoav, beery, osher];

// for(let i=0; i < friends.length; i++){
//     document.write(`${friends[i].name}<br>`);
// }

for(const friend of friends){
    document.write(`<h3>Properties of ${friend.name}:</h3><br>`);
    for(const property in friend){
        document.write(`${property} : ${friend[property]}<br>`);
    }
    document.write("<hr/>");
}

document.write(`I have ${friends.length} friends<br>`);

friends.splice(1, 1)

document.write(`I have ${friends.length} friends<br>`);

const musicBands = [
    {
        name: "Nirvana", 
        style: "Rock"
    },
    {
        name: "Beatles",
        style: "Rock"
    },
    {
        name: "Mashina",
        style: "Israeli"
    }
]

document.write(`There are ${musicBands.length} bands in my collection<br>`);

// for(const band of musicBands){
//     document.write(`<h3>Properties of ${band.name}:</h3><br>`);
//     for(const property in band){
//         document.write(`${property} : ${band[property]}<br>`);
//     }
//     document.write("<hr/>");
// }