let names = [];

for(let i = 1; i <= 5; i++){
    let name = prompt("Please enter a name :");
    names.push(name);
}

document.write(`${names[0]} - ${names[names.length - 1]}<br>`);
document.write(`${names[0]}<br>${names[names.length - 1]}<br>`);

for(let i = names.length - 1; i >= 0; i--){
    document.write(`${names[i]} `)
}