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
      container.innerHTML = `<img data-aos="fade-up" data-aos-duration="400" src="assets/v1.gif" alt="" />`;
      document.title = "visualizer_01";
      imageCounter = 2;
    } else if (imageCounter === 2) {
      container.classList.add("megastyled");
      container.innerHTML = `<img src="assets/v7.gif" alt="" />`;
      document.title = "visualizer_02";
      imageCounter = 3;
    } else if (imageCounter === 3) {
      container.classList.add("megastyled");
      container.innerHTML = `<img src="assets/v3.gif" alt="" />`;
      document.title = "the_violet_color";
      imageCounter = 4;
    } else if (imageCounter === 4) {
      container.classList.add("megastyled");
      container.innerHTML = `<img src="assets/v4.gif" alt="" />`;
      document.title = "visualizer_03";
      imageCounter = 5;
    } else if (imageCounter === 5) {
      container.classList.add("megastyled");
      container.innerHTML = `<img src="assets/v7.gif" "alt="" />`;
      document.title = "visualizer_04";
      imageCounter = 6;
    } else if (imageCounter === 6) {
      container.classList.add("megastyled");
      container.innerHTML = `<img src="assets/v10.webp" alt="" />`;
      document.title = "visualizer_01";
      imageCounter = 2;
    }
  }

  function resetPlayer() {
    container.classList.remove("megastyled");
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
  let buttonContainer = document.getElementById("buttonContainerX")
  let themeSwitcher = false;

  const currentHour = new Date().getHours();
  const isNightTime = currentHour >= 18 || currentHour < 6;

  function enableDarkMode() {
    container.classList.add("batmanMode");
    previousB.classList.add("lighter");
    playB.classList.add("lighter");
    nextB.classList.add("lighter");
    playPauseB.classList.add("lighter");
    playerBar.classList.add("lighter2");
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
    buttonContainer.classList.remove("lightercontainer");
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

  // Agregar estilos de hover para el botón de reproducción en modo nocturno
}

// Llamada a las funciones
buttonPlayer();
comeBackTitleChanger();
nightDayMode();
