document.addEventListener("DOMContentLoaded", () => {
    const playlistCards = document.querySelector('.playlist-cards')

    playlistCards.innerHTML = '';

    playlists.forEach(item =>{
        console.log('insight for each playlist')
        console.log(item)
        playlistCards.innerHTML += `
        <article class="playlistcard" data-id="${item.playlistId}">
            <div class="playlistImg" data-id=${item.playlistId}>
                <img src="${item.playlistImage}" alt="playlist" width="100%">
            </div>
            <h3 class="playlistTitle">${item.playlistTitle}</h3>
            <p class="creatorName">${item.playlistCreator}</p>
            <button class="likes" data-id="${item.playlistId}"><i class="fas fa-heart"></i><span class="like-count">${item.playlistLikeCount}</span></button>
        </article>
        `
    })


    document.querySelectorAll('.playlistImg').forEach(card => {
        card.addEventListener('click', () => {
            console.log('data set idea' + parseInt(card.dataset.id))
            const id = parseInt(card.dataset.id);
            const playlistMatch = playlists.find(p => p.playlistId === id);
            if (playlistMatch) {
                console.log('found match')
                console.log(playlistMatch)
                modalFill(playlistMatch);
                document.querySelector('.modal').classList.add('show');
            }
        })
    })

    document.addEventListener("click", (e) => {
        if (e.target.closest(".likes")) {
            const button = e.target.closest(".likes");
            const countSpan = button.querySelector(".like-count");
            let count = parseInt(countSpan.textContent);

            if (button.classList.contains("liked")) {
                count--;
                button.classList.remove("liked")
                button.style.color="grey";
            }   else {
                count ++;
                button.classList.add("liked");
                button.style.color = "red"
            }
            countSpan.textContent = count;
        }
    })
})

function modalFill(data) {
    const modalContent = document.querySelector('.modalContent')
    modalContent.innerHTML = `
    <span class="close">&times;</span>
    <section class="modal-header">
        <img id="playlistImage" src="${data.playlistImage}" alt="Playlist Cover" width="200px">
        <article class="playlist_details">
            <h2 id="playlistName">${data.playlistTitle}</h2>
            <p id="playlistCreator">${data.playlistCreator}</p>
        </article>

        
        <button class="shuffle"> Shuffle </button>
    </section>
    <section class="songs">
        ${renderSongs(data.playlistSongs)}
    </section>
    </section>
    `;
        

    const shuffle = modalContent.querySelector(".shuffle")
    shuffle.addEventListener("click", () => {
        const playlist = playlists.find(p => p.playlistId === data.playlistId);
        if (!playlist) return;

        for (let i = playlist.playlistSongs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [playlist.playlistSongs[i], playlist.playlistSongs[j]] = [playlist.playlistSongs[j], playlist.playlistSongs[i]];
        }
        const songSection = modalContent.querySelector(".songs");
        songSection.innerHTML = renderSongs(playlist.playlistSongs);
    })

    const modal = document.querySelector(".modal");
    modalContent.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('close')) {
            modal.classList.remove('show');
        }
    })
}

function renderSongs(songs) {
    return songs.map(song => `
        <div class="song">
            <img src="${song.songImage}" alt="song" width="100px" class="song-image">
            <div class="song-description">
                <h4 id="songName">${song.songTitle}</h4>
                <p id="songArtist">${song.songArtist}</p>
                <p id="albumName">${song.songAlbum}</p>
            </div>
            <div id="songDuration">
                <p>${song.songDuration}</p>
            </div>
        </div>
    `).join('');
}
