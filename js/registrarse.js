document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('formularioRegistro').addEventListener('submit', function(event) {
      event.preventDefault(); // Previene el envío del formulario

      // Obtener los valores de los campos
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const correo = document.getElementById('correo').value;
      const contraseña = document.getElementById('contraseña').value;
      const ciudad = document.getElementById('ciudad').value;
      const direccion = document.getElementById('direccion').value;
      const telefono = document.getElementById('telefono').value;

      // Verificar que los datos estén completos
      if (nombre && apellido && correo && contraseña && ciudad && direccion && telefono) {
          // Crear objeto usuario
          const usuario = {
              nombre: nombre,
              apellido: apellido,
              correo: correo,
              contraseña: contraseña,
              ciudad: ciudad,
              direccion: direccion,
              telefono: telefono
          };

          // Guardar el objeto usuario en localStorage
          localStorage.setItem('usuario1', JSON.stringify(usuario));

          // Mostrar mensaje de éxito
          alert('Registro exitoso');
          
          // Mostrar datos en la consola para verificación
          console.log('Datos guardados en localStorage:', JSON.parse(localStorage.getItem('usuario1')));

          // Ocultar el contenedor del formulario y mostrar el mensaje de bienvenida
          document.getElementById('btnRegristrar').style.display = 'none';
          document.getElementById('contenedorFormulario').style.display = 'none';
          document.getElementById('mensajeBienvenida').innerText = `Bienvenido, ${nombre}`;
          document.getElementById('contenedorBienvenida').style.display = 'block';

          // Debugging messages
          console.log('Formulario oculto y mensaje de bienvenida mostrado.');
      } else {
          // Mostrar mensaje de error
          alert('Por favor, complete todos los campos');
      }
  });
});