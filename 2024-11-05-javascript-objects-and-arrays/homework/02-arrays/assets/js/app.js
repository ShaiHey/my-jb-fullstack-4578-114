let songs = [];

for(let i = 1; i <= 3; i++){
    let name = prompt("Please enter a name :");
    songs.push(name);
}

document.write(`${songs}<br><hr/>`);

songs.splice(1, 1);

document.write(songs);