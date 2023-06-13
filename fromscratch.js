const songs = [
  {
    title: "the_violet_color",
    src: "assets/songs/the_violet_color_tory_lanes.mp3",
    artist: "tory_lanez",
  },
  {
    title: "is_there_someone_else",
    src: "assets/songs/is_there_someone_else.mp3",
    artist: "the_weeknd",
  },
  {
    title: "chippin_in",
    src: "assets/songs/chippin_in_samurai.mp3",
    artist: "samurai",
  },
];

let imageCounter = 2;
function changeImage22() {
  let container = document.getElementById("main1");
  if (imageCounter === 1) {
    container.classList.add("megastyled");
    container.innerHTML = `hallo`;
    document.title = "visualizer_01";
    imageCounter = 2;
  } else if (imageCounter === 2) {
    container.classList.add("megastyled");
    container.innerHTML = `<img src="assets/v5c.gif" alt="visualizer_02" loading="lazy"/>`;
    document.title = "visualizer_02";
    imageCounter = 3;
  } else if (imageCounter === 3) {
    container.classList.add("megastyled");
    container.innerHTML = `<img src="assets/v3c.gif" alt="the_violet_color" loading="lazy"/>`;
    document.title = "the_violet_color";
    imageCounter = 4;
  } else if (imageCounter === 4) {
    container.classList.add("megastyled");
    container.innerHTML = `<img src="assets/v4c.gif" alt="visualizer_03" style="object-fit: cover; object-position: 52%;" loading="lazy"/>`;
    document.title = "visualizer_03";
    imageCounter = 5;
  } else if (imageCounter === 5) {
    container.classList.add("megastyled");
    container.innerHTML = `<img src="assets/v5c.gif" "alt="visualizer_04" loading="lazy"/>`;
    document.title = "visualizer_04";
    imageCounter = 6;
  } else if (imageCounter === 6) {
    container.classList.add("megastyled");
    container.innerHTML = `<img src="assets/v6c.gif" alt="visualizer_05" style="object-fit: cover; object-position: 75%;" loading="lazy"/>`;
    document.title = "visualizer_05";
    imageCounter = 2;
  }
}

const audio = document.getElementById("myAudio");
audio.src = songs[0].src;
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("myAudio");
  audio.src = songs[0].src;
});


function updateNowPlaying() {
  let container = document.getElementById("main1");
  console.log(currentSong);
  if (currentSong === "chippin_in") {
    if (audio.paused) {
      container.innerHTML = `
        <p id="playToReco" class="colored">play to re-connect</p>
        <div class="loader"></div>
      `;
      document.title = "now_paused";
    } else {
      container.innerHTML = `<img src="assets/v8c.gif" alt="visualizer_05" loading="lazy"/>`;
      document.title = "visualizer_05";
      imageCounter = 5;
    }
  }
}


audio.addEventListener("play", updateNowPlaying);
audio.addEventListener("pause", updateNowPlaying);


//ALERT, JUST DELETE  THIS FUNCTION WHEN YOU ADD NEW SONGS
let currentSong = null; // Variable global para almacenar el título de la canción actual

function comingSoon() {
  let previousB = document.getElementById("previousButton");
  let nextB = document.getElementById("nextButton");
  let currentSongIndex = 0;

  previousB.addEventListener("click", () => {
    currentSongIndex++; // Incrementar el índice de la canción actual
    if (currentSongIndex >= songs.length) {
      currentSongIndex = 0;
      // Volver al inicio de la lista
    }

    const nextSong = songs[currentSongIndex];
    currentSong = nextSong.title; // Actualizar la variable global con el título de la canción
    audio.src = nextSong.src; // Actualizar la fuente del elemento de audio con la nueva canción
    audio.play(); // Reproducir la nueva canción

    changeImage22(); // Cambiar la imagen

    let timerInterval;
    Swal.fire({
      title: `${nextSong.title.toUpperCase()}()`,
      html: "closing in <b></b> milliseconds",
      timer: 1300,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("coded and designed - @matiasecharri_");
      }
    });
  });

  nextB.addEventListener("click", () => {
    currentSongIndex++; // Incrementar el índice de la canción actual
    if (currentSongIndex >= songs.length) {
      currentSongIndex = 0;
      // Volver al inicio de la lista
    }

    const nextSong = songs[currentSongIndex];
    currentSong = nextSong.title; // Actualizar la variable global con el título de la canción
    audio.src = nextSong.src; // Actualizar la fuente del elemento de audio con la nueva canción
    audio.play(); // Reproducir la nueva canción

    changeImage22(); // Cambiar la imagen

    let timerInterval;
    Swal.fire({
      title: `${nextSong.title.toUpperCase()}()`,
      html: "closing in <b></b> milliseconds",
      timer: 1300,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("coded and designed - @matiasecharri_");
      }
    });
  });
}

comingSoon();
////////////////////////////////////////////////////

// 🫐🫧☂️💜⚛️ RANGE BAR PROGRESS

const progressBar = document.getElementById("progressBar");
const volumeBar = document.getElementById("volumeBar");

function updateProgressBar() {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
}

function updateVolume() {
  const volume = volumeBar.value / 100;
  audio.volume = volume;
  // console.log(volume)
}

