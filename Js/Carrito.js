// Mostrar el botón de volver arriba al hacer scroll
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "flex";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Función para volver arriba
scrollToTopBtn.onclick = function() {
    document.documentElement.scrollTop = 0; 
};
 const paymentOptions = document.getElementById("paymentOptions");
        const creditCardForm = document.getElementById("creditCardForm");
        const paypalForm = document.getElementById("paypalForm");

        paymentOptions.addEventListener("change", () => {
            creditCardForm.classList.add("hidden");
            paypalForm.classList.add("hidden");
            if (paymentOptions.value === "creditCard") {
                creditCardForm.classList.remove("hidden");
            } else if (paymentOptions.value === "paypal") {
                paypalForm.classList.remove("hidden");
            }
        });

        let products = [
            { name: "Producto 1", price: 100, stock: 5 },
            { name: "Producto 2", price: 200, stock: 3 }
        ];
        let totalPrice = 0;

        function renderCart() {
            const productList = document.getElementById("productList");
            productList.innerHTML = "";
            products.forEach(product => {
                const listItem = document.createElement("li");
                listItem.className = "list-group-item d-flex justify-content-between align-items-center";
                listItem.textContent = `${product.name} - $${product.price}`;
                const qtyInput = document.createElement("input");
                qtyInput.type = "number";
                qtyInput.min = 1;
                qtyInput.max = product.stock;
                qtyInput.value = 1;
                qtyInput.className = "form-control w-25";
                qtyInput.addEventListener("change", () => updateTotal());
                listItem.appendChild(qtyInput);
                productList.appendChild(listItem);
            });
            updateTotal();
        }

        function updateTotal() {
            const productList = document.getElementById("productList");
            const quantities = productList.querySelectorAll("input[type='number']");
            totalPrice = 0;
            quantities.forEach((qty, index) => {
                totalPrice += qty.value * products[index].price;
            });
            document.getElementById("totalPrice").textContent = totalPrice;
        }

        function applyDiscount() {
            const code = document.getElementById("discountCode").value;
            if (code === "DESCUENTO10") {
                totalPrice *= 0.9;
                document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
                alert("Descuento aplicado correctamente!");
            } else {
                alert("Código de descuento inválido.");
            }
        }

        document.getElementById("checkoutForm").addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Pago realizado con éxito. ¡Gracias por tu compra!");
        });

        renderCart();