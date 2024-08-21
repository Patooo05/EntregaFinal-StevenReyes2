document.addEventListener('DOMContentLoaded', function() {
    mostrarInformacionUsuario();
});

function mostrarInformacionUsuario() {
    // Obtener el usuario logeado del localStorage
    const usuarioLogeado = JSON.parse(localStorage.getItem('usuarioLogeado'));

    // Verificar si hay un usuario logeado
    if (usuarioLogeado) {
        const userInfoDiv = document.getElementById('userInfo');

        // Crear contenido HTML con la información del usuario
        userInfoDiv.innerHTML = `
            <h1>Bienvenido, ${usuarioLogeado.nombre} ${usuarioLogeado.apellido}</h1>
            <p>Email: ${usuarioLogeado.correo}</p>
            <p>Ciudad: ${usuarioLogeado.ciudad}</p>
            <p>Dirección: ${usuarioLogeado.direccion}</p>
            <p>Teléfono: ${usuarioLogeado.telefono}</p>
        `;
    } else {
        // Si no hay un usuario logeado, mostrar un mensaje predeterminado
        userInfoDiv.innerHTML = `<h1>Usuario no logueado</h1>`;
    }
}
