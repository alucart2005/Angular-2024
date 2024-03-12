//Arrays
const list: (string | number | boolean)[] = [
  "Tomates",
  4,
  true,
  2,
  "dos",
  "dos",
  false,
];
const list2: [string, number, boolean] = ["bananas", 2, false]; //Este es mas estricto
const list3: string[] = ["uno", "dos"];

//Objetos INTERFACES   
interface Country {
  name: string;
  idioma: string;
  comidasTipicas: string[];
  poblacion?: number;
}

const country: Country = {
  name: "Colombia",
  idioma: "Español",
  comidasTipicas: ["bandeja paisa", 'Ajiaco'],
  poblacion: 1234,
};

console.log(list);
console.log(list2);
console.log(list3);
console.log(country);
console.log(country.poblacion)
console.log(country['poblacion'])

export {};
