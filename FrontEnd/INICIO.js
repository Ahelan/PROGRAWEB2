document.addEventListener("DOMContentLoaded", function() {
    const addSongButton = document.getElementById("addSongButton");
    const songFileInput = document.getElementById("songFileInput");
    const songTitleInput = document.getElementById("songTitleInput");
    const songList = document.querySelector(".song-list");

    addSongButton.addEventListener("click", function() {
        const file = songFileInput.files[0];
        const title = songTitleInput.value.trim();

        if (file && title) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const audioSrc = e.target.result;
                addSongToList(title, audioSrc, file.name);
            };
            reader.readAsDataURL(file);
        } else {
            alert("Por favor, selecciona un archivo de audio y escribe un título.");
        }
    });

    function addSongToList(title, audioSrc, fileName) {
        const song = document.createElement("article");
        song.className = "song";
        song.dataset.audio = fileName;

        song.innerHTML = `
            <div class="song-details">
                <h3 class="song-title">${title}</h3>
                <input type="text" class="edit-title" value="${title}" style="display:none;">
                <p class="uploader">Subido por: Tú</p>
                <button class="play-button" onclick="togglePlayPause(this)">▶️ Reproducir</button>
                <button class="edit-button" onclick="editSong(this)">✏️ Editar</button>
                <button class="delete-button" onclick="deleteSong(this)">🗑️ Eliminar</button>
                <audio class="audio-element" src="${audioSrc}"></audio>
            </div>
        `;

        songList.appendChild(song);
    }
});

function togglePlayPause(button) {
    const audio = button.nextElementSibling.nextElementSibling.nextElementSibling;
    if (audio.paused) {
        audio.play();
        button.textContent = "⏸️ Pausar";
    } else {
        audio.pause();
        button.textContent = "▶️ Reproducir";
    }
}

function editSong(button) {
    const songDetails = button.parentElement;
    const titleElement = songDetails.querySelector(".song-title");
    const editTitleInput = songDetails.querySelector(".edit-title");
    const isEditing = editTitleInput.style.display === "block";

    if (isEditing) {
        titleElement.textContent = editTitleInput.value;
        titleElement.style.display = "block";
        editTitleInput.style.display = "none";
        button.textContent = "✏️ Editar";
    } else {
        editTitleInput.style.display = "block";
        titleElement.style.display = "none";
        button.textContent = "Guardar";
    }
}

function deleteSong(button) {
    const song = button.closest(".song");
    song.remove();
}

document.getElementById("searchInput").addEventListener("input", function() {
    var searchTerm = this.value.toLowerCase();
    var songs = document.querySelectorAll(".song");

    songs.forEach(function(song) {
        var title = song.querySelector(".song-title").textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            song.style.display = "block";
        } else {
            song.style.display = "none";
        }
    });
});

function cerrarSesion() {
    // Aquí puedes agregar la lógica para cerrar la sesión
    // Por ejemplo, redirigir a la página de inicio de sesión
    window.location.href = "./LOGIN.html";
}
