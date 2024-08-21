
const bancoVirtual = [
    {
        id: 1,
        email: 'carlos@ejemplo.com',
        password: 'password123',
        nombre: 'Carlos',
        apellido: 'González',
        saldo: 5000, 
        numeroTarjeta: '1234 5678 9012 3457',
        fechaVencimiento: '12/2025',
        cvv: '123'
    },
    {
        id: 2,
        email: 'maria@ejemplo.com',
        password: 'password123',
        nombre: 'María',
        apellido: 'Fernández',
        saldo: 3000, 
        numeroTarjeta: '2345 6789 0123 4568',
        fechaVencimiento: '11/2024',
        cvv: '456'
    },
    {
        id: 3,
        email: 'juan@ejemplo.com',
        password: 'password123',
        nombre: 'Juan',
        apellido: 'Rodríguez',
        saldo: 1500, 
        numeroTarjeta: '3456 7890 1234 5679',
        fechaVencimiento: '10/2023',
        cvv: '789'
    },
    {
        id: 4,
        email: 'ana@ejemplo.com',
        password: 'password123',
        nombre: 'Ana',
        apellido: 'Martínez',
        saldo: 1000, 
        numeroTarjeta: '4567 8901 2345 6780',
        fechaVencimiento: '09/2022',
        cvv: '101'
    },
    {
        id: 5,
        email: 'luis@ejemplo.com',
        password: 'password123',
        nombre: 'Luis',
        apellido: 'Pérez',
        saldo: 7000, 
        numeroTarjeta: '5678 9012 3456 7891',
        fechaVencimiento: '08/2021',
        cvv: '112'
    },
    {
        id: 6,
        email: 'sofia@ejemplo.com',
        password: 'password123',
        nombre: 'Sofía',
        apellido: 'Gómez',
        saldo: 300, 
        numeroTarjeta: '6789 0123 4567 8902',
        fechaVencimiento: '07/2023',
        cvv: '123'
    },
    {
        id: 7,
        email: 'miguel@ejemplo.com',
        password: 'password123',
        nombre: 'Miguel',
        apellido: 'Torres',
        saldo: 700,
        numeroTarjeta: '7890 1234 5678 9012',
        fechaVencimiento: '06/2024',
        cvv: '456'
    },
    {
        id: 8,
        email: 'lucia@ejemplo.com',
        password: 'password123',
        nombre: 'Lucía',
        apellido: 'López',
        saldo: 520, 
        numeroTarjeta: '8901 2345 6789 0123',
        fechaVencimiento: '05/2025',
        cvv: '789'
    },
    {
        id: 9,
        email: 'pedro@ejemplo.com',
        password: 'password123',
        nombre: 'Pedro',
        apellido: 'Sánchez',
        saldo: 390, 
        numeroTarjeta: '9012 3456 7890 1234',
        fechaVencimiento: '04/2022',
        cvv: '101'
    },
    {
        id: 10,
        email: 'elena@ejemplo.com',
        password: 'password123',
        nombre: 'Elena',
        apellido: 'Ramírez',
        saldo: 410, 
        numeroTarjeta: '0123 4567 8901 2345',
        fechaVencimiento: '03/2023',
        cvv: '112'
    }
];


localStorage.setItem('bancoVirtual', JSON.stringify(bancoVirtual));

document.getElementById('formCompra').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener datos ingresados por el usuario
    const numeroTarjeta = document.getElementById('typeText').value.trim();
    const fechaVencimiento = document.getElementById('typeExp').value.trim();
    const cvv = document.getElementById('typeCvv').value.trim();
    const totalCompra = parseFloat(document.getElementById('total').innerText.replace('$', ''));

    // Obtener datos del banco desde localStorage
    const bancoVirtual = JSON.parse(localStorage.getItem('bancoVirtual'));

    // Buscar la tarjeta en el array
    const tarjetaEncontrada = bancoVirtual.find(tarjeta => 
        tarjeta.numeroTarjeta === numeroTarjeta &&
        tarjeta.fechaVencimiento === fechaVencimiento &&
        tarjeta.cvv === cvv
    );

    const mensajeCompra = document.getElementById('mensajeCompra');

    // Verificar si la tarjeta fue encontrada y si tiene saldo suficiente
    if (tarjetaEncontrada) {
        if (tarjetaEncontrada.saldo >= totalCompra) {
            // Mostrar alerta de confirmación
            Swal.fire({
                title: '¿Estás seguro?',
                text: "¿Deseas confirmar la compra?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, comprar'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Efectuar la compra
                    tarjetaEncontrada.saldo -= totalCompra;
                    localStorage.setItem('bancoVirtual', JSON.stringify(bancoVirtual));

                    // Eliminar la sección de compra
                    const sectionCompra = document.querySelector('section.h-100.h-custom.py-5');
                    sectionCompra.innerHTML = ''; // Vaciar el contenido de la sección

                    // Mostrar mensaje de agradecimiento con el nombre del usuario
                    const nombreUsuario = tarjetaEncontrada.nombre;
                    const mensajeGracias = document.createElement('h2');
                    mensajeGracias.classList.add('text-center', 'text-white');
                    mensajeGracias.textContent = `Gracias por tu compra, ${nombreUsuario}!`;
                    sectionCompra.appendChild(mensajeGracias);

                    // Mostrar mensaje de éxito con SweetAlert
                    Swal.fire(
                        'Compra realizada',
                        'Tu compra ha sido exitosa.',
                        'success'
                    );
                }
            });
        } else {
            mensajeCompra.textContent = 'Saldo insuficiente.';
            mensajeCompra.classList.add('text-danger');
        }
    } else {
        mensajeCompra.textContent = 'Tarjeta no válida.';
        mensajeCompra.classList.add('text-danger');
    }
});
