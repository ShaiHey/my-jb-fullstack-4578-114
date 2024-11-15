const inventory = [
    ["Onion", "Carrot", "Tomato", "Cucumber"],
    ["Apple", "Banana", "Peach", "Grapes", "Orange"],
    ["Wheat", "Flour"]
];

const largeItem = [];
let lastLargeItem = "";

for(const row of inventory){
    for(const item of row){
        document.write(`${item}, `)
    }
}

for(const row of inventory){
    for(const item of row){
        lastLargeItem = item.length > lastLargeItem.length ? item : lastLargeItem;
    }
}

for(const row of inventory){
    for(const item of row){
        if(lastLargeItem.length === item.length && lastLargeItem !== item){
            largeItem.push(item);
        }
    }
}

const smallItem = [];
let lastItemS = lastLargeItem;

for(const row of inventory){
    for(const item of row){
        lastItemS = item.length < lastItemS.length ? item : lastItemS;
    }
}

for(const row of inventory){
    for(const item of row){
        if(lastItemS.length === item.length && lastItemS !== item){
            smallItem.push(item);
        }
    }
}

document.write("<hr/>");

document.write(`Longest : ${lastLargeItem} and ${largeItem.length !== 0 ? largeItem : "no other items with the same length"}<br>`);
document.write(`Shortest : ${lastItemS} and ${smallItem.length !== 0 ? smallItem : "no other items with the same length"}`);