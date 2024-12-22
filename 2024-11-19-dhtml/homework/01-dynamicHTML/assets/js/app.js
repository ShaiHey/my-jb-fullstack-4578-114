function collectData() {
    const ingredient = document.getElementById("ingredient").value;
    const amount = document.getElementById("amount").value;

    return {
        ingredient: ingredient,
        amount: amount
    }
}

function generateNewHTML(data) {
    const newHTMLine = `
    <li class="list-group-item">Ingredient: ${data.ingredient}, Amount: ${data.amount}</li>
    `
    return newHTMLine
}

function insertNewHTML(newHTML) {
    const ingredients = document.getElementById("ingredients");
    ingredients.innerHTML += newHTML;
}

function clearForm() {
    const formIngredient = document.getElementById("formIngredient");
    const ingredient = document.getElementById("ingredient");
    formIngredient.reset();
    ingredient.focus();
}

function addIngredient(event) {
    event.preventDefault();
    const data = collectData();
    const newHTML = generateNewHTML(data);
    insertNewHTML(newHTML);
    clearForm();
}