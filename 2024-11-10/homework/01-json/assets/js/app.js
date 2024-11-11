const books = [
    {
        id: 1,
        name: "Funny Story",
        author: "Emily Henry",
        price: 13,
    },
    {
        id: 2,
        name: "Just for the Summer",
        author: "Abby Jimenez",
        price: 12,
    },
    {
        id: 3,
        name: "Bride",
        author: "Ali Hazelwood",
        price: 14,
    }
]

const jsonString = JSON.stringify(books);
alert(jsonString)

const items = JSON.parse(jsonString);
console.log(books);
console.log(items);

for(const book of items){
    for(const property in book){
        document.write(`Book ${property} : ${book[property]}<br>`);
    }
    document.write("<hr/>");
}