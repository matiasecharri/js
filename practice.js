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

console.log(matiasEcharri.colorDePiel)

//1) Crear una variable de cada tipo de dato primitivo

//2) Crear una constante (que tenga sentido)

//3) Crear 2 objetos

//4) Crear 2 arrays

//5)Crear un Objeto que tenga una propiedad de cada tipo de dato primitivo, ademas
//debe contener otro objeto y ese objeto que contiene debe tener por lo menos 3 propiedades
// y una de esas propiedades debe ser un array
//Ademas quiero que accedas y se muestre por consola la posicion 0 del array que se encuentra dentro del
//objeto dentro del objeto.

// Puntos extra: Que el objeto anterior tenga tambien como propiedad la constante
// que hayas creado al principio y hacer un console.log de algun typeof

