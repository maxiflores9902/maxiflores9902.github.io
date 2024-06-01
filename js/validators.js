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

const form= document.querySelector('form')

form.querySelectorAll('input').forEach(input =>{
    input.addEventListener("change",()=>{
        const value = input.value.trim();//limpia espacios vacios al principio y al final

        if (value != "") {
            cleanError(input);
        }
    })
});

// Validar campos
function validateForm (input, message){
    const input = document.getElementById("input")
    const value = input.value.trim()

    if (value == ""){
        showError(input,message);
        return false;
    }else{
        cleanError(input)
    }
}


function isEmail(email) {
    // Implementar la lógica para validar el formato del correo electrónico
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}
