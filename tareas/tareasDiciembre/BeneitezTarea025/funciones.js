const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const contrasena = document.getElementById('contrasena');
const confirmarContrasena = document.getElementById('confirmarContrasena');
const edad = document.getElementById('edad');
const generoMasculino = document.getElementById('generoMasculino');
const generoFemenino = document.getElementById('generoFemenino');
const terminosCondiciones = document.getElementById('terminosCondiciones');

function mostrarError(idElemento, texto) {
    document.getElementById(idElemento).textContent = texto;
}

function limpiarErrores() {
    const eleFormulario = document.getElementById('registroForm');
    let elementosError = Array.from(eleFormulario.getElementsByClassName('error'));
    elementosError.forEach(e => {
        e.textContent = '';
    });
}

document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    limpiarErrores();

    // Validar nombre
    if (!nombre.checkValidity()) {
        mostrarError('errorNombre', "Por favor, ingresa tu nombre.");
    }

    // Validar email
    if (!email.checkValidity()) {
        mostrarError('errorEmail', "Ingresa una dirección de correo electrónico válida.");
    }

    // Validar contraseña
    if (!contrasena.checkValidity()) {
        mostrarError('errorContrasena', "La contraseña debe tener al menos 8 caracteres.");
    }

    // Confirmar contraseña
    if (contrasena.value !== confirmarContrasena.value) {
        mostrarError('errorConfirmarContrasena', "Las contraseñas no coinciden.");
    }

    // Validar edad
    if (!edad.checkValidity()) {
        mostrarError('errorEdad', "Debes tener al menos 18 años para registrarte.");
    }

    // Validar género
    if (!generoMasculino.checked && !generoFemenino.checked) {
        mostrarError('errorGenero', "Selecciona tu género.");
    }

    // Validar términos y condiciones
    if (!terminosCondiciones.checked) {
        mostrarError('errorTerminosCondiciones', "Debes aceptar los términos y condiciones.");
    }

    // Si no hay errores, enviamos el formulario
    if (this.checkValidity() && contrasena.value === confirmarContrasena.value) {
        alert('Registrado correctamente');
        this.submit();
    }
});