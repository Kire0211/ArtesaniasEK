
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


document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const mensajeElemento = document.getElementById('mensaje');

    try {
        const respuesta = await fetch(`http://localhost:8080/api/usuarios`, {
            method: 'GET'
        });

        if (respuesta.ok) {
            const usuario = await respuesta.json();
            mensajeElemento.innerHTML = 'Inicio de sesión exitoso';
            mensajeElemento.className = 'success';
            
            window.location.href = 'Principal.html';
        } else {
            const error = await respuesta.json();
            mensajeElemento.innerHTML = error.mensaje || 'Credenciales inválidas';
            mensajeElemento.className = 'error';
        }
    } catch (error) {
        console.error('Error:', error);
        mensajeElemento.innerHTML = 'Error de conexión';
        mensajeElemento.className = 'error';
    }
});