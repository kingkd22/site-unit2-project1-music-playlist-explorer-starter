document.addEventListener("DOMContentLoaded", () => {

    function getRandomFeature(playlists) {
        console.log(playlists)
        const keys = Object.keys(playlists);
        console.log(keys)
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        console.log(randomKey)
        const random = playlists[randomKey]
        console.log(random)

        featured = document.querySelector(".featuredPlaylist")
        featured.innerHTML = ''

        featured.innerHTML += `
        <article class="featured" data-id="${random.playlistId}">
            <div class="featuredImg" data-id=${random.playlistId}>
                <img src="${random.playlistImage}" alt="playlist">
            </div>
            <h3 class="featuredTitle">${random.playlistTitle}</h3>
            <p class="featuredName">${random.playlistCreator}</p>
            <button class="likes" data-id="${random.playlistId}"><i class="fas fa-heart"></i><span class="like-count">${random.playlistLikeCount}</span></button>
        </article>`
        console.log("Random:", random.playlistSongs);
        if (random.playlistSongs && Array.isArray(random.playlistSongs)) {
            featured.innerHTML += `
            <article class="featuredSongs">
                ${renderSongs(random.playlistSongs)}
            </article>`
        }

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
    
    }
    getRandomFeature(playlists)
})
    
    
    // }
    // const randomPlaylist = getRandomFeature(playlists)

    
//     featured = document.querySelector(".featuredPlaylist")
//     featured.innerHTML = ''

//     featured.innerHTML += `
//     <article class="featured" data-id="${randomPlaylist.playlistId}">
//         <div class="featuredImg" data-id=${randomPlaylist.playlistId}>
//             <img src="${randomPlaylist.playlistImage}" alt="playlist" width="100%">
//         </div>
//         <h3 class="featuredTitle">${randomPlaylist.playlistTitle}</h3>
//         <p class="featuredName">${randomPlaylist.playlistCreator}</p>
//         <button class="likes" data-id="${randomPlaylist.playlistId}"><i class="fas fa-heart"></i><span class="like-count">${randomPlaylist.playlistLikeCount}</span></button>
//     </article>`
//     console.log("Random:", randomPlaylist);
//     if (randomPlaylist.playlistSongs && Array.isArray(randomPlaylist.playlistSongs)) {
//         featured.innerHTML += `
//         <article class="featuredSongs">
//             ${renderSongs(randomPlaylist.playlistSongs)}
//         </article>`
//     }
    
// })


function renderSongs(songs) {
    return songs.map (song => `
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