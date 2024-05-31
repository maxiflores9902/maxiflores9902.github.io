const formulario = document.getElementById('form');

const showError = (input,message) =>{
    const divPadre = input.parentNode;
    const errorText = divPadre.querySelector('.error-text');
    divPadre.classList.add("error");
    errorText.innerText = message;
}

const input = document.querySelector("#email");
const message = "Campo obligatorio"

//Funcion eliminar mensaje de error

const cleanError = input =>{
    const divPadre = input.parentNode;
    divPadre.classList.remove("error")
    const errorText = divPadre.querySelector('.error-text');
    errorText.innerText = "";
}



// formulario.addEventListener('submit', (event) => {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     // Validación de correo electrónico
//     if (email === '') {
//         alert('El campo de correo electrónico es obligatorio.');
//         return;
//     }

//     if (!validarEmail(email)) {
//         alert('El correo electrónico no es válido.');
//         return;
//     }

//     // Validación de contraseña
//     if (password === '') {
//         alert('El campo de contraseña es obligatorio.');
//         return;
//     }

//     // Si la validación es exitosa, se envia el formulario al servidor
//     alert('Iniciando sesion');
//     formulario.submit();
// });

// function validarEmail(email) {
//     // Implementar la lógica para validar el formato del correo electrónico
//     return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
// }
