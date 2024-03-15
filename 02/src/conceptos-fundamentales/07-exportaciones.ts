
function test(a:number):number {
  return a*2
}

interface User { // it is posible with "export type"
  name: string;
  lastname: string;
}

console.log(test(2222))

const pi: number = 2.14;

export {test,pi}
export type {User};
