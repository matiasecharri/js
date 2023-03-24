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

let matiasEcharri = { //Objeto matiasEcharri
  edad: 24,
  nacionalidad: "Argentino",
  colorDePiel: "Blanquito",
  estudia: true,
  comioHoy: undefined,
  mascota: { //Tenemos otro objeto llamado mascota
    nombre: "Conchito",
    especie: "gato",
    edad: 5,
    colores: ["blanco", "negro", "marron"], //Dentro del objeto mascota un array
  },
  cajonDeFrutas: frutas, //Ademas una propiedad que hace referencia a la variable frutas
 
};

