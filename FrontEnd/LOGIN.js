document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const username = formData.get('username');
    const password = formData.get('password');

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (data.success) {
            // Si el inicio de sesión es exitoso, muestra un mensaje de bienvenida
            alert('¡Bienvenido, ' + username + '!');
           // window.location.href = 'REGISTRO.html';
        } else {
            // Si el inicio de sesión falla, muestra un mensaje de error
            alert('Error: ' + data.message);
        }
        console.log(data);
        // Aquí puedes manejar la respuesta del servidor, por ejemplo, mostrar un mensaje al usuario
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
});