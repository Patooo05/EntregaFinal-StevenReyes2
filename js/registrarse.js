document.getElementById('formularioRegistro').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Recoge los valores de los campos del formulario
    const usuario = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        correo: document.getElementById('correo').value,
        contraseña: document.getElementById('contraseña').value,
        ciudad: document.getElementById('ciudad').value,
        direccion: document.getElementById('direccion').value,
        telefono: document.getElementById('telefono').value
    };

    localStorage.setItem('usuarioLogeado', JSON.stringify(usuario));

    location.reload();
});

document.getElementById('cerrarSesionLink').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace

    localStorage.removeItem('usuarioLogeado');

    location.reload();
});

// Función para comprobar si el usuario está logueado
function checkUserStatus() {
    const usuarioLogeado = localStorage.getItem('usuarioLogeado');

    if (usuarioLogeado) {
        // Si el usuario está logueado, muestra el mensaje de bienvenida y el enlace de cerrar sesión
        const usuario = JSON.parse(usuarioLogeado);

        document.getElementById('contenedorFormulario').style.display = 'none';
        document.getElementById('contenedorBienvenida').style.display = 'block';

        const mensajeBienvenida = document.getElementById('mensajeBienvenida');
        mensajeBienvenida.textContent = `¡Bienvenido, ${usuario.nombre}!`;

        document.getElementById('iniciarSesionLink').style.display = 'none';
        document.getElementById('cerrarSesionLink').style.display = 'block';
    } else {
        // Si no hay usuario logueado, muestra el formulario y el enlace de iniciar sesión
        document.getElementById('contenedorFormulario').style.display = 'block';
        document.getElementById('contenedorBienvenida').style.display = 'none';
        document.getElementById('iniciarSesionLink').style.display = 'block';
        document.getElementById('cerrarSesionLink').style.display = 'none';
    }
}

// Ejecutar la función cuando la página se carga
document.addEventListener('DOMContentLoaded', checkUserStatus);
