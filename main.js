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

function filterParam(beers) {
  let beersNew = [];
  for (const beer of beers) {
    let beerNew = {};
    beerNew.name = beer.name;
    beerNew.abv = beer.abv;
    beerNew.ibu = beer.ibu;
    beersNew.push(beerNew);
  }
  return beersNew;
}

let beersNew = filterParam(beers);

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
