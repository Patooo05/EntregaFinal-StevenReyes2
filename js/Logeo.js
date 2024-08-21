window.onload = function() {
  const usuarioLogeado = localStorage.getItem('usuarioLogeado');
  
  if (usuarioLogeado) {
      document.getElementById('login-link').style.display = 'none';
      document.getElementById('register-link').style.display = 'none';
  }
}

function verificarSesion(redireccion) {
    const usuarioLogeado = localStorage.getItem('usuarioLogeado');

    if (!usuarioLogeado) {
      alert("Debes iniciar sesión para acceder a esta página.");
      window.location.href = '../index.html';  // Cambia a la ruta de tu página de inicio de sesión
    } else {
      window.location.href = redireccion;
    }

    return false;
  }

  document.getElementById('productos-link').addEventListener('click', function(event) {
    event.preventDefault();
    verificarSesion('./pages/productos.html');
  });

  document.getElementById('novedades-link').addEventListener('click', function(event) {
    event.preventDefault();
    verificarSesion('./pages/novedades.html');
  });

  document.getElementById('nosotros-link').addEventListener('click', function(event) {
    event.preventDefault();
    verificarSesion('./pages/nosotros.html');
  });

  document.getElementById('perfil-link').addEventListener('click', function(event) {
    event.preventDefault();
    verificarSesion('./pages/perfil.html');
  });

  document.getElementById('carrito-link').addEventListener('click', function(event) {
    event.preventDefault();
    verificarSesion('./pages/carrito.html');
  });

  document.getElementById('perfil-link-lg').addEventListener('click', function(event) {
    event.preventDefault();
    verificarSesion('./pages/perfil.html');
  });

  document.getElementById('carrito-link-lg').addEventListener('click', function(event) {
    event.preventDefault();
    verificarSesion('./pages/carrito.html');
  });