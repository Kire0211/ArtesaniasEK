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

document.getElementById('recuperarForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const id = document.getElementById('id').value;
    const email = document.getElementById('email').value;
    const nuevaContrasena = document.getElementById('nuevaContrasena').value;

    const datos = {
        id: id,
        email: email,
        password: nuevaContrasena
    };

    const mensajeElemento = document.getElementById('mensaje');

    try {
        const respuesta = await fetch(`http://localhost:8080/api/usuarios/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        if (respuesta.ok) {
            mensajeElemento.innerHTML = 'Contraseña actualizada exitosamente';
            mensajeElemento.className = 'success';
            document.getElementById('recuperarForm').reset();
        } else {
            const error = await respuesta.json();
            mensajeElemento.innerHTML = error.mensaje || 'Error al actualizar contraseña';
            mensajeElemento.className = 'error';
        }
    } catch (error) {
        console.error('Error:', error);
        mensajeElemento.innerHTML = 'Error de conexión';
        mensajeElemento.className = 'error';
    }
});