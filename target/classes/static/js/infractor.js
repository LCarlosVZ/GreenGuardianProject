document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('#formulario-infractor');
    const botonConsultar = document.getElementById('consultar-infracciones');
    const homeButton = document.getElementById('home-button');
    const mensajeError = document.getElementById('mensaje-error');

    formulario.addEventListener('input', () => {
        const camposRequeridos = document.querySelectorAll('[required]');
        let formValido = true;

        camposRequeridos.forEach((campo) => {
            if (campo.value.trim() === '') {
                formValido = false;
            }
        });

        botonConsultar.disabled = !formValido;
    });

    formulario.addEventListener('submit', async (event) => {
        event.preventDefault();
        const cedulaInfractor = document.getElementById('cedulaInfractor').value.trim(); // Cambiar el ID según corresponda
        try {
            console.log(cedulaInfractor)
            await consultarInfracciones(cedulaInfractor);
        } catch (error) {
            mensajeError.textContent = 'Error al consultar las infracciones';
            console.error('Error al consultar las infracciones:', error);
        }
    });

    homeButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    async function consultarInfracciones(cedulaInfractor) {
        const backendURL = `http://localhost:8080/api/infractor/${cedulaInfractor}`;

        try {
            const response = await fetch(backendURL);
            if (!response.ok) {
                throw new Error('Error al cargar la información del infractor');
            }
            const infractorData = await response.json();
            localStorage.setItem('infractorData', JSON.stringify(infractorData));
            window.location.href = 'factura.html'; // Redireccionar a factura.html
        } catch (error) {
            mensajeError.textContent = 'Error al consultar las infracciones';
            console.error('Error al consultar las infracciones:', error);
        }
    }


    function validarCedulaInfractor(cedulaInfractor) {
        const regex = /^\d{14}$/;
        return regex.test(cedulaInfractor);
    }
});

