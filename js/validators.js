const formulario = document.getElementById('form');

formulario.addEventListener('submit', (event) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validación de correo electrónico
    if (email === '') {
        alert('El campo de correo electrónico es obligatorio.');
        return;
    }

    if (!validarEmail(email)) {
        alert('El correo electrónico no es válido.');
        return;
    }

    // Validación de contraseña
    if (password === '') {
        alert('El campo de contraseña es obligatorio.');
        return;
    }

    // Si la validación es exitosa, se envia el formulario al servidor
    alert('Iniciando sesion');
    formulario.submit();
});

function validarEmail(email) {
    // Implementar la lógica para validar el formato del correo electrónico
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}
