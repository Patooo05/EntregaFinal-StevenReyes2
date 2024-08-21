// Verificacin de estado de inicio de sesión al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  const usuarioLogeado = localStorage.getItem('usuarioLogeado');

  if (usuarioLogeado) {
      // Ocultar "Iniciar Sesin" y "Registrarse" en móvil y escritorio
      const iniciarSesionLinks = document.querySelectorAll('.nav-link[data-bs-target="#modalLogin"]');
      const registrarseLinks = document.querySelectorAll('#desktop-register-link, #mobile-register-link');
      
      iniciarSesionLinks.forEach(link => link.style.display = 'none');
      registrarseLinks.forEach(link => link.style.display = 'none');

      // Mostrar "Cerrar Sesion" y "Perfil"
      document.getElementById('cerrarSesionLink').style.display = 'inline-block';
  } else {
      // Si no está logueado, ocultar "Cerrar Sesion"
      document.getElementById('cerrarSesionLink').style.display = 'none';
  }
});

// Evento para manejar el inicio de sesion
document.getElementById('loginButton').addEventListener('click', function() {
  const emailInput = document.getElementById('email').value;
  const passwordInput = document.getElementById('password').value;

  // Realizasolicitud fetch para obtener el JSON
  fetch('../db.json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Error al cargar el archivo JSON');
          }
          return response.json();
      })
      .then(data => {
          // Encuentra al usuario en el JSON
          const usuario = data.bancoVirtual.find(user => user.email === emailInput && user.password === passwordInput);

          if (usuario) {
              localStorage.setItem('usuarioLogeado', JSON.stringify(usuario));
              Swal.fire({
                  title: 'Inicio de sesión exitoso',
                  text: `Bienvenido, ${usuario.nombre} ${usuario.apellido}`,
                  icon: 'success',
                  confirmButtonText: 'OK'
              }).then(() => {
                 
                  const modal = bootstrap.Modal.getInstance(document.getElementById('modalLogin'));
                  if (modal) {
                      modal.hide();
                  }

                  // Recargar la página para aplicar los cambios
                  location.reload();
              });
          } else {
              Swal.fire({
                  title: 'Error',
                  text: 'Correo o contraseña incorrectos',
                  icon: 'error',
                  confirmButtonText: 'OK'
              });
          }
      })
      .catch(error => {
          console.error('Error:', error);
          Swal.fire({
              title: 'Error',
              text: 'No se pudo conectar con la base de datos.',
              icon: 'error',
              confirmButtonText: 'OK'
          });
      });
});

// Evento para cerrar sesión
document.getElementById('cerrarSesionLink').addEventListener('click', function(event) {
  event.preventDefault(); // Evita la navegación predeterminada del enlace

  
  localStorage.removeItem('usuarioLogeado');


  window.location.href = '../index.html';
});
