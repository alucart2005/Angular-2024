interface Product {
  description: string;
  price: number;
}

interface DiscountProducts {
  discount: number;
  products: Product[];
}

const shirt: Product = {
  description: "Lorem20",
  price: 130,
};

const jeans: Product = {
  description: "Lorem30",
  price: 70,
};

const shoppingCart: Product[] = [shirt, jeans];

// function discountCalculate(options: DiscountProducts): [number, number, number] {
//   let total = 0;
//   options.products.forEach((producto) => {
//     if (producto.price) {
//       total += producto.price;
//     }
//   });

//   return [total, total * options.discount, total - total * options.discount];
// }


function discountCalculate(options: DiscountProducts): [number, number, number] {
  const {discount,products} = options
  let total:number = 0;
  products.forEach((producto) => {
    const {price} =producto
    if (price) {
      total += price;
    }
  });

  return [total, total * discount, total - total * discount];
}

const card: DiscountProducts = {
  discount: 0.1,
  products: shoppingCart,
};

const total = discountCalculate(card);

console.log(shirt);
console.log(jeans);
console.log(shoppingCart);
console.log(total);

export {};

// function totalPaid(products: Product[], discounts: number = 0) {
//   const totalPrice = products.reduce(
//     (total, product) => total + product.price,
//     0
//   );
//   const discountPrice = (totalPrice - (totalPrice * discounts / 100));
//   return discountPrice;
// }
