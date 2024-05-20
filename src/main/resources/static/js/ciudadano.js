document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('ciudadanoForm');
    const correoInput = document.getElementById('correoElectronico'); // Obtener la referencia al input del correo electrónico una vez

    form.addEventListener('input', function() {
        const nombreInfractor = document.getElementById('nombreInfractor').value;
        const tipoIdentificacion = document.getElementById('tipoIdentificacion').value;
        const cedulaInfractor = document.getElementById('cedulaInfractor').value;
        const ciudadExpedicion = document.getElementById('ciudadExpedicion').value;
        const departamentoResidencia = document.getElementById('departamentoResidencia').value;
        const municipioResidencia = document.getElementById('municipioResidencia').value;
        const direccionResidencia = document.getElementById('direccionResidencia').value;
        const numeroTelefono = document.getElementById('numeroTelefono').value;

        // Verificar que todos los campos estén completos
        const camposCompletos = nombreInfractor && tipoIdentificacion && cedulaInfractor && ciudadExpedicion && departamentoResidencia && municipioResidencia && direccionResidencia && numeroTelefono;

        // Verificar que el correo electrónico sea válido
        const correoValido = validateEmail(correoInput.value);

        // Habilitar o deshabilitar el botón "Siguiente" según la validación de campos
        const botonSiguiente = document.querySelector('button[type="submit"]');
        botonSiguiente.disabled = !camposCompletos || !correoValido;

        // Aplicar estilo al botón "Siguiente" según su estado
        botonSiguiente.classList.toggle('siguiente-activo', camposCompletos && correoValido);

        // Aplicar estilo al campo de correo electrónico en caso de error
        correoInput.classList.toggle('error', correoInput.value && !correoValido);
    });

    function validateEmail(email) {
        // Validación simple de correo electrónico
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function cancelar() {
        if (confirm('¿Está seguro de cancelar?')) {
            form.reset();
            window.location.href = 'index.html';
        }
    }

    // Asociar la función "cancelar" al botón "Cancelar"
    const botonCancelar = document.querySelector('button.cancelar');
    botonCancelar.addEventListener('click', cancelar);

    // Al enviar el formulario, enviar datos al servidor
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío tradicional del formulario

        // Crear un objeto con los datos del formulario
        const formData = new FormData(form);
        const jsonData = {};

        for (const [key, value] of formData.entries()) {
            jsonData[key] = value;
        }

        // Enviar los datos al servidor
        fetch('/api/ciudadano', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error en la solicitud');
                }
            })
            .then(data => {
                console.log('Éxito:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            })
            .finally(() => {
                // Redirigir a policia.html después de enviar el formulario
                setTimeout(function() {
                    window.location.href = 'policia.html';
                }, 300); // Retraso de 300 milisegundos
            });
    });
});