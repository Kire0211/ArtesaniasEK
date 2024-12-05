async function cargarArtesanias() {
    try {
        const response = await fetch('http://localhost:8080/api/artesanias');
        if (!response.ok) {
            throw new Error('Error al obtener las artesanías');
        }
        const artesanias = await response.json();
        mostrarArtesanias(artesanias);
    } catch (error) {
        console.error('Error:', error);
    }
}

function mostrarArtesanias(artesanias) {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = '';

    artesanias.forEach(artesania => {
        const productoHTML = `
            <!-- HTML para mostrar la artesanía -->
        `;
        productGrid.innerHTML += productoHTML;
    });
}

// Función para mostrar las artesanías en el DOM
function mostrarArtesanias(artesanias) {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = '';

    artesanias.forEach(artesania => {
        const productoHTML = `
            <div class="col">
                <div class="card product-card h-100">
                    <img src="${artesania.imagen}" class="card-img-top" alt="${artesania.titulo}">
                    <div class="card-body text-center">
                        <h5 class="card-title logo-font">${artesania.titulo}</h5>
                        <p class="card-text">${artesania.descripcion}</p>
                        <p class="fw-bold text-success">$${artesania.valor}</p>
                        <button onclick="agregarAlCarrito(${artesania.id})" class="btn btn-artesanal w-100">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        `;
        productGrid.innerHTML += productoHTML;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    cargarArtesanias();
});

let carrito = [];

const productGrid = document.getElementById("product-grid");

function cargarProductos() {
    productos.forEach((producto) => {
        const productoHTML = `
            <div class="col">
                <div class="card product-card h-100">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body text-center">
                        <h5 class="card-title logo-font">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <p class="fw-bold text-success">$${producto.precio}</p>
                        <button onclick="agregarAlCarrito(${producto.id})" class="btn btn-artesanal w-100">Añadir al Carrito</button>
                    </div>
                </div>
            </div>
        `;
        productGrid.innerHTML += productoHTML;
    });
}

function agregarAlCarrito(id) {
    const producto = productos.find((prod) => prod.id === id);
    if (producto) {
        carrito.push(producto);
        actualizarCarrito();
    }
}

function actualizarCarrito() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = carrito.length;
}

const opiniones = [
    { texto: "¡Increíble calidad y diseño único!", autor: "María G." },
    { texto: "Me encantan los productos, siempre vuelvo por más.", autor: "Juan P." },
    { texto: "El servicio al cliente es excepcional, muy recomendados.", autor: "Ana L." },
    { texto: "Los productos son hermosos y bien hechos.", autor: "Luis M." },
    { texto: "Siempre encuentro algo especial aquí.", autor: "Sofía R." },
    { texto: "La entrega fue rápida y el producto llegó en perfectas condiciones.", autor: "Carlos T." },
    { texto: "Me encanta la variedad de productos artesanales.", autor: "Elena P." },
    { texto: "Definitivamente volveré a comprar.", autor: "Javier S." },
];

const carouselInner = document.querySelector("#carouselOpiniones .carousel-inner");

function cargarOpiniones() {
    opiniones.forEach((opinion, index) => {
        const opinionHTML = `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <div class="card bg-light text-center">
                    <div class="card-body">
                        <p class="card-text">"${opinion.texto}"</p>
                        <h6 class="card-subtitle text-muted">- ${opinion.autor}</h6>
                    </div>
                </div>
            </div>
        `;
        carouselInner.innerHTML += opinionHTML;
    });
}

const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "flex";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Función para volver arriba
scrollToTopBtn.onclick = function () {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
};

document.addEventListener("DOMContentLoaded", () => {
    cargarProductos();
    cargarOpiniones();
});