let cart = [];
let total = 0;

function addToCart(name, price){

    cart.push({
        name,
        price
    });

    total += price;

    updateCart();
}

function updateCart(){

    const cartItems =
        document.getElementById("cart-items");

    cartItems.innerHTML = "";

    cart.forEach(item => {

        const li =
            document.createElement("li");

        li.textContent =
            `${item.name} - ₹${item.price}`;

        cartItems.appendChild(li);
    });

    document.getElementById("cart-count")
        .textContent = cart.length;

    document.getElementById("total")
        .textContent = total;
}

function clearCart(){

    cart = [];
    total = 0;

    updateCart();
}

document
.getElementById("search")
.addEventListener("keyup", function(){

    let value =
        this.value.toLowerCase();

    let products =
        document.querySelectorAll(".product");

    products.forEach(product => {

        let name =
        product.querySelector("h3")
        .textContent
        .toLowerCase();

        if(name.includes(value)){
            product.style.display = "block";
        }
        else{
            product.style.display = "none";
        }

    });

});