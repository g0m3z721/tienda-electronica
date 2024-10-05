let cartCount = 0;

function addToCart(product) {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
    alert(`${product} ha sido agregado al carrito.`);
}



let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    // Añadir producto al carrito
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
    updateCart();
    showMessage(`${productName} se ha añadido al carrito.`);
}

function removeFromCart(productName) {
    // Buscar y eliminar el producto del carrito
    const index = cart.findIndex(item => item.name === productName);
    if (index > -1) {
        totalPrice -= cart[index].price;
        cart.splice(index, 1);
        updateCart();
        showMessage(`${productName} se ha eliminado del carrito.`);
    }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Limpiar carrito
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        const removeButton = document.createElement('button');
        removeButton.textContent =        'Eliminar';
        removeButton.onclick = () => removeFromCart(item.name);
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
    document.getElementById('cart-count').textContent = cart.length;
}

function showMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    setTimeout(() => {
        messageElement.textContent = '';
    }, 3000);
}


