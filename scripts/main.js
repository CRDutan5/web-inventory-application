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

// Grab Elements

const phoneName = document.getElementById
("phone-name");

const imageUrl = document.getElementById
("url");

const brandName = document.getElementById
("brand");

const phoneColor = document.getElementById
("color");

const storage = document.getElementById
("storage");

const price = document.getElementById
("price");

const stock = document.getElementById
("stock-select");


// Create template

const content = 
`
<p><span>Name: </span>${phoneName.value}</p>
<p><span>Brand: </span>${brandName.value}</p>
<p><span>Color: </span>${phoneColor.value}</p>
<p><span>Storage: </span>${storage.value}</p>
<p><span>Price: </span>${price.value}</p>
<button class="stock-button">In Stock</button>
<button class="remove-button">Remove</button>
`

// const createCellPhoneTemplate = content.innerHTML;

// console.log(createCellPhoneTemplate);






// Create Cellphone Button Functionality

const createCellphoneButton = document.querySelector("form");

createCellphoneButton.addEventListener("click", (event) => {
    // const newCellphone = `${phoneName.value} ${brandName.value} ${phoneColor.value} ${storage.value} ${price.value},`
    console.log(event.target.brand.value);
    console.log("hello");
})