function limpiarCampos() {
    document.getElementById("miFormulario").reset();
    document.getElementById("respuesta").innerHTML = '';
}

function enviarDatos() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    var data = {
        nombre: nombre,
        email: email,
        mensaje: mensaje
    };

    fetch('/guardarDatos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        document.getElementById("respuesta").innerHTML = 'Datos enviados con éxito: ' + JSON.stringify(result);
    })
    .catch(error => {
        console.error('Error al enviar los datos: ' + error);
    });
}
