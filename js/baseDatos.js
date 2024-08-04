const baseDeDatos = [
    { id: 1, email: 'carlos@ejemplo.com', password: 'password123', nombre: 'Carlos', apellido: 'González' },
    { id: 2, email: 'maria@ejemplo.com', password: 'password123', nombre: 'María', apellido: 'Fernández' },
    { id: 3, email: 'juan@ejemplo.com', password: 'password123', nombre: 'Juan', apellido: 'Rodríguez' },
    { id: 4, email: 'ana@ejemplo.com', password: 'password123', nombre: 'Ana', apellido: 'Martínez' },
    { id: 5, email: 'luis@ejemplo.com', password: 'password123', nombre: 'Luis', apellido: 'Pérez' },
    { id: 6, email: 'sofia@ejemplo.com', password: 'password123', nombre: 'Sofía', apellido: 'Gómez' },
    { id: 7, email: 'miguel@ejemplo.com', password: 'password123', nombre: 'Miguel', apellido: 'Torres' },
    { id: 8, email: 'lucia@ejemplo.com', password: 'password123', nombre: 'Lucía', apellido: 'López' },
    { id: 9, email: 'pedro@ejemplo.com', password: 'password123', nombre: 'Pedro', apellido: 'Sánchez' },
    { id: 10, email: 'elena@ejemplo.com', password: 'password123', nombre: 'Elena', apellido: 'Ramírez' }


];

   // Guardar usuarios en el localStorage
   localStorage.setItem('usuarios', JSON.stringify(bancoVirtual));

   // Función para verificar el saldo
   function verificarSaldo(numeroTarjeta, montoCompra) {
     // Recuperar usuarios del localStorage
     const usuarios = JSON.parse(localStorage.getItem('usuarios'));

     // Buscar el usuario por número de tarjeta
     const usuario = usuarios.find(user => user.numeroTarjeta === numeroTarjeta);

     if (usuario) {
       if (usuario.saldo >= montoCompra) {
         return true;
       } else {
         console.log('Saldo insuficiente.');
         return false;
       }
     } else {
       console.log('Usuario no encontrado.');
       return false;
     }
   }

   // Función para efectuar la compra
   function efectuarCompra(numeroTarjeta, montoCompra) {
     if (verificarSaldo(numeroTarjeta, montoCompra)) {
       // Recuperar usuarios del localStorage
       const usuarios = JSON.parse(localStorage.getItem('usuarios'));

       // Buscar el usuario por número de tarjeta
       const usuario = usuarios.find(user => user.numeroTarjeta === numeroTarjeta);

       // Restar el monto de la compra del saldo del usuario
       usuario.saldo -= montoCompra;

       // Actualizar el localStorage
       localStorage.setItem('usuarios', JSON.stringify(usuarios));

       console.log('Compra efectuada exitosamente.');
       console.log(`Nuevo saldo: ${usuario.saldo}`);
       return `Compra efectuada exitosamente. Nuevo saldo: $${usuario.saldo}`;
     } else {
       console.log('No se pudo efectuar la compra.');
       return 'No se pudo efectuar la compra. Saldo insuficiente.';
     }
   }

   // Evento para efectuar la compra
   document.getElementById('formCompra').addEventListener('submit', function(event) {
     event.preventDefault();

     const numeroTarjeta = document.getElementById('typeText').value;
     const montoCompra = carrito.reduce((total, item) => total + (item.price * item.quantity), 0) + shippingCost;

     const mensaje = efectuarCompra(numeroTarjeta, montoCompra);
     document.getElementById('mensajeCompra').textContent = mensaje;
   });

   // Actualiza el carrito al cargar la página
   window.addEventListener('load', actualizarCarrito);

