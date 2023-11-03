// In Stock and Out of Stock Button Functionality

function stockButtonFunctionality(){
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
};

// Remove Cellphone Button Functionality

function removeButtonFunctionality() {
const removeButtons = document.querySelectorAll(".remove-button");

removeButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", (event) => {
        removeButton.closest("article").remove();
    })
})
};


const form = document.querySelector("form");

const resetButton = document.querySelector("#reset-button");


resetButton.addEventListener("click", (event) => {
        // event.stopPropagation();
        form.reset();
})



// form.addEventListener("submit", (event) => {
//     form.reset();
// })

// function createCellphoneTemplate(){

form.addEventListener("submit", (event) => {

    event.preventDefault();


    const { phonenamename, url, brand, color, storage, price, stock} = event.target;


    const createArticle = document.createElement("article");
    createArticle.classList.add("new-phone-article");


    createArticle.innerHTML = 
    `
    <div class = "phone-pic-item">
    <img src = "${url.value}" alt = "Image of phone">
    </div>
    <div class = "grid-item">
    <p><span>Name: </span>${phonename.value}</p>
    <p><span>Brand: </span>${brand.value}</p>
    <p><span>Color: </span>${color.value}</p>
    <p><span>Storage: </span>${storage.value}</p>
    <p><span>Price: </span>${price.value}</p>

    

    <button class="stock-button">${stock.value === "yes" ? "In Stock" : "Out of Stock"}</button>
    <button class="remove-button">Remove</button>

    </div>
    `
    
    const CellphoneTab = document.querySelector("#cellphones-tab");
    CellphoneTab.append(createArticle);



    const stockButton = document.querySelector(".stock-button");
    stockButtonFunctionality(stockButton);

    const removeButton = createArticle.querySelector(".remove-button");
    removeButtonFunctionality(removeButton);

    form.reset();
});


