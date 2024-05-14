// Función para alternar entre reproducir y pausar el audio
function togglePlayPause(button) {
    var audio = button.nextElementSibling; // Obtener el elemento de audio siguiente al botón

    if (audio.paused) {
        playAudio(audio); // Reproducir audio si está pausado
        updatePlayButton(button, '⏸ Pausar');
    } else {
        pauseAudio(audio); // Pausar audio si está reproduciéndose
        updatePlayButton(button, '▶️ Reproducir');
    }
}

// Función para reproducir el audio
function playAudio(audio) {
    audio.play();
}

// Función para pausar el audio
function pauseAudio(audio) {
    audio.pause();
}

// Función para actualizar el texto del botón de reproducción/pausa
function updatePlayButton(button, text) {
    button.textContent = text;
}

// Variables para contar los likes de cada canción
let likesCount1 = 0;

// Función para dar "like" a una canción
function toggleLike(playButtonId) {
    const likesCountId = `likesCount${playButtonId.slice(-1)}`;
    likesCount1++; // Incrementar el contador de likes
    document.getElementById(likesCountId).textContent = `Likes: ${likesCount1}`;
}
