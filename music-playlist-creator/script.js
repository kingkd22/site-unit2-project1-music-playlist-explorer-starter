document.addEventListener("DOMContentLoaded", () => {
    const playlistCards = document.querySelector('.playlist-cards')

    playlistCards.innerHTML = '';

    playlists.forEach(item =>{
        playlistCards.innerHTML += `
        <article class="playlistcard" data-id="${item.playlistId}">
            <img src="${item.playlistImage}" alt="playlist" width="100%">
            <h3 class="playlistTitle">${item.playlistTitle}</h3>
            <p class="creatorName">${item.playlistCreator}</p>
            <p class="likes">
            <i class="fas fa-heart heart-icon" style="color: lightgrey;" data-id="${item.playlistId}></i>
            ${item.playlistLikeCount}
            </p>
        </article>
        `
    })


    document.querySelectorAll('.playlistcard').forEach(card => {
        
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
})
    // document.addEventListener('click', (e) => {
    //     if (e.target.classList.contains("heart-icon")) {
    //         const id = parseInt(e.target.dataset.id)
    //         const playlist = playlist.find(p => p.playlistId === id);

    //         if (!playlist) return;

    //         const countSpan = e.target.nextElementSibling;
    //         const isLiked = e.target.classList.contains("liked");

    //         if (isLiked) {
    //             playlist.playlistLikeCount -= 1;
    //             e.target.style.color = "lightgrey";
    //             e.target.classList.remove("liked")
    //         }   else {
    //             playlist.playlistLikeCount += 1;
    //             e.target.style.color = "red";
    //             e.target.classList.add("liked");
    //         }
    //         countSpan.textContent = playlist.playlistLikeCount;
    //     }
    // })


// const modal = document.querySelector('.modal')

// cards.forEach(card =>{

// openModel()
// function openModel() {
//     const cards = document.querySelectorAll('.playlistcard')
//     const modal = document.querySelector('.model')

//     cards.forEach(card => {
//         card.addEventListener('click', () => {
//             const id = parseInt(card.dataset.id)
//             const playlistMatch = playlists.find( item => item.playlistId === id)
//             modalFill(playlistMatch)
//             modal.classList.add('show')
//         })
//     })
//     modal.addEventListener('click', (e) => {
//         if ( e.target === modal){
//             modal.classList.remove('show')
//         }
//     })
// }
    // console.log(playlist)
    // // playlists.forEach((playlist) => {
    // //     if (card.index === playlist.index) {
    // const modal = document.getElementsByClassName('.modal')
    // document.getElementById('playlistImage').src = playlist.playlistImage;
    // document.getElementById('playlistName').textContent = playlist.playlist_name;
    // document.getElementById('playlistCreator').textContent = `Creator: ${playlist.playlistCreator}`;

    // const songList = document.querySelector('.songs');
    // songList.innerHTML = '';

    // playlist.playlistSongs.forEach((song) => {
    //     const songItem = document.createElement("div");

function modalFill(data) {
    const modalContent = document.querySelector('.modalContent')
    modalContent.innerHTML = `

        
        <button class="shuffle" data-id="${data.playlistId}> Shuffle </button>

        `

    const shuffle = modalContent.querySelector(".shuffle")
    // shuffle.addEventListener("click", () => {
    //     const playlist = playlists.find(p => p.playlistId === data.playlistId);
    //     if (!playlist) return;

    //     for (let i = playlist.playlistSongs.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [playlist.playlistSongs[i], playlist.playlistSongs[j]] = [playlist.playlistSongs[j], playlist.playlistSongs[i]];
    //     }
    //     const songSection = modalContent.querySelector(".songs");
    //     songSection.innerHTML = renderSongs(playlist.playlistSongs);egtnctfbkcgdlekgtvnnhlckliuniunkfgijjnllvndbgjfvljbntvvkvlvgndfffivigettjkecnbueeiurffdfrijbrngh
    // })

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
    // <section class="songs">
        // <section class="modal-header">
        //     <img id="playlistImage" src="${data.playlistImage}" alt="Playlist Cover" width="200px">
        //     <article class="playlist_details">
        //         <h2 id="playlistName">${data.playlistTitle}</h2>
        //         <p id="playlistCreator">${data.playlistCreator}</p>
        //     </article>

    //     <section class="songs">
    //         ${renderSongs(data.playlistSongs)}
    //     </section>
    // `;
        // </section>
    // songItem.innerHTML = `
    //     <div class="song">
    //         <div class='song-image'>
    //             <img src="${songImage}" alt="song" width="25px">
    //         </div>
    //         <div class="song-description">
    //             <h4 id="songName">${songTitle}</h4>
    //             <p id="songArtist">${songArtist}</p>
    //             <p id="albumName">${songAlbum}</p>
    //         </div>

    //         <div id="songDuration">
    //             <p>${songDuration}
    //         </div>
    //     </div>
    //     `
    //         songList.appendChild(songItem)
    //     }
    // modal.style.display = "block"

    // modal.addEventListener('click', (e) => {
    //     if ( e.target === modal){
    //         modal.classList.remove('show')
    //     }
    // })

    // card.addEventListener('click', () =>{
    //     modal.classList.add('show')
    // })


// card.addEventListener('click', () =>{
//         openModel()


// modal.addEventListener('click', (e) => {
//     if ( e.target === modal){
//         modal.classList.remove('show')
//     }
// })