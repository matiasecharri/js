//Variables, nos permiten almacenar contenido, podemos utilizar const o let
//segun lo que necesitemos, la diferencia es que LET es una VARIABLE que puede VARIAR
// y const en cambio se utilizar para cosas que no vayan a varias.

//Variable LET
let colorDePelo = "rubio";
colorDePelo = "castaño";

//Variable CONST
const dniMatias = 42364286;

///////////////////////////DATOS PRIMITIVOS

let gato = "COCHOTE"; // String
let edadDeGato = 5; //Number
let estaCastrado = true; //Boolean
let comioHoy = undefined; //Undefined
let nulo = null; //Null

///////////////////////ESTRUCTURAS BÁSICAS

//OBJETOS

let dibella = {
  edad: 22,
  nombre: "Diana",
  pala: false,
  dni: 43123312321,
  ocupacion: "Estudiante y Nuevo en progreso",
  frutas: ["manzana", "pera", "naranja", "banana"],
};

//ARRAYS

let frutas = ["manzana", "pera", "naranja", "banana"];

//PRACTICA:

let matiasEcharri = {
  //Objeto matiasEcharri
  edad: 24,
  nacionalidad: "Argentino",
  colorDePiel: "Blanquito",
  estudia: true,
  comioHoy: undefined,
  mascota: {
    //Tenemos otro objeto llamado mascota
    nombre: "Conchito",
    especie: "gato",
    edad: 5,
    colores: ["blanco", "negro", "marron"], //Dentro del objeto mascota un array
  },
  cajonDeFrutas: frutas, //Ademas una propiedad que hace referencia a la variable frutas
};

/////////////////////////////HOMEWORK

//1) Crear una variable de cada tipo de dato primitivo
let palabra = "Hola";
let numero = 2;
let booleano2 = true;
let $undefined = undefined;
let $null = null;
//2) Crear una constante (que tenga sentido)
const fechaDeNacimiento = 1998;
//3) Crear 2 objetos
let pirate = {
  colorDePelo: "marron",
  edad: 62,
  twoHands: false,
};

let hulk = {
  colorDePiel: "verde",
  edad: 40,
  twoHands: true,
  isHeAngry: undefined,
};
//4) Crear 2 arrays
let hulkAndPirate = ["hulk", "pirate"];
let pirateAndHulk = [pirate, hulk];

//5)Crear un Objeto que tenga una propiedad de cada tipo de dato primitivo, ademas
//debe contener otro objeto y ese objeto que contiene debe tener por lo menos 3 propiedades
// y una de esas propiedades debe ser un array
//Ademas quiero que accedas y se muestre por consola la posicion 0 del array que se encuentra dentro del
//objeto dentro del objeto.

let elNuevo = {
  nombre: "El Nuevo",
  edad: 24,
  tomaBatidos: true,
  trabajoHoy: null,
  trabajaraElLunes: undefined,
  gustos: {
    celular: "Iphone",
    lentes: "Vogue",
    batidosFavoritos: [
      "Proteina",
      "Proteina y Chocolate",
      "Proteina y Vainilla",
    ],
  },
  conocimientos: {
    frontEnd: {
      html: "HTML5",
      css: ["CSS3", "Tailwind", "Boostrap", "MaterialUI"],
      javascript: ["Javascript Vanilla", "Typescript", "ReactJS"],
    },
    backend: ["NodeJS", "Postman", ["MongoDB", "Mongoose"], "ExpressJS"],
  },
  nacidoEn: fechaDeNacimiento,
};

////////////////////////OPERADORES////////////////////////////////////////////

//ASIGNACION:
let igual = "algo";
//Existen 3 tipos de iguales =, ==, ===

//ARITMÉTICOS:
// + - * / %
let suma = 5 + 5;
let resta = 10 - 5;
let multiplicacion = 4 * 2;
let division = 8 / 2;
let resto = 10 % 2;

//DE COMPARACION:
//Devuelven booleanos
// > < >= <= != !== == ===
let comparacion = 32 >= 32;
let comparacion2 = 50 <= 5;
let comparacionNoEstricta = 50 == "50"; //No estricto
let comparactionEstrica = 50 === "50"; //Estricto
let loContrario = 200 != "200"; //No estricto
let loContrarioEstricto = 200 !== "200"; //Estricto

//LOGICOS:
// || && !
// PARA QUE SEA TRUE TODO TIENE QUE SER TRUE
let comparacionLogicaConI = 100 > 0 && 0 > 4;

// PARA QUE SEA TRUE ALGO TIENE QUE SER TRUE
let comparacionConOr = 5 != 5 || 10 > 4;

//CONDICIONALES: if = SI // else if = SINO, SI // else = SINO

// IF me pisa un auto voy a ir al hospital, ELSE IF me pisa un camion voy a
//quedar hecho bosta, ELSE buenisimo no me pasa nada!!!

let mePisa = "auto";

if (mePisa === "auto") {
  console.log("Voy a ir al hospital");
} else if (mePisa === "camion") {
  console.log("Me hicieron bosta");
} else if (mePisa === "motoneta") {
  console.log("Bueno tampoco duele tanto jejeje");
} else if (
  mePisa === "lancha" ||
  mePisa === "helicoptero" ||
  mePisa === "avion"
) {
  console.log("Como diablos paso eso?");
} else if (mePisa === "vaca" || mePisa === "vaquita") {
  console.log("Sabíamos que este terrorifico día llegaría");
} else {
  console.log("Bueno creo que voy a estar bien");
}

//Si tengo 18 años o más puedo entrar al recital de YSY A a que me diga que me ayude solo
//Si tengo menos de 18 años no puedo entrar y tengo que esperar para ayudarme
//Si tengo +40 años no puedo entrar porque no pueden ayudarme a volar

let edad = prompt("Ingresa tu edad a ver si podés volar ✈️");

if (edad >= 18 && edad <= 39) {
  console.log("Entrán al recital pero ayudense entre ustedes ✈️");
} else if (edad < 18 && edad >= 0){
  console.log("No puedes disfrutar la experiencia YSY A, eres muy chico YEYE")
} else if (edad >= 40 && edad <= 120){
  console.log("No puedes entrar porque no pueden ayudarme a volar yeyeye")
} else {
  console.log("Ingresá una edad válida")
}
//Sunday Wordpress, overdue task

let age = prompt ("Please tell US your Age :)")
if(age >= 18 <= 45){
  console.log (`Your current age is ${age}, congrats! access conceded` )
}