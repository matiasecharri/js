/* Ejercicio 2  */

/* function filterBeers(beers, alcohol) {
  let newBeers = [];

  for (const beer of beers) {
    if (beer.abv < alcohol) {
      let newBeer = {};
      newBeer.name = beer.name;
      newBeer.ibu = beer.ibu;
      newBeer.abv = beer.abv;
      newBeers.push(newBeer);
    }
  }

  return newBeers;
}

console.log(filterBeers(beers, 5)); */

/* ejercicio 2 */

// function filterParam(beers) {
//   let beersNew = [];
//   for (const beer of beers) {
//     let beerNew = {};
//     beerNew.name = beer.name;
//     beerNew.abv = beer.abv;
//     beerNew.ibu = beer.ibu;
//     beersNew.push(beerNew);
//   }
//   return beersNew;
// }

// let beersNew = filterParam(beers);

/*/ beerNew es mi nuevo array de cervezas para que no se me haga tan largo cuando lo veo en la consola /*/

/*/ Ejercicio 3 /*/

/* function alcoholics(array) {
  let beersAlc = array;

  beersAlc.sort((a, b) => {
    if (a.abv > b.abv) {
      return 1;
    }

    if (a.abv < b.abv) {
      return -1;
    }
    if (a.abv === b.abv) {
      return 0;
    }
  });

  beersAlc.length === 10;
  return beersAlc;
}

console.log(alcoholics(beersNew)); */

/* function moreAlcoholics(beers) {
  let moreAlc = [];

  for (const beer of beers) {
    if (beer.abv > 7.3) {
      let beerNew = {};
      beerNew.name = beer.name;
      beerNew.abv = beer.abv;
      beerNew.ibu = beer.ibu;
      moreAlc.push(beerNew);
    }
  }

  return moreAlc;
}

console.log(moreAlcoholics(beers)); */

/*/ Ejercicio 4 /*/

/* function amargas(array) {
  let beersAmargor = array;

  beersAmargor.sort((a, b) => {
    if (a.ibu > b.ibu) {
      return 1;
    }

    if (a.ibu < b.ibu) {
      return -1;
    }
    if (a.ibu === b.ibu) {
      return 0;
    }
  });

  return beersAmargor;
}

console.log(amargas(beersNew)); */

/*/ ejercicio 4 /*/

/* function moreAmarg(beers) {
  let moreAmarg = [];

  for (const beer of beers) {
    if (beer.ibu < 41.6) {
      let beerNew = {};
      beerNew.name = beer.name;
      beerNew.abv = beer.abv;
      beerNew.ibu = beer.ibu;
      moreAmarg.push(beerNew);
    }
  }

  return moreAmarg;
}

console.log(moreAmarg(beers)); */

/*/ 5) Generar una función que reciba como parámetro un array de cervezas
un nombre de propiedad y un valor booleano. Debe devolver un nuevo array
con 10 cervezas ordenadas por la propiedad ingresada como segundo argumento
de manera ascendente si el tercero es true o descendente si es false  /*/

/* function ejercicio(beers, propiedad, boolean) {
  if (boolean === true) {
    let ascendente = beers;

    ascendente.sort((a, b) => {
      if (a.propiedad > b.propiedad) {
        return 1;
      }

      if (a.propiedad < b.propiedad) {
        return -1;
      }
      if (a.propiedad === b.propiedad) {
        return 0;
      }
    });

    return ascendente;
  } else {
    let descendente = beers;

    descendente.reverse((a, b) => {
      if (a.propiedad > b.propiedad) {
        return 1;
      }

      if (a.propiedad < b.propiedad) {
        return -1;
      }
      if (a.propiedad === b.propiedad) {
        return 0;
      }
    });

    return descendente;
  }
}

console.log(ejercicio(beersNew, "ibu", false)); */

// function ejer2 (beers,percentage){
//   let nuevasCervezas = beers.filter((objeto) => {if (objeto.abv < percentage)
//   {return objeto}
//   });
//   return nuevasCervezas;
// }

// let filterBeers = ejer2(beers, 4.5)
// console.log(filterBeers

///2///////////////////////////FILTER+MAP//////////////////
// 2) Generar una funcion que reciba como parametro el array de cervezas y
// un valor de alcohol (numero). La funcion debe devolver un nuevo array con
// las cervezas que no excedan el nivel etílico. Cada elemento del nuevo array
// debe ser un objeto que tenga sólo las propiedades name, (alcohol) abv y ("amargor") ibu
// para las 12:15 tiramos ruleta a ver hasta donde llegaron

// function filtrarPorAlcohol(beers, alcohol) {
//   let cervezasFiltradas = beers.filter(function (beer) {
//     return beer.abv <= alcohol;
//   });

//   let cervezasMap = cervezasFiltradas.map(function (beerMap) {
//     let aux = {
//       nombre: beerMap.name,
//       abv: beerMap.abv,
//       ibu: beerMap.ibu,
//     };
//    return aux
//   });

//   return cervezasMap;
// }

// //3//////////////////////////SORT//////////////////////////
// // 3) Generar una función que reciba como parámetro un array de cervezas
// // y devuelva un nuevo array con las 10 cervezas más alcohólicas

// function masAlcoholicas(beers){
//   let ordenado = [...beers].sort((a,b) => b.abv - a["abv"]).slice(0,10)
// return ordenado
// }

// //console.log
// masAlcoholicas(beers)

///4//////////////////////////////////////////SORT
// 4) Generar una función que reciba como parámetro un array
// de cervezas y devuelva un nuevo array con las 10 cervezas menos amargas

// function menosAlcoholicas(beers){
// let aux = beers.filter(beer=> beer.ibu)
// return aux.sort ((a,b) => a ["ibu"] - b["ibu"]).slice(0,10)
// }

// // console.table
// menosAlcoholicas(beers)

///5/////////////////////////////////////////
// 5) Generar una función que reciba como parámetro un array de cervezas
// un nombre de propiedad y un valor booleano. Debe devolver un nuevo array
// con 10 cervezas ordenadas por la propiedad ingresada como segundo argumento
// de manera ascendente si el tercero es true o descendente si es false

/////////FUNCIONES (BIEN DESDE EL PRINCIPIO) /////

function saludar() {
  console.log("hola");
}
saludar(); //importante inicializar para que haga algo

// //se puede hacer que una variable sea igual a una funcion o colocar una funcion dentr ode una varible
let cualquierCosa = saludar();

//se puede colocar una funcion sin nombre dentro de una  variable
let saludando = function () {
  console.log("Hola desde LET");
};

saludando();

//Se pueden asignar parametros a una funcion

function saludarPibe(nombre1, nombre2, nombre3, nombre4) {
  console.log(nombre1, nombre2, nombre3, nombre4);
  console.log("Buenas noches " + nombre4);
}

saludarPibe("Santiago", "Matias", "Ezequiel", "The King Calvi");
saludarPibe("Eduardo", "El gordo george"); //Podemos poner la misma funcion las veces que queramos con distintos parametros

function sumandoAndo(numero1, numero2) {
  console.log(numero1 + numero2 * 10);
}

sumandoAndo("La suma de estos numeros da:", 2, 1);

//Las variables dentro de una funcion SOLO existen DENTRO DE LA FUNCION
function restando(num8, num9) {
  return num8 - num9;
}

let cacona = restando(80, 20);
console.log(cacona);

let alumnes = [
  { nombre: "Santiago", edad: 19, genero: "masculino" },

  { nombre: "Matias", edad: 23, genero: "masculino" },

  { nombre: "Ezequiel", edad: 25, genero: "masculino" },

  { nombre: "Camila", edad: 40, genero: "femenino" },

  { nombre: "Eduarda", edad: 8, genero: "femenino" },
];

function filtrarAlumnos(arreglo, genero) {
  let arrayVacio = [];
  for (let i of arreglo) {
    if (i.genero === genero) {
      arrayVacio.push(i);
    }
  }
  return arrayVacio;
}

let alumnosFemeninos = filtrarAlumnos(alumnes, "femenino");
let alumnosMasculino = filtrarAlumnos(alumnes, "masculino");

console.log(alumnosMasculino);
console.log(alumnosFemeninos);

let personajes = [
  { nombre: "Eduardo", edad: 58, genero: "indefinido" },

  { nombre: "Carlos", edad: 25, genero: "masculino" },

  { nombre: "Roberto", edad: 27, genero: "masculino" },

  { nombre: "Adriana", edad: 40, genero: "indefinido" },

  { nombre: "Miguel", edad: 89, genero: "masculino" },
];

function filtrarPersonajes(array, edad, genero) {
  let arregloVacio = [];
  for (i of array) {
    if (i.edad >= edad && i.genero === genero) {
      arregloVacio.push(i);
    }
  }
  return arregloVacio;
}

let personajesViejos = filtrarPersonajes(personajes, 40, "indefinido");
console.log(personajesViejos);

let perros = [
  { raza: "husky", nombre: "adolfo", edad: 5, genero: "m" },
  { raza: "siberiano", nombre: "miriam", edad: 7, genero: "h" },
  { raza: "golden", nombre: "stuart", edad: 2, genero: "m" },
  { raza: "caniche", nombre: "edgardito", edad: 5, genero: "m" },
  { raza: "perro", nombre: "jonas", edad: 5, genero: "m" },
  { raza: "siberiano", nombre: "miriam", edad: 7, genero: "h" },
  { raza: "dalmata", nombre: "Juana", edad: 2, genero: "h" },
  { raza: "labrador", nombre: "tota", edad: 7, genero: "h" },
  { raza: "husky", nombre: "adolfo", edad: 5, genero: "m" },
  { raza: "siberiano", nombre: "miriam", edad: 7, genero: "h" },
  { raza: "golden", nombre: "stuart", edad: 2, genero: "m" },
  { raza: "caniche", nombre: "edgardito", edad: 5, genero: "m" },
];

function filtrarPerros(array, genero) {
  let perrosClasificados = [];
  for (let i of array) {
    if (i.genero === genero) {
      perrosClasificados.push(i);
    }
  }
  return perrosClasificados;
}

let perrosMachos = filtrarPerros(perros, "m");
console.table(perrosMachos);

let animalesExoticos = [
  { animal: "jirafa", genero: "hembra", altura: 5.9 },
  { animal: "elefante", genero: "macho", altura: 3.5 },
  { animal: "guacamayo", genero: "hembra", altura: 0.7 },
  { animal: "zebra", genero: "macho", altura: 1.5 },
  { animal: "rinoceronte", genero: "hembra", altura: 1.7 },
  { animal: "leon", genero: "hembra", altura: 1.2 },
  { animal: "puma", genero: "macho", altura: 0.8 },
  { animal: "mono", genero: "macho", altura: 0.6 },
  { animal: "jirafa", genero: "hembra", altura: 5.9 },
  { animal: "elefante", genero: "macho", altura: 3.5 },
  { animal: "guacamayo", genero: "hembra", altura: 0.7 },
  { animal: "zebra", genero: "macho", altura: 1.5 },
  { animal: "rinoceronte", genero: "hembra", altura: 1.7 },
  { animal: "leon", genero: "hembra", altura: 1.2 },
  { animal: "puma", genero: "macho", altura: 0.8 },
  { animal: "mono", genero: "macho", altura: 0.6 },
  { animal: "jirafa", genero: "hembra", altura: 5.9 },
  { animal: "elefante", genero: "macho", altura: 3.5 },
  { animal: "guacamayo", genero: "hembra", altura: 0.7 },
  { animal: "zebra", genero: "macho", altura: 1.5 },
  { animal: "rinoceronte", genero: "hembra", altura: 1.7 },
  { animal: "leon", genero: "hembra", altura: 1.2 },
  { animal: "puma", genero: "macho", altura: 0.8 },
  { animal: "mono", genero: "macho", altura: 0.6 },
];

function animalesClasificados(array, altura) {
  let animalesPorAltura = [];
  for (i of array) {
    if (i.altura >= altura) {
      animalesPorAltura.push(i);
    }
  }
  return animalesPorAltura
}

let animalesMasDeUnMetro = animalesClasificados(animalesExoticos, 1.5)
let animalesMasDe2Metros = animalesClasificados(animalesExoticos, 2)


console.table(animalesMasDeUnMetro)
console.table(animalesMasDe2Metros)