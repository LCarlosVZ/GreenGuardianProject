document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('form');
    const botonIngresar = document.querySelector('input[type="submit"]');
    const usuarioInput = document.getElementById('usuario');
    const contrasenaInput = document.getElementById('contrasena');

    // Datos de credenciales en formato JSON
    const credenciales = [
        {
            "usuario": "usuarioadmin",
            "contrasena": "123456",
            "autenticado": true
        },
        {
            "usuario": "usuario1",
            "contrasena": "Clave112",
            "autenticado": false
        },
        {
            "usuario": "usuario2",
            "contrasena": "cLave213",
            "autenticado": false
        },
        {
            "usuario": "usuario3",
            "contrasena": "clAve345",
            "autenticado": false
        }
    ];

    // Función para validar el formulario
    function validarFormulario() {
        if (!(usuarioInput.value.trim() === '' || contrasenaInput.value.trim() === '')) {
            botonIngresar.disabled = false;
        } else {
            botonIngresar.disabled = true;
        }
    }

    // Eventos para validar el formulario en tiempo real
    usuarioInput.addEventListener('input', validarFormulario);
    contrasenaInput.addEventListener('input', validarFormulario);

    // Evento al enviar el formulario
    formulario.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar envío automático del formulario

        const usuario = usuarioInput.value.trim();
        const contrasena = contrasenaInput.value.trim();

        // Verificar si las credenciales están en sessionStorage
        const storedUsuario = sessionStorage.getItem('usuario');
        const storedContrasena = sessionStorage.getItem('contrasena');
        if (usuario === storedUsuario && contrasena === storedContrasena) {
            alert('Este usuario no tiene permiso para ingresar.'); // Mostrar mensaje de error
            return; // Salir de la función si las credenciales coinciden con sessionStorage
        }

        // Buscar el usuario y verificar la contraseña en los datos locales
        const usuarioEncontrado = credenciales.find(u => u.usuario === usuario && u.contrasena === contrasena);
        if (usuarioEncontrado && usuarioEncontrado.autenticado) { // Si el usuario está autenticado
            // Redireccionar al usuario a la página correspondiente
            window.location.href = 'formulario.html';
        } else { // Si las credenciales son incorrectas
            alert('Usuario o contraseña incorrectos');
        }
    });

    // Evento para mostrar mensaje cuando el botón Ingresar está desactivado y se intenta seleccionar
    botonIngresar.addEventListener('click', () => {
        if (botonIngresar.disabled) {
            // Mostrar mensaje temporal
            const mensaje = document.createElement('div');
            mensaje.textContent = 'Completa los campos para ingresar';
            mensaje.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 10px; border: 1px solid black; z-index: 1000;';
            document.body.appendChild(mensaje);

            // Eliminar mensaje después de 3 segundos
            setTimeout(() => {
                document.body.removeChild(mensaje);
            }, 3000);
        }
    });
});
