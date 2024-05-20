document.addEventListener('DOMContentLoaded', () => {
    const registroForm = document.getElementById('registroForm');
    const usuarioInput = document.getElementById('usuario');
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirm_password');
    const departamentoInput = document.getElementById('departamento');
    const municipioInput = document.getElementById('municipio');
    const emailInput = document.getElementById('email');
    const uppercaseHint = document.querySelector('.uppercase-hint');
    const numberHint = document.querySelector('.number-hint');
    const lengthHint = document.querySelector('.length-hint');

    function validatePassword() {
        if (passwordInput.value !== confirmInput.value) {
            confirmInput.setCustomValidity('Las contraseñas no coinciden.');
        } else {
            confirmInput.setCustomValidity('');
        }
    }

    function validateStrength() {
        const password = passwordInput.value;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const isValidLength = password.length >= 8;

        if (hasUpperCase) {
            uppercaseHint.classList.add('valid-hint');
        } else {
            uppercaseHint.classList.remove('valid-hint');
        }

        if (hasNumber) {
            numberHint.classList.add('valid-hint');
        } else {
            numberHint.classList.remove('valid-hint');
        }

        if (isValidLength) {
            lengthHint.classList.add('valid-hint');
        } else {
            lengthHint.classList.remove('valid-hint');
        }
    }

    passwordInput.addEventListener('input', () => {
        validatePassword();
        validateStrength();
    });
    confirmInput.addEventListener('input', validatePassword);

    registroForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const usuario = usuarioInput.value.trim();
        const contrasena = passwordInput.value.trim();
        const email = emailInput.value.trim();
        const departamento = departamentoInput.value.trim();
        const municipio = municipioInput.value.trim();

        // Guardar los datos en sessionStorage
        sessionStorage.setItem('usuario', usuario);
        sessionStorage.setItem('contrasena', contrasena);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('departamento', departamento);
        sessionStorage.setItem('municipio', municipio);

        const confirmacion = confirm('Datos guardados ¿Desea ingresar un nuevo usuario policía?');
        if (confirmacion) {
            // Limpiar el formulario
            registroForm.reset();
        } else {
            // Redirigir a la página de inicio
            window.location.href = 'index.html';
        }
    });
});

