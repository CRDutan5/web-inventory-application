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

