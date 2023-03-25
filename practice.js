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

let elNuevo = [
  {
    nombre: "El Nuevo",
    photo:
      "https://media.discordapp.net/attachments/763661782555426817/1088971818255274084/thenewone.png?width=466&height=468",
    edad: 24,
    tomaBatidos: true,
    trabajoHoy: null,
    trabajaraElLunes: undefined,
    gustos: {
      celular: "Iphone 14",
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
  },
];

function printer(objeto) {
  let main = document.getElementById("main1");
  main.innerHTML = "";
  objeto.forEach((x) => {
    main.innerHTML += `
    <div class="card">
    <div class="part1">
        <img src="${x.photo}" alt="" srcset="">
    </div>    
    <div class="part2">
    <h3>Info:</h3>
    <ul>Name: ${x.nombre}</ul>
    <ul>Age: ${x.edad}</ul>
    <h3>Items:</h3>
    <ul>Phone:${x.gustos.celular}  </ul>
    <ul>Glasses:${x.gustos.lentes}</ul>
    <ul>Drinks: ${x.gustos.batidosFavoritos}</ul>
    <h3>Knowledge</h3>
    <ul>${x.conocimientos.frontEnd.html}</ul>
    <ul>${x.conocimientos.frontEnd.css}</ul>
    <ul>${x.conocimientos.frontEnd.javascript}</ul>
    <ul>${x.conocimientos.backend}</ul>
    </div>
  </div>`;
  });
}

printer(elNuevo);

// Puntos extra: Que el objeto anterior tenga tambien como propiedad la constante
// que hayas creado al principio y hacer un console.log de algun typeof
