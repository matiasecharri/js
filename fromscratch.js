//ALERT, JUST DELETE  THIS FUNCTION WHEN YOU ADD NEW SONGS
function comingSoon() {
  let previousB = document.getElementById("previousButton");
  let nextB = document.getElementById("nextButton");
  previousB.addEventListener("click", (x) => {
    let timerInterval;
    Swal.fire({
      title: "./visualizer01/in_progress",
      html: "I will close in <b></b> milliseconds.",
      timer: 2000,
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
        console.log("I was closed by the timer");
      }
    });
  });
  nextB.addEventListener("click", (x) => {
    let timerInterval;
    Swal.fire({
      title: "./visualizer01/in_progress",
      html: "I will close in <b></b> milliseconds.",
      timer: 2000,
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
        console.log("I was closed by the timer");
      }
    });
  });
}
comingSoon();
////////////////////////////////////////////////////

// 🫐🫧☂️💜⚛️ RANGE BAR PROGRESS
const audio = document.getElementById("myAudio");
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
      container.innerHTML = `<img data-aos="fade-up" data-aos-duration="400" src="assets/v5c.gif" alt="visualizer_01" loading="lazy"/> `;
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
