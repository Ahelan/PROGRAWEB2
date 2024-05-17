function editUserInfo() {
    var form = document.getElementById("user-info-form");
    var inputs = form.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].readOnly = false;
    }
    document.getElementById("save-button").style.display = "block";
}

window.onload = function () {
    var form = document.getElementById("user-info-form");
    form.addEventListener("submit", function (event) {
        var username = document.getElementById("username").value.trim();
        var email = document.getElementById("email").value.trim();
        var password = document.getElementById("password").value.trim();
        if (username === "") {
            alert("Por favor, ingresa un nombre de usuario.");
            event.preventDefault();
            return;
        }
        if (email === "") {
            alert("Por favor, ingresa un correo electrónico.");
            event.preventDefault();
            return;
        }
        if (!isValidEmail(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            event.preventDefault();
            return;
        }
        if (password === "") {
            alert("Por favor, ingresa una contraseña.");
            event.preventDefault();
            return;
        }
        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            event.preventDefault();
            return;
        }
    });
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}