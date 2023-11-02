// In Stock and Out of Stock Button Functionality

const stockButtons = document.querySelectorAll(".stock-button");

stockButtons.forEach(stockButton => {
    stockButton.addEventListener("click", (event) => {
        if(event.target.textContent === "In Stock"){
            event.target.textContent = "Out of Stock";
        }
        else{
            event.target.textContent = "In Stock"
        }
    })
})

// Remove Cellphone Button Functionality

const removeButtons = document.querySelectorAll(".remove-button");

removeButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", (event) => {
        removeButton.closest("article").remove();
    })
})


// Create Cellphone

 // confirm all your event values
  // fix your variables in the template to match
  // append your div to the DOM
  // add event listeners to the buttons

const createCellphoneDiv = document.querySelector("form");

createCellphoneDiv.addEventListener("submit", (event) => {

    const { phonenamename, url, brand, color, storage, price, stock} = event.target;

    event.preventDefault();

    const createDiv = document.createElement("div");


    createDiv.innerHTML = 
    `
    <p><span>Name: </span>${phonename.value}</p>
    <p><span>Url: </span>${url.value}</p>
    <p><span>Brand: </span>${brand.value}</p>
    <p><span>Color: </span>${color.value}</p>
    <p><span>Storage: </span>${storage.value}</p>
    <p><span>Price: </span>${price.value}</p>
    <p><span>Stock: </span>${stock.value}</p>

    <button class="stock-button">In Stock</button>
    <button class="remove-button">Remove</button>
    `
    const CellphoneTab = document.querySelector("#cellphones-tab");

    CellphoneTab.append(createDiv);
})



















// const content = 
// `
// <p><span>Name: </span>${phoneName.value}</p>
// <p><span>Brand: </span>${brandName.value}</p>
// <p><span>Color: </span>${phoneColor.value}</p>
// <p><span>Storage: </span>${storage.value}</p>
// <p><span>Price: </span>${price.value}</p>
// <button class="stock-button">In Stock</button>
// <button class="remove-button">Remove</button>
// `