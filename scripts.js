const cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product, imageSrc) {
    cart.push({ product, imageSrc});
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(product + " has been added to your cart!");
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    if (cartItems) {
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            const li = document.createElement('li');

            const img = document.createElement('img');
            img.src = item.imageSrc;
            img.alt = item.product;

            const name = document.createElement('name');
            name.textContent = item.product;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.onclick = () => removeFromCart(index);

            li.appendChild(img);
            li.appendChild(name);
            li.appendChild(removeButton);
            cartItems.appendChild(li);
        });
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}



window.onload = updateCart;
