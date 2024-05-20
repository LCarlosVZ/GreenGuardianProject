document.addEventListener('DOMContentLoaded', () => {
    // Obtener los elementos del formulario y otros elementos relevantes
    const nombreInput = document.getElementById('nombre');
    const apellidosInput = document.getElementById('apellidos');
    const documentoInput = document.getElementById('documento');
    const numIdentificacionInput = document.getElementById('num_identificacion');
    const telefonoInput = document.getElementById('telefono');
    const departamentoInput = document.getElementById('departamento');
    const municipioInput = document.getElementById('municipio');
    const direccionInput = document.getElementById('direccion');
    const infraccionInput = document.getElementById('infraccion');
    const zonaInfraccionInput = document.getElementById('zona_infraccion');
    const ubicacionInfraccionInput = document.getElementById('ubicacion_infraccion');
    const fechaInfraccionInput = document.getElementById('fecha_infraccion');
    const valorMultaInput = document.getElementById('valor_multa');
    const pagueInfo = document.getElementById('pague-info');
    const codigoBarrasSVG = document.getElementById('codigo_barras');
    const imprimirBtn = document.getElementById('imprimir');
    const salirBtn = document.getElementById('salir');

    // URL de la API simulada
    const url = 'https://api.simulada.com/factura';

    // Obtener datos de la base de datos simulada
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Llenar el formulario con los datos obtenidos de la base de datos
            nombreInput.value = data.nombre;
            apellidosInput.value = data.apellidos;
            documentoInput.value = data.documento;
            numIdentificacionInput.value = data.numIdentificacion;
            telefonoInput.value = data.telefono;
            departamentoInput.value = data.departamento;
            municipioInput.value = data.municipio;
            direccionInput.value = data.direccion;
            infraccionInput.value = data.infraccion;
            zonaInfraccionInput.value = data.zona_infraccion;
            ubicacionInfraccionInput.value = data.ubicacion_infraccion;
            fechaInfraccionInput.value = formatDate(data.fecha_infraccion); // Formatear la fecha correctamente
            valorMultaInput.value = data.valorMulta.toFixed(2); // Valor de la multa con 2 decimales

            // Calcular el valor actualizado de la multa considerando el incremento del 30% por mes
            const fechaActual = new Date();
            const fechaInfraccion = new Date(formatDate(data.fecha_infraccion));
            const mesesTranscurridos = (fechaActual.getFullYear() - fechaInfraccion.getFullYear()) * 12 + (fechaActual.getMonth() - fechaInfraccion.getMonth());
            const valorMultaActualizado = data.valorMulta * Math.pow(1.3, mesesTranscurridos);
            valorMultaInput.value = valorMultaActualizado.toFixed(2); // Valor de la multa actualizado con 2 decimales

            // Generar código de barras (JsBarcode: https://lindell.me/JsBarcode/)
            JsBarcode(codigoBarrasSVG, data.numIdentificacion, {
                format: 'CODE128',
                lineColor: '#000',
                width: 2,
                height: 40,
                displayValue: false
            });
        })
        .catch(error => {
            console.error('Error al obtener datos de la base de datos:', error);
        });

    // Función para mostrar información de pago al imprimir o descargar
    function mostrarInfoPago() {
        pagueInfo.classList.remove('hide-on-screen');
    }

    // Función para imprimir el contenido del formulario o descargar en PDF
    function imprimirFactura() {
        mostrarInfoPago(); // Mostrar información de pago al imprimir
        window.print(); // Imprimir el formulario
    }

    // Evento click en el botón Imprimir
    imprimirBtn.addEventListener('click', () => {
        imprimirFactura(); // Llamar a la función para imprimir
    });

    // Evento click en el botón Salir
    salirBtn.addEventListener('click', () => {
        const confirmacion = confirm('¿Estás seguro de abandonar la página?');
        if (confirmacion) {
            window.location.href = '../index.html'; // Redirigir a la página principal
        }
    });

    // Función para formatear la fecha en el formato adecuado (AAAA-MM-DD)
    function formatDate(dateString) {
        const dateParts = dateString.split('/');
        if (dateParts.length !== 3) return dateString; // No es un formato válido, devolver la cadena original
        return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`; // Formato correcto: AAAA-MM-DD
    }
});

