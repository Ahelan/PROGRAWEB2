// Escucha cuando el usuario le da click a submit
document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');

    // Aqui mas espeficamente escucha el submit
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        // Agarra los valores de username, email y password que escribio el usuario en los campos
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const profilePicture = document.getElementById('profilePicture').value;

        //Usa la funcion register (la de abajo) con los valores que escribio el usuario
        register(username, email, password, profilePicture);
    });
});

function register(username, email, password, profilePicture) {

    // Manda username, email y password a la ruta /register del backend
    const url = 'http://localhost:3000/register';
    const data = {
        username: username,
        email: email,
        password: password,
        profilePicture: profilePicture
    };

    // La fucnion fetch es la que le manda los datos al backend
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    // Then funciona despues de que se registro el usuario de manera satisfactoria
    // Simplemente le manda lo que regresa el backend al siguiente then
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    // Este then obtiene de parametro data, que es lo que regresa el servidor ya listo para hacer mas cosas en el front
    .then(data => {
        // PEndiente: Si se llega a esta parte, redirigir al usuario a la siguiente pagina.
        console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
        // Manejar errores de red o del servidor
        console.error('Error:', error);
    });
}

