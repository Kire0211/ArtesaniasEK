
    let carrito = [];
    const productosPorPagina = 16; 
    let currentPage = 0; 

    function displayProducts() { 
    const productContainer = document.getElementById('product-grid'); 
    productContainer.innerHTML = ''; 
    let carrito = [];

    const start = currentPage * productosPorPagina; 
    const end = start + productosPorPagina; 

    const productosActuales = allProducts.flat().slice(start, end);

    productosActuales.forEach(product => { 
        const productDiv = document.createElement('div'); 
        productDiv.className = 'product'; 
        productDiv.innerHTML = ` 
            <div class="card product-card h-100">
                <img src="${product.imagen}" class="card-img-top" alt="${product.nombre}">
                <div class="card-body text-center">
                    <h5 class="card-title">${product.nombre}</h5>
                    <p class="card-text">${product.descripcion}</p>
                    <p class="fw-bold text-success">$${product.precio}</p>
                    <button onclick="agregarAlCarrito(${product.id})" class="btn btn-artesanal w-100">Agregar al Carrito</button>
                </div>
            </div>
        `; 
        productContainer.appendChild(productDiv); 
    }); 

    document.getElementById('page-number').innerText = currentPage + 1; 
} 

function nextPage() { 
    if (currentPage < Math.ceil(allProducts.flat().length / productosPorPagina) - 1) { 
        currentPage++; 
        displayProducts(); 
    } 
} 

function prevPage() { 
    if (currentPage > 0) { 
        currentPage--; 
        displayProducts(); 
    } 
} 

function agregarAlCarrito(id) {
    const producto = allProducts.flat().find((prod) => prod.id === id);
    if (producto) {
        carrito.push(producto);
        actualizarCarrito();
    }
}

function actualizarCarrito() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = carrito.length;
}

const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "flex";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
});