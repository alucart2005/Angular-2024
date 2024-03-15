// Utilicen la sintaxis de desestructuración de arrays para asignar los nombres y calificaciones de los dos primeros estudiantes, así como del estudiante en la posición 5 del futuro, a variables individuales. Asegúrense de dar nombres descriptivos a estas variables para mejorar la comprensión del código. Luego, impriman la información obtenida.
const listaEstudiantes: [string, number][] = [
  ["Juan", 85],
  ["María", 90],
  ["Carlos", 78],
  ["Ana", 95],
];
//Desestrucuturacion
const [
  [estudiante1, calificacion1],
  [estudiante2, calificacion2],
  ,
  ,
  [estudiante5, calificacion5] = ['Estudiante no definido', 0],
] = listaEstudiantes;
// Imprime la información de los dos primeros estudiantes
console.log("Estudiante 1: ", estudiante1, " - Calificación: ", calificacion1);
console.log("Estudiante 2: ", estudiante2, " - Calificación: ", calificacion2);
console.log("Estudiante 5: ", estudiante5, " - Calificación: ", calificacion5);

export {};
