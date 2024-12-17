document.getElementById("myForm").addEventListener("submit", event => {
    event.preventDefault();
    // When we use the keyword "as"
    // We actually tell typescript: trust me, i know i am doing
    const msg = document.getElementById("msg");
    console.log(msg.value);
});
function test() {
    const toy = {
        type: "Yorkshare",
        eat: () => { console.log("Eating bonzo"); }
    };
    const yossi = toy;
}
