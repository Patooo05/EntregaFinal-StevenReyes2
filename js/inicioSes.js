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

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginButton').addEventListener('click', function() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log('Botón de iniciar sesión clicado');
        console.log('Email:', email);
        console.log('Password:', password);

        if (verificarUsuario(email, password)) {
            alert("Inicio de sesión exitoso.");
        } else {
            alert("Correo electrónico o contraseña incorrectos.");
        }
    });

    function verificarUsuario(email, password) {
        // Obtener los usuarios del localStorage
        const bancoVirtual = JSON.parse(localStorage.getItem('bancoVirtual')) || [];

        console.log('Usuarios en localStorage:', bancoVirtual);

        // Recorrer cada usuario para verificar las credenciales
        for (const usuario of bancoVirtual) {
            console.log('Verificando usuario:', usuario.email);
            if (usuario.email === email && usuario.password === password) {
                console.log('Usuario encontrado:', usuario);
                return true; // Enuentra usuario y verifica
            }
        }
        console.log('Usuario no encontrado');
        return false;
    }
});
