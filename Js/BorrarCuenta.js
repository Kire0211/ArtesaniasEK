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


document.getElementById('eliminarForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;

    const mensajeElemento = document.getElementById('mensaje');

    try {
        const respuesta = await fetch(`http://localhost:8080/api/usuarios/${id}`, {
            method: 'DELETE'
        });

        if (respuesta.ok) {
            mensajeElemento.innerHTML = 'Cuenta eliminada exitosamente';
            mensajeElemento.className = 'success';
            document.getElementById('eliminarForm').reset();
            
            
            window.location.href = 'Logins.html';
        } else {
            const error = await respuesta.json();
            mensajeElemento.innerHTML = error.mensaje || 'Error al eliminar cuenta';
            mensajeElemento.className = 'error';
        }
    } catch (error) {
        console.error('Error:', error);
        mensajeElemento.innerHTML = 'Error de conexión';
        mensajeElemento.className = 'error';
    }
});