 // Mostrar el botón de volver arriba al hacer scroll
 const scrollToTopBtn = document.getElementById("scrollToTopBtn");
 window.onscroll = function() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         scrollToTopBtn.style.display = "flex";
     } else {
         scrollToTopBtn.style.display = "none";
     }
 }; 
 async function registerUser (event) {
    event.preventDefault();
    const user = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        email: document.getElementById('email').value,
        municipio: document.getElementById('municipio').value,
        ciudad: document.getElementById('ciudad').value,
        usuario: document.getElementById('usuario').value,
        password: document.getElementById('password').value
    };

    const response = await fetch('/api/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    if (response.ok) {
        alert('Usuario registrado con éxito');
        document.getElementById('registerForm').classList.add('hidden');
        document.getElementById('loginForm').classList.remove('hidden');
    } else {
        alert('Error al registrar el usuario');
    }
}

async function loginUser (event) {
    event.preventDefault();
    const usuario = document.getElementById('usuarioLogin').value;
    const password = document.getElementById('passwordLogin').value;

    const response = await fetch(`/api/usuarios?usuario=${usuario}&password=${password}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const data = await response.json();
        if (data) {
            // Iniciar sesión exitosamente
            alert('Inicio de sesión exitoso');
            // Redirigir a la página principal o a donde desees
            window.location.href = 'Principal.html';
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    } else {
        alert('Error al iniciar sesión');
    }
}

async function updatePassword(event) {
    event.preventDefault();
    const usuario = document.getElementById('usuarioLogin').value;

    const newPassword = prompt("Introduce la nueva contraseña:");

    if (newPassword) {
        const response = await fetch(`/api/usuarios/update-password`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ usuario, password: newPassword })
        });

        if (response.ok) {
            alert('Contraseña actualizada con éxito');
        } else {
            alert('Error al actualizar la contraseña');
        }
    }
}

async function deleteUser (event) {
    event.preventDefault();
    const usuario = document.getElementById('usuarioLogin').value;
    const password = document.getElementById('passwordLogin').value;

    const response = await fetch(`/api/usuarios/delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usuario, password })
    });

    if (response.ok) {
        alert('Cuenta eliminada con éxito');
        // Redirigir a la página de inicio o donde desees
        window.location.href = 'Principal.html';
    } else {
        alert('Error al eliminar la cuenta');
    }
}
         const loginForm = document.getElementById('loginForm');
         const registerForm = document.getElementById('registerForm');
         const pinLoginContainer = document.getElementById('pinLoginContainer');
         const pinContainer = document.getElementById('pinContainer');
 
         document.getElementById('toRegister').addEventListener('click', () => {
             loginForm.classList.add('hidden');
             registerForm.classList.remove('hidden');
         });
         
         async function registerUser (event) {
             event.preventDefault();
             const formData = new FormData(event.target);
             const user = {
                 nombre: formData.get('nombre'),
                 apellido: formData.get('apellido'),
                 usuario: formData.get('usuario'),
                 password: formData.get('password')
             };
     
             const response = await fetch('/api/usuarios', {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify(user)
             });
     
             if (response.ok) {
                 alert('Usuario registrado con éxito');
             } else {
                 alert('Error al registrar el usuario');
             }
         }
   
         document.getElementById('toLogin').addEventListener('click', () => {
             registerForm.classList.add('hidden');
             loginForm.classList.remove('hidden');
         });
 
         document.getElementById('rolLogin').addEventListener('change', (e) => {
             pinLoginContainer.classList.toggle('hidden', e.target.value !== 'administrador');
         });
 
         document.getElementById('rolRegister').addEventListener('change', (e) => {
             pinContainer.classList.toggle('hidden', e.target.value !== 'administrador');
         }); // Para Chrome, Firefox, IE y Opera
 