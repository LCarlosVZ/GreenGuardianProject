document.addEventListener('DOMContentLoaded', () => {
    const infractorData = JSON.parse(localStorage.getItem('infractorData'));
   // const imprimirBtn = document.getElementById('imprimir');
    //const salirBtn = document.getElementById('salir');

    if (infractorData) {
        const ciudadanoInfo = document.getElementById('ciudadano-info');
        const policiaInfo = document.getElementById('policia-info');
        const multaInfo = document.getElementById('multa-info');
        const delitoInfo = document.getElementById('delito-info');

        ciudadanoInfo.innerHTML = `
            <h2>Ciudadano</h2>
            <p>Nombre: ${infractorData.ciudadano.nombreInfractor}</p>
            <p>Cédula: ${infractorData.ciudadano.cedulaInfractor}</p>
            <p>Ciudad de Expedición: ${infractorData.ciudadano.ciudadExpedicion}</p>
            <p>Departamento de Residencia: ${infractorData.ciudadano.departamentoResidencia}</p>
            <p>Municipio de Residencia: ${infractorData.ciudadano.municipioResidencia}</p>
            <p>Dirección de Residencia: ${infractorData.ciudadano.direccionResidencia}</p>
            <p>Teléfono: ${infractorData.ciudadano.numeroTelefono}</p>
            <p>Correo Electrónico: ${infractorData.ciudadano.correoElectronico}</p>
        `;
        policiaInfo.innerHTML = `
            <h2>Policía</h2>
            <p>Nombre: ${infractorData.policia.nombrePolicia}</p>
            <p>Placa: ${infractorData.policia.placaPolicia}</p>
            <p>Cuadrante: ${infractorData.policia.cuadrante}</p>
            <p>Teléfono: ${infractorData.policia.numeroTelefono}</p>
        `;
        multaInfo.innerHTML = `
            <h2>Multa</h2>
            <p>Fecha: ${infractorData.multa.fechaMulta}</p>
            <p>Valor: ${infractorData.delito.valorMulta}</p>
            <p>Cédula del Infractor: ${infractorData.multa.cedulaInfractor}</p>
            <p>Placa del Policía: ${infractorData.multa.placaPolicia}</p>
        `;
        delitoInfo.innerHTML = `
            <h2>Delito</h2>
            <p>Nombre: ${infractorData.delito.nombreDelito}</p>
            <p>Ley Infringida: ${infractorData.delito.leyInfringida}</p>
            <p>Descripción: ${infractorData.delito.descripcionInfraccion}</p>
            <p>Valor de la Multa: ${infractorData.delito.valorMulta}</p>
            <p>Cédula del Infractor: ${infractorData.delito.cedulaInfractor}</p>
        `;

        // Generar código de barras
        const barcode = document.createElement('div');
        barcode.id = 'barcode';
        multaInfo.appendChild(barcode);
        JsBarcode("#barcode", infractorData.multa.cedulaInfractor, {
            format: "CODE128",
            lineColor: "#000",
            width: 2,
            height: 40,
            displayValue: true
        });

    } else {
        console.error('No se encontraron datos de infractor');
    }

    localStorage.removeItem('infractorData');

    // Evento click en el botón Imprimir
    document.getElementById('imprimir').addEventListener('click', () => {
        window.print();
    });

    // Evento click en el botón Salir
    document.getElementById('salir').addEventListener('click', () => {
        const confirmacion = confirm('¿Está seguro de salir?');
        if (confirmacion) {
            window.location.href = 'index.html';
        }
    });
});