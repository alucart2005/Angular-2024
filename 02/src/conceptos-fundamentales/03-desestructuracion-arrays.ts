const listSupermercado: string[] = ["Leche", "pan", "huevos"];

const [producto1, producto2, , producto4, producto5='Not Found'] = listSupermercado;

//resp operator
const [...x] = listSupermercado
console.log(x)

console.log(producto1)
console.log(producto2)
console.log(producto4 || 'not found')
console.log(producto5)

export {};
