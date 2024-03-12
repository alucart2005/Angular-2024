// interface Producto {
//   nombre: string;
//   precios: number[];
//   detalles: Detalles;
// }

// interface Detalles {
//   peso: number;
//   material: string;
//   dimensiones: Dimensiones;
// }

// interface Dimensiones {
//   alto: number;
//   ancho: number;
//   largo: number;
// }

interface Producto {
  nombre: string;
  precios: number[];
  detalles: {
    peso: number;
    dimensiones: {
      alto: number;
      ancho: number;
      largo: number;
    };
    material: string
  };
}

const miProducto: Producto = {
  nombre: "Mesa de mader",
  precios: [99.99, 149.99, 199.9],
  detalles: {
    peso: 5,
    dimensiones: {
      alto: 0,
      ancho: 10,
      largo: 60,
    },
    material: "Madera de roble",
  },
};

function mostrarProducto(producto: Producto): void {
  console.log("Nombre:", producto.nombre);
  console.log("Precios:", producto.precios);
  console.log("Detalles:");
  console.log("- Peso:", producto.detalles.peso);
  console.log("- Dimensiones:");
  console.log("  - Alto:", producto.detalles.dimensiones.alto);
  console.log("  - Ancho:", producto.detalles.dimensiones.ancho);
  console.log("  - Largo:", producto.detalles.dimensiones.largo);
  console.log("- Material:", producto.detalles.material);
}

mostrarProducto(miProducto);
export {};
