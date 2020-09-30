(function () {
    const playerContainer = document.querySelector(".player__video-block")
    const player = document.querySelector("#video");
    const playerPoster = document.querySelector(".player__poster");
    const playBtn = document.querySelector(".player__play");
    const playback = document.querySelector(".player__playback");
    const playbackButton = document.querySelector("#playback-button");
    const volume = document.querySelector(".player__volume");
    const volumeButton = document.querySelector("#volume-button");
    const playbackProgress = document.querySelector("#playback-range");
    const volumeCurrent = document.querySelector("#volume-range");

    const playerPlay = () => {
        if (player.paused) {
            playerContainer.classList.remove('paused');
            player.play();
        } else {
            player.pause();
            playerContainer.classList.add('paused')
        }
    }

    playerPoster.addEventListener('click', () => {
        playerPlay();
    })

    player.addEventListener('click', () => {
        playerPlay();
    });

    playBtn.addEventListener('click', (e) => {
        e.preventDefault();

        playerPlay();
    });

    player.addEventListener('timeupdate', () => {
        let playProgress = player.currentTime / player.duration * 100;
        let left = 100 - playProgress;
        playbackButton.style.left = playProgress + "%";
        playbackProgress.style.right = left + "%";

    });

    playback.addEventListener('click', (e) => {
        let posPercent = e.layerX / playback.clientWidth * 100

        playbackButton.style.left = posPercent + "%";
        player.currentTime = posPercent * player.duration / 100;
    });

    volume.addEventListener('click', (e) => {
        let posPercent = e.layerX / volume.clientWidth * 100
        let left = 100 - posPercent;

        player.muted = false;
        volumeButton.style.left = posPercent + "%";
        player.volume = posPercent / 100;
        volumeCurrent.style.right = left + "%";
    });

})()
