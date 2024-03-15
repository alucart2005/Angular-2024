interface User {
  name: string;
  lastname: string;
  isVerifed: boolean;
  birthdate: string;
  address: Address;
}

interface Address {
  street: string;
  city: string;
  country: string;
}

const user: User = {
  name: "Napoleon",
  lastname: "Anaya",
  isVerifed: true,
  birthdate: "21 de Enero",
  address: {
    street: "Calle 30",
    city: "Medellin",
    country: "Colombia",
  },
};

//Desestructuracion
const {
  name,
  lastname,
  isVerifed,
  birthdate: fechadenacimiento,
  address: { street, city, country },
} = user;
// const {street, city, country} = user.address

console.log("Name:", name);
console.log(lastname);
console.log(isVerifed);
console.log(fechadenacimiento);
console.log(street);
console.log(city);
console.log(country);
export {};
