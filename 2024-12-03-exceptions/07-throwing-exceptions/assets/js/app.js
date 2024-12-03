const showVat = event => {
    event.preventDefault();
    const price = document.getElementById("price").value;
    try {
        const vat = getVat(price);
        console.log(`The vat for ${price} is ${vat}`);
    } catch (error) {
        alert(error);
    }
}

const getVat = price => {
    if(!price) throw new Error("Price is required");
    if(price < 0) throw new Error("Price must be a positive number");
    return price * 0.17;
}