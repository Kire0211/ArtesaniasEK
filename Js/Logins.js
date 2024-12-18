 const scrollToTopBtn = document.getElementById("scrollToTopBtn");
 window.onscroll = function() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         scrollToTopBtn.style.display = "flex";
     } else {
         scrollToTopBtn.style.display = "none";
     }
 }; 

 document.getElementById('registroForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rol = document.getElementById('rol').value;

    const datos = {
        nombre: nombre,
        email: email,
        password: password,
        rol: rol
    };

    const mensajeElemento = document.getElementById('mensaje');

    try {
        const respuesta = await fetch('http://localhost:8080/api/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        if (respuesta.ok) {
            mensajeElemento.innerHTML = 'Registro exitoso';
            mensajeElemento.className = 'success';
            
            document.getElementById('registroForm').reset();
        } else {
            const error = await respuesta.json();
            mensajeElemento.innerHTML = error.mensaje || 'Error al registrar';
            mensajeElemento.className = 'error';
        }
    } catch (error) {
        console.error('Error:', error);
        mensajeElemento.innerHTML = 'Error de conexión';
        mensajeElemento.className = 'error';
    }
});