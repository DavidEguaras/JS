const nombre = document.getElementById('nombre').value;

function mostrarError(idElemento, texto){
    document.getElementById(idElemento).textContent = texto;
}

function limpiarErrores(){
    const eleFormulario = document.getElementById('registroForm');
    let elementosError = Array.from(eleFormulario.getElementsByClassName('error'));
    elementosError.forEach(e=>{
        e.textContent = '';
    })
}

document.getElementById8('registroForm').addEventListener('submit', function(evento){
    evento.preventDefault();
    limpiarErrores();
    //controlamos todo
    //validar errores


    //controlamos todo
    if(nombre.value === ""){
        mostrarError('errorNombre', "Escribe algo");
        return;
    }
    
    //validar email
    const er = /\S+@\S+\.\S+/;
    if (email.value === "" || !er.test(email.value)){
        mostrarError('errorEmail', 'Mete un email valido');   
    }

    //Si no hay errores enviamos el formulario
    this.submit();
    window.alert("Enviado Correctamente")

});