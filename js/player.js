const player = document.querySelector("#video");
const playBtn = document.querySelector(".player__play");
const playback = document.querySelector(".player__playback");
const playbackButton = document.querySelector("#playback-button");
const volume = document.querySelector(".player__volume");
const volumeButton = document.querySelector("#volume-button");


playBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
});

player.addEventListener('timeupdate', () => {
    let playProgress = player.currentTime / player.duration * 100;
    playbackButton.style.left = playProgress + "%";

});

playback.addEventListener('click', (e) => {
    let posPercent = e.layerX / playback.clientWidth * 100

    playbackButton.style.left = posPercent + "%";
    player.currentTime = posPercent * player.duration / 100;
});

volume.addEventListener('click', (e) => {
    let posPercent = e.layerX / volume.clientWidth * 100

    volumeButton.style.left = posPercent + "%";
    player.volume = posPercent / 100;
});

player.addEventListener('play', () => {
    player.volume = 0;
});