audio.addEventListener("timeupdate", updateProgressBar);
volumeBar.addEventListener("input", updateVolume);

// 🫐🫧☂️💜⚛️ BUTTON PLAYER
function buttonPlayer() {
  let container = document.getElementById("main1");
  let playButton = document.getElementById("playButton");
  let imageCounter = 2;
  container.innerHTML = `<p id="playToReco" class="colored">play to re-connect</p>
  <div class="loader"></div> `;

  function changeImage() {
    if (imageCounter === 1) {
      container.classList.add("megastyled");
      container.innerHTML = `hallo`;
      document.title = "visualizer_01";
      imageCounter = 2;
    } else if (imageCounter === 2) {
      container.classList.add("megastyled");
      container.innerHTML = `<img src="assets/v7c.gif" alt="visualizer_02" loading="lazy"/>`;
      document.title = "visualizer_02";
      imageCounter = 3;
    } else if (imageCounter === 3) {
      container.classList.add("megastyled");
      container.innerHTML = `<img src="assets/v3c.gif" alt="the_violet_color" loading="lazy"/>`;
      document.title = "the_violet_color";
      imageCounter = 4;
    } else if (imageCounter === 4) {
      container.classList.add("megastyled");
      container.innerHTML = `<img src="assets/v4c.gif" alt="visualizer_03" style="object-fit: cover; object-position: 52%;" loading="lazy"/>`;
      document.title = "visualizer_03";
      imageCounter = 5;
    } else if (imageCounter === 5) {
      container.classList.add("megastyled");
      container.innerHTML = `<img src="assets/v5c.gif" "alt="visualizer_04" loading="lazy"/>`;
      document.title = "visualizer_04";
      imageCounter = 6;
    } else if (imageCounter === 6) {
      container.classList.add("megastyled");
      container.innerHTML = `<img src="assets/v6c.gif" alt="visualizer_05" style="object-fit: cover; object-position: 75%;" loading="lazy"/>`;
      document.title = "visualizer_05";
      imageCounter = 2;
    }
  }

  function resetPlayer() {
    container.classList.remove("megastyled");
    container.style.transition = "0s";
    container.innerHTML = `
    <p id="playToReco" class="colored">play to re-connect</p>
    <div class="loader"></div>
    `;
    document.title = "now_paused";
  }

  playButton.addEventListener("click", () => {
    let audio = document.getElementById("myAudio");
    if (audio.paused) {
      audio.play();
      changeImage();
    } else {
      audio.pause();
      resetPlayer();
    }
  });
}

// 🫐🫧☂️💜⚛️ TITLE CHANGER
function comeBackTitleChanger() {
  let previousTitle = document.title;
  window.addEventListener("blur", () => {
    previousTitle = document.title;
    document.title = "is_there_someone_else?";
  });
  window.addEventListener("focus", () => {
    document.title = previousTitle;
  });
}

// 🫐🫧☂️💜⚛️ NIGHT-DAY MODE
function nightDayMode() {
  let container = document.getElementById("main1");
  let buttonNight = document.getElementById("daynightmode");
  let previousB = document.getElementById("previousButton");
  let playB = document.getElementById("themeButton");
  let nextB = document.getElementById("nextButton");
  let playPauseB = document.getElementById("playButton");
  let playerBar = document.getElementById("progressBar");
  let volumeBar = document.getElementById("volumeBar");
  let buttonContainer = document.getElementById("buttonContainerX");
  let themeSwitcher = false;

  const currentHour = new Date().getHours();
  const isNightTime = currentHour >= 18 || currentHour < 6;

  function enableDarkMode() {
    container.classList.add("batmanMode");
    container.style.transition = "0.5s";
    previousB.classList.add("lighter");
    playB.classList.add("lighter");
    nextB.classList.add("lighter");
    playPauseB.classList.add("lighter");
    playerBar.classList.add("lighter2");
    volumeBar.classList.add("lighter2");
    buttonContainer.classList.add("lightercontainer");

    themeSwitcher = true;
  }

  function enableLightMode() {
    container.classList.remove("batmanMode");
    previousB.classList.remove("lighter");
    playB.classList.remove("lighter");
    nextB.classList.remove("lighter");
    playPauseB.classList.remove("lighter");
    playerBar.classList.remove("lighter2");
    volumeBar.classList.remove("lighter2");
    buttonContainer.classList.remove("lightercontainer");
    container.style.transition = "0.5s";
    themeSwitcher = false;
  }

  if (isNightTime) {
    enableDarkMode();
  } else {
    enableLightMode();
  }

  buttonNight.addEventListener("click", () => {
    if (themeSwitcher) {
      enableLightMode();
    } else {
      enableDarkMode();
    }
  });
}

// DRAGGABLE PROGRESS BAR
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("myAudio");
  const progressBar = document.getElementById("progressBar");

  function updatePlaybackPosition() {
    const progress = progressBar.value;
    const duration = audio.duration;
    const newPosition = (progress / 100) * duration;
    audio.currentTime = newPosition;
  }

  progressBar.addEventListener("input", updatePlaybackPosition);
});

//FUNCTION CALL
buttonPlayer();
comeBackTitleChanger();
nightDayMode();
