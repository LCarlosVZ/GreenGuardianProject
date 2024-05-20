document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('multaForm');
    const fechaMultaInput = document.getElementById('fechaMulta');
    const placaPoliciaInput = document.getElementById('placaPolicia');
    const cedulaInfractorInput = document.getElementById('cedulaInfractor');
    const totalPagarInput = document.getElementById('totalPagar');

    // Obtener datos del localStorage y asignarlos a los campos correspondientes
    const valorMultaStr = localStorage.getItem('valorMulta');
    const valorMulta = parseFloat(valorMultaStr.replace(/\D/g, ''));

    // Asignar valores a los campos
    totalPagarInput.value = isNaN(valorMulta) ? '' : valorMulta;

    // Obtener la fecha actual y asignarla al campo de fecha
    fechaMultaInput.value = new Date().toISOString().split('T')[0];

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Recopilar los datos del formulario
        const fechaMulta = fechaMultaInput.value;
        const placaPolicia = placaPoliciaInput.value;
        const cedulaInfractor = cedulaInfractorInput.value;
        const totalPagar = totalPagarInput.value;

        // URL del backend
        const backendURL = 'http://localhost:8080/api/multa';

        // Configurar la solicitud POST al backend con todos los datos necesarios
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fechaMulta, placaPolicia, cedulaInfractor, totalPagar })
        };

        // Enviar la solicitud al backend utilizando fetch
        fetch(backendURL, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al enviar los datos al backend');
                }
                return response.json();
            })
            .then(data => {
                console.log('Datos enviados correctamente:', data);
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
                // Manejar el error según sea necesario
            })
            .finally(() => {
                // Preguntar al usuario si desea ingresar otra multa
                const confirmacion = confirm('¿Desea ingresar otra multa?');
                if (confirmacion) {
                    window.location.href = '/ciudadano.html';
                } else {
                    window.location.href = '/index.html';
                }
            });
    });

    // Función para retroceder a la página anterior
    const atrasBtn = document.querySelector('button.atras');
    atrasBtn.addEventListener('click', function() {
        window.history.back();
    });

    // Función para cancelar y limpiar el formulario
    const cancelarBtn = document.querySelector('button.cancelar');
    cancelarBtn.addEventListener('click', function() {
        if (confirm('¿Está seguro de cancelar?')) {
            form.reset();
        }
    });

    // Restablecer los valores almacenados después de usarlos para evitar confusiones en futuros formularios
    localStorage.removeItem('valorMulta');
});
