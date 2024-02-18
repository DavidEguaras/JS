document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');
    const dniInput = document.getElementById('dni');
    const dniError = document.getElementById('dniError');
    const fechaNacimientoInput = document.getElementById('fechaNacimiento');
    const fechaNacimientoError = document.getElementById('fechaNacimientoError');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            const alumno = {
                matricula: null,
                grupo: document.getElementById('grupo').value,
                dni: dniInput.value,
                nombre: document.getElementById('nombre').value,
                apellidos: document.getElementById('apellidos').value,
                fechaNacimiento: fechaNacimientoInput.value,
                email: emailInput.value,
                username: document.getElementById('username').value,
                password: passwordInput.value
            };
            document.getElementById('alumnoInfo').innerText = JSON.stringify(alumno, null, 2);
            alert('Alumno registrado:\n\n' + JSON.stringify(alumno, null, 2));
        } else {
            alert('Por favor, corrija los errores en el formulario.');
        }
    });

    dniInput.addEventListener('input', function() {
        if (!validateDNI()) {
            dniError.textContent = 'FORMATO DE DNI: "99999999X"';
        } else {
            dniError.textContent = '';
        }
    });

    fechaNacimientoInput.addEventListener('input', function() {
        if (!validateFechaNacimiento()) {
            fechaNacimientoError.textContent = 'La fecha de nacimiento no puede ser posterior a la fecha actual.';
        } else {
            fechaNacimientoError.textContent = '';
        }
    });

    emailInput.addEventListener('input', function() {
        if (emailInput.validity.typeMismatch) {
            emailError.textContent = 'El formato del correo electrónico no es válido.';
        } else {
            emailError.textContent = '';
        }
    });

    document.getElementById('username').addEventListener('click', function() {
        const nombre = document.getElementById('nombre').value.toLowerCase();
        const apellidos = document.getElementById('apellidos').value.toLowerCase().split(' ')[0];
        document.getElementById('username').value = nombre.charAt(0) + apellidos;
    });

    function validateForm() {
        return validateDNI() && validateFechaNacimiento() && emailInput.validity.valid;
    }

    function validateDNI() {
        const dniPattern = /^\d{8}[a-zA-Z]$/;
        return dniPattern.test(dniInput.value);
    }

    function validateFechaNacimiento() {
        const fechaNacimiento = new Date(fechaNacimientoInput.value);
        const fechaActual = new Date();
        return fechaNacimiento <= fechaActual;
    }

    function generateRandomPassword(length) {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }

    passwordInput.value = generateRandomPassword(8);
});