 // Mostrar el botón de volver arriba al hacer scroll
 const scrollToTopBtn = document.getElementById("scrollToTopBtn");
 window.onscroll = function() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         scrollToTopBtn.style.display = "flex";
     } else {
         scrollToTopBtn.style.display = "none";
     }
 }; // Switch between forms
         const loginForm = document.getElementById('loginForm');
         const registerForm = document.getElementById('registerForm');
         const pinLoginContainer = document.getElementById('pinLoginContainer');
         const pinContainer = document.getElementById('pinContainer');
 
         document.getElementById('toRegister').addEventListener('click', () => {
             loginForm.classList.add('hidden');
             registerForm.classList.remove('hidden');
         });
 
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
 