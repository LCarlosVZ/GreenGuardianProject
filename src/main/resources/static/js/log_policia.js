document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('form');
    const botonIngresar = document.querySelector('input[type="submit"]');
    const usuarioInput = document.getElementById('usuario');
    const contrasenaInput = document.getElementById('contrasena');

    // Datos de credenciales en formato JSON
    const credenciales = [
        { "usuario": "usuario1", "contrasena": "Clave112" },
        { "usuario": "usuario2", "contrasena": "cLave213" },
        { "usuario": "usuario3", "contrasena": "clAve345" }
    ];

    // Funcion para validar el formulario
    function validarFormulario() {
        botonIngresar.disabled = usuarioInput.value.trim() === '' || contrasenaInput.value.trim() === '';
    }

    // Eventos para validar el formulario en tiempo real
    usuarioInput.addEventListener('input', validarFormulario);
    contrasenaInput.addEventListener('input', validarFormulario);

    // Evento al enviar el formulario
    formulario.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar envío automático del formulario

        const usuario = usuarioInput.value.trim();
        const contrasena = contrasenaInput.value.trim();

        // Verificar las credenciales localmente
        const usuarioValido = credenciales.some(credencial => credencial.usuario === usuario && credencial.contrasena === contrasena);
        if (usuarioValido || (sessionStorage.getItem('usuario') === usuario && sessionStorage.getItem('contrasena') === contrasena)) {
            // Redireccionar al usuario a la página correspondiente
            window.location.href = 'ciudadano.html';
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });

    // Evento para mostrar mensaje cuando el botón Ingresar está desactivado y se intenta seleccionar
    botonIngresar.addEventListener('click', function() {
        if (this.disabled) {
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
