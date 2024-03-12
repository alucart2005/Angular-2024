// void, funciones, operador siempre da undefined
// undefine variables tipo de datos

let x;

function example(): void {
  return console.log("11111111111");
}

function saludar(): void {}

function sumar(a: number, b: number): number {
  return a + b;
}
function sumar2(a: number, b: number): string[] {
  return [(a + b).toString()];
}


// VALORES OPCIONALES EN FUNCION
const multiply = (firstname: string, multiply: number, lastname?: string) => {
  // Verificar si lastname no está definido (es decir, es falsy)
  if (!lastname) {
    // Si no hay un apellido definido, repetir solo el primer nombre
    return (firstname + " ").repeat(multiply);
  } else {
    // Si hay un apellido definido, concatenar el primer nombre, el apellido y repetirlos
    return (firstname + " " + lastname + " ").repeat(multiply);
  }
};

console.log(void x);
console.log(example());
console.log(sumar(1, 2));
console.log(sumar2(2, 3));
console.log(typeof sumar2(2, 3));
console.log(multiply("Napoleon", 3));
console.log(multiply("Napoleon", 3,"Anaya"));

export {};
