function togglePlayPause(button) {
    var audio = button.nextElementSibling; // Obtener el elemento de audio siguiente al botón
    var audioElements = document.querySelectorAll('.audio-element'); // Obtener todos los elementos de audio

    // Pausar todos los demás audios antes de reproducir el nuevo
    audioElements.forEach(function (element) {
        if (element !== audio) {
            element.pause();
            updatePlayButton(element, '▶️ Reproducir');
        }
    });

    if (audio.paused) {
        audio.play();
        updatePlayButton(audio, '⏸ Pausar');
    } else {
        audio.pause();
        updatePlayButton(audio, '▶️ Reproducir');
    }
}

function updatePlayButton(audio, text) {
    var button = audio.previousElementSibling; // Obtener el botón anterior al elemento de audio
    button.textContent = text;
}

// Variables para contar los likes de cada canción
let likesCount1 = 0;

// Función para dar "like" a una canción
function toggleLike(playButtonId) {
    const likesCountId = `likesCount${playButtonId.slice(-1)}`;
    likesCount1++; // Incrementa el contador de likes
    document.getElementById(likesCountId).textContent = `Likes: ${likesCount1}`;
}

// Resto de tu código JavaScript
