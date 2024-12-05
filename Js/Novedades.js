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