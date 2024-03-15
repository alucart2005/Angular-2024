//El objetivo de este ejercicio es practicar la desestructuración de objetos en TypeScript, especialmente cuando se trata de objetos anidados dentro de otros objetos.

interface Personaje {
  nombre: string;
  edad: number;
  ubicacion: Ubicacion;
}
interface Ubicacion {
  lugar: string;
  coordenadas: Coordenadas;
}
interface Coordenadas {
  latitud: number;
  longitud: number;
}

// interface Personaje {
//   nombre: string;
//   edad: number;
//   ubicacion: {
//     lugar: string;
//     coordenadas: {
//       latitud: number;
//       longitud: number;
//     };
//   };
// }

const personaje: Personaje = {
  nombre: "Arya Stark",
  edad: 18,
  ubicacion: {
    lugar: "Braavos",
    coordenadas: {
      latitud: 42.6,
      longitud: 18.2
    }
  }
};

const { edad, nombre, ubicacion:{lugar, coordenadas:{latitud,longitud}}} = personaje

console.log(nombre)
console.log(edad)
console.log('Ubicacion:', lugar)
console.log('Coordenadas:')
console.log('latitud:',latitud)
console.log('Longitud:',longitud)


export { }