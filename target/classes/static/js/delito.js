document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('delitoForm');
    const atrasBtn = document.querySelector('button.atras');
    const cancelarBtn = document.querySelector('button.cancelar');
    const nombreDelitoSelect = document.getElementById('nombreDelito');
    const valorMultaInput = document.getElementById('valorMulta');
    const cedulaInfractor = document.getElementById('cedulaInfractor').value;


    cedulaInfractor.value = cedulaInfractor || '';

    // Opciones de delitos
    const delitos = [
        { nombre: 'Seleccione...', valorMulta: '0' },
        { nombre: 'Deforestación', valorMulta: '5,806,666.67' },
        { nombre: 'Tráfico de fauna', valorMulta: '13,000,000.00' },
        { nombre: 'Financiación de la invasión de áreas de especial importancia ecológica', valorMulta: '13,000,000.00' },
        { nombre: 'Caza ilegal', valorMulta: '1,430,000.00' },
        { nombre: 'Pesca ilegal', valorMulta: '5,806,666.67' },
        { nombre: 'Contaminación ambiental', valorMulta: '6,066,666.67' },
        { nombre: 'Daño en los recursos naturales o ecocidio', valorMulta: '7,236,666.67' }
    ];

    // Agregar opciones al select de delitos
    delitos.forEach(delito => {
        const option = document.createElement('option');
        option.value = delito.nombre;
        option.textContent = delito.nombre;
        nombreDelitoSelect.appendChild(option);
    });

    // Actualizar el valor de la multa al seleccionar un delito
    nombreDelitoSelect.addEventListener('change', function() {
        const selectedDelito = delitos.find(delito => delito.nombre === this.value);
        if (selectedDelito) {
            valorMultaInput.value = selectedDelito.valorMulta;
            localStorage.setItem('valorMulta', selectedDelito.valorMulta);
        } else {
            valorMultaInput.value = 'Valor no especificado';
            localStorage.setItem('valorMulta', '0'); // O valor predeterminado
        }
    });

    form.addEventListener('input', function() {
        validarCampos();
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío tradicional del formulario

        if (validarCampos()) {
            const formData = new FormData(form); // Recopilar datos del formulario
            const jsonData = {};

            // Convertir FormData a JSON
            for (const [key, value] of formData.entries()) {
                jsonData[key] = value;
            }

            // Configurar la solicitud POST al backend
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jsonData)
            };

            // Enviar la solicitud al backend utilizando fetch
            fetch('/api/delito', requestOptions)
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

                    // Redirigir a la siguiente página después de enviar los datos
                    setTimeout(function() {
                        window.location.href = 'multa.html';
                    }, 300); // Retraso de 300 milisegundos
                });
        } else {
            alert('Por favor complete todos los campos antes de continuar.');
        }
    });

    atrasBtn.addEventListener('click', function() {
        window.location.href = 'policia.html';
    });

    cancelarBtn.addEventListener('click', function() {
        if (confirm('¿Está seguro de cancelar?')) {
            form.reset();
            window.location.href = 'index.html';
        }
    });

    function validarCampos() {
        const camposCompletos = (
            nombreDelitoSelect.value.trim() !== '' &&
            document.getElementById('leyInfringida').value.trim() !== '' &&
            valorMultaInput.value.trim() !== '' &&
            document.getElementById('descripcionInfraccion').value.trim() !== ''
        );

        // Habilitar o deshabilitar el botón "Siguiente" según la validación de campos
        const botonSiguiente = document.querySelector('button[type="submit"]');
        botonSiguiente.disabled = !camposCompletos;
        botonSiguiente.classList.toggle('siguiente-activo', camposCompletos);

        return camposCompletos;
    }
});