document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('policiaForm');
    const atrasBtn = document.querySelector('button.atras');
    const cancelarBtn = document.querySelector('button.cancelar');
    const cedulaInfractor = document.getElementById('cedulaInfractor').value;

    cedulaInfractor.value = cedulaInfractor || '';

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const jsonData = {};

        for (const [key, value] of formData.entries()) {
            jsonData[key] = value;
        }

        // Enviar los datos al servidor
        fetch('/api/policia', {
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

                // Redirigir a delito.html
                window.location.href = 'delito.html';
            })
            .catch(error => {
                console.error('Error:', error);
                // Redirigir a delito.html incluso si hay un error en la solicitud al servidor
                window.location.href = 'delito.html';
            });
    });

    atrasBtn.addEventListener('click', function() {
        window.location.href = 'ciudadano.html';
    });

    cancelarBtn.addEventListener('click', function() {
        if (confirm('¿Está seguro de cancelar?')) {
            form.reset();
            window.location.href = 'index.html';
        }
    });
});
