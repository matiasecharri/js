/* 🫐🫧☂️💜⚛️ BUTTON PLAYER */
function buttonPlayer() {
  let container = document.getElementById("main1");
  let playButton = document.getElementById("myAudio");
  let imageCounter = 1;
  container.innerHTML = `<p id="playToReco" class="colored">play to re-connect</p>
  <div class="loader"></div> `;
  playButton.addEventListener("play", (x) => {
    if (imageCounter === 1) {
      container.classList.add("megastyled");
      container.innerHTML = `<img data-aos="fade-up" data-aos-duration="400" src="assets/v1.gif" alt="" />`;
      document.title = "visualizer_01";
      imageCounter = 2;
    } else if (imageCounter === 2) {
      container.classList.add("megastyled");
      container.innerHTML = `<img src="assets/v5.gif" alt="" />`;
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
  });

  playButton.addEventListener("pause", (x) => {
    container.classList.remove("megastyled");
    container.innerHTML = `
    <p id="playToReco" class="colored">play to re-connect</p>
    <div class="loader"></div>
    `;
    document.title = "now_paused";
  });
}
buttonPlayer();

/* --------------------------------------------------------------------------------------- */

/* 🫐🫧☂️💜⚛️ TITLE CHANGER */
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
comeBackTitleChanger();

/* --------------------------------------------------------------------------------------- */

/* 🫐🫧☂️💜⚛️ NIGHT-DAY MODE*/
function nightDayMode() {
  let container = document.getElementById("main1");
  let buttonNight = document.getElementById("daynightmode");
  let previousB = document.getElementById("previousButton");
  let playB = document.getElementById("playButton");
  let nextB = document.getElementById("nextButton");
  let themeSwitcher = false;

  //Get the user actual HOUR
  const currentHour = new Date().getHours();

  //Set when is night and when is day
  const isNightTime = currentHour >= 18 || currentHour < 6;

  //Function to Apply the Dark Mode
  function enableDarkMode() {
    container.classList.add("batmanMode");
    previousB.classList.add("lighter");
    playB.classList.add("lighter");
    nextB.classList.add("lighter");
    themeSwitcher = true;
  }
  //Function to Apply the Light Mode
  function enableLightMode() {
    container.classList.remove("batmanMode");
    previousB.classList.remove("lighter");
    playB.classList.remove("lighter");
    nextB.classList.remove("lighter");
    themeSwitcher = false;
  }

  //Activating Dark or Light mode checking the user HOUR
  if (isNightTime) {
    enableDarkMode();
  } else {
    enableLightMode();
  }

  // Alternar entre los temas al hacer clic en el botón
  buttonNight.addEventListener("click", () => {
    if (themeSwitcher) {
      enableLightMode();
    } else {
      enableDarkMode();
    }
  });
}
nightDayMode();

/* --------------------------------------------------------------------------------------- */

/*Fibonacci
First two numbers are 0 and 1 then the others are calculated adding the previous ones
Ejemeplo 3+5 = 8, 5+8 = 13, 8+13= 21 */
function fibonacci(number) {
  const secuenceFib = [0, 1];
  for (let i = 2; i <= number; i++) {
    secuenceFib[i] = secuenceFib[i - 1] + secuenceFib[i - 2];
  }
  return secuenceFib[number];
}
console.log(fibonacci(7));

/* Modifying const properties because is COMPLEX DATA TYPE */
const fruits = ["apple", "pineapple", "orange"];
fruits.push("watermelon");
fruits[0] = "mango";
console.log(fruits);
/*End Class 4*/

/* .LENGTH 🉐*/
/* Property for counting characters */
let pepito = "caramelitotetete";
console.log(pepito.length);

/* .INCLUDES🉐*/
/* Method for asking if something has something inside*/
console.log(pepito.includes("caramel"));

/* .CONCAT🉐*/
/* Method for adding something or pasting something*/
let saborDelCaramelito = " de Maracuya";
console.log(pepito.concat(saborDelCaramelito));

/* .UPPERCASE .LOWERCASE🉐*/
/* Method for transforming font to Mayus or Minus*/
let lowerLetter = "iM WhiSpeRinG";
console.log(lowerLetter.toLowerCase());
let upperLetter = "im scrEaMing";
console.log(upperLetter.toUpperCase());

/* .SLICE🉐*/
/*Method used to extract a portion of a string and return a
 new string without modifying the original one*/
let message = "Hello chavaletes how you doing";
console.log(message.slice(1, 12));

/* .INDEXOF🉐*/
/* Find position of first character of a word in a String Chain*/
let chainOfWords = "Hi, this is a test, circus";
console.log(chainOfWords.indexOf("circus"));

/* .ENDSWITH .STARTSWITH🉐*/
/* Verify if a String Chain starts or ends with a specific chain*/
let testingMessage = "Today is Wednesday 31";
console.log(testingMessage.endsWith("31"));
console.log(testingMessage.startsWith("To"));

/* .REPLACE🉐*/
/* Search a STRING CHAIN and REPLACE IT with a NEW ONE */
let popis = "Hello, my big friend!";
console.log(popis.replace("my big friend!", "doctor curita"));

/* .TRIM🉐*/
/* Method for removing whitespace characters from both ends of a string*/
let trimedMessage = "   I have whitespace   ";
console.log(trimedMessage.trim());

/* .SPLIT🉐*/
/*Method for spliting a string into an array of substrings 
based on a specified separator */
let imGoingToSplitThis = "Are X you X winning X son?";
console.log(imGoingToSplitThis.split("X"));

/*End Class 5*/

/* .TOFIXED🉐*/
/* Metodo para redondear un numero*/
let b = 2.4546
console.log(b.toFixed(2))

/* .PARSEINT🉐*/
/* Devuelve un entero y TRANSFORMA STRING a NUMBER*/
let a = "2.4546"
console.log(parseInt(a))

/* .PARSEFLOAT()🉐*/
/* Devuelve un numero flotante y TRANSFORMA STRING a NUMBER*/
let d = "2.4546"
console.log(parseFloat(d))

/* .TOSTRING()🉐*/
/* Transforma un numero a string*/
let e = 85
console.log(e.toString())

/* .MATHRANDOM()🉐*/
/* Genera un número aleatorio entre 0,1*/
let x = Math.random();
console.log(x)

/*End Class 6*/


//FUNCTION DECLARADA 🉐// HABILITA EL DESORDEN YA QUE SE PUEDE EJECUTAR EN CUALQUIER LADO
function autoConRuedas() {
  console.log("LALALALALAL");
}

//FUNCION EXPRESADA O ANONIMA 🉐// EVITA EL DESORDEN YA QUE OBLIGA A EJECUTAR DESPUES DE DECLARAR
const autoSinRuedas = function () {
  console.log("LELELELELEL");
};

//FUNCION ARROW 🉐// EVITA EL DESORDEN YA QUE OBLIGA A EJECUTAR DESPUES DE DECLARAR, THIS ALLOWED
const autoEvolucionado = () => {
  console.log("LOLOLOLOL");
};
