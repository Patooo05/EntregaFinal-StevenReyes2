



let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const shippingCost = 20;

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice, quantity: 1 };
    carrito.push(product);

    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}

function actualizarCarrito() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');

    if (cartItems) {
        cartItems.innerHTML = '';
        let subtotal = 0;
        carrito.forEach((item, index) => {
            subtotal += item.price * item.quantity;

            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item', 'bg-dark', 'text-white', 'mb-3');
            listItem.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-row align-items-center">
                        <div>
                            <img src="../img/${item.name.toLowerCase().replace(/ /g, '-')}.jpg" class="img-fluid product-image" alt="${item.name}">
                        </div>
                        <div class="ms-3">
                            <p class="small mb-0 text-light">REF</p>
                        </div>
                    </div>
                    <div class="d-flex flex-row align-items-center">
                        <div style="width: 50px;">
                            <h5 class="fw-normal mb-0 text-light">${item.quantity}</h5>
                        </div>
                        <div style="width: 80px;">
                            <h5 class="mb-0 text-light">$${(item.price * item.quantity).toFixed(2)}</h5>
                        </div>
                        <button class="btn btn-danger btn-sm ms-3" onclick="removeFromCart(${index})">Borrar</button>
                    </div>
                </div>
            `;
            cartItems.appendChild(listItem);
        });

        const totalItems = carrito.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;

        if (subtotalElement) {
            subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        }

        if (totalElement) {
            totalElement.textContent = `$${(subtotal + shippingCost).toFixed(2)}`;
        }
    }
}


function removeFromCart(index) {
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}



// Actualiza el carrito al cargar la página
window.addEventListener('load', actualizarCarrito);





