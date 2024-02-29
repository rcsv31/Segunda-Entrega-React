export let products = [
  {
    id: 1,
    title: "Sello automático 4910",
    price: 17.0,
    description:
      "Sello automático Trodat Printy 4910, cuenta con un tamaño de impresión de 26 x 9 mm.",
    stock: 20,
    category: "sellos-automaticos",
    img: "https://res.cloudinary.com/dutjk2zp4/image/upload/v1709053120/sellos/Sello-Automatico-4910.jpg",
  },

  {
    id: 2,
    title: "Sello automático 4911",
    price: 18.0,
    stock: 16,
    description:
      "Sello automático Trodat Printy 4910, cuenta con un tamaño de impresión de 38 x 14 mm.",
    category: "sellos-automaticos",
    img: "https://res.cloudinary.com/dutjk2zp4/image/upload/v1709053124/sellos/Sello-Automatico-4911.jpg",
  },

  {
    id: 3,
    title: "Sello automático 4912",
    price: 23.1,
    stock: 2,
    description:
      "Sello automático Trodat Printy 4912, cuenta con un tamaño de impresión de 47 x 18 mm.",
    category: "sellos-automaticos",
    img: "https://res.cloudinary.com/dutjk2zp4/image/upload/v1709053127/sellos/Sello-Automatico-4912.jpg",
  },

  {
    id: 4,
    title: "Sello automático 4916",
    price: 27.5,
    stock: 5,
    description:
      "Sello automático Trodat Printy 4916, cuenta con un tamaño de impresión de 70 x 10 mm.",
    category: "sellos-automaticos",
    img: "https://res.cloudinary.com/dutjk2zp4/image/upload/v1709053131/sellos/Sello-Automatico-4916.jpg",
  },

  {
    id: 5,
    title: "Sello en seco de mano",
    price: 64.9,
    stock: 9,
    description:
      "Sello en seco de mano con un tamño de 41 mm de diámetro. Este sello es ideal para invitaciones de boda, fotográfos y profesionales e instituciones para proteger sus documentos contra falsificaciones.",
    category: "sellos-en-seco",
    img: "https://res.cloudinary.com/dutjk2zp4/image/upload/v1709053100/sellos/Sello-Seco-Mano.jpg",
  },

  {
    id: 6,
    title: "Sello en seco plateado",
    price: 115.0,
    stock: 3,
    description:
      "Sello en seco de sobremesa plateado con un tamño de 51 mm de diámetro. Este sello es ideal para invitaciones de boda, fotográfos y profesionales e instituciones para proteger sus documentos contra falsificaciones.",
    category: "sellos-en-seco",
    img: "https://res.cloudinary.com/dutjk2zp4/image/upload/v1709053117/sellos/Sello-Seco-Sobremesa-Plateado.jpg",
  },

  {
    id: 7,
    title: "Sello en seco negro",
    price: 115.0,
    stock: 3,
    description:
      "Sello en seco de sobremesa negro con un tamño de 51 mm de diámetro. Este sello es ideal para invitaciones de boda, fotográfos y profesionales e instituciones para proteger sus documentos contra falsificaciones.",
    category: "sellos-en-seco",
    img: "https://res.cloudinary.com/dutjk2zp4/image/upload/v1709053113/sellos/Sello-Seco-Sobremesa-Negro.jpg",
  },

  {
    id: 8,
    title: "Sello en seco dorado",
    price: 155.0,
    stock: 1,
    description:
      "Sello en seco de sobremesa dorado con un tamño de 51 mm de diámetro. Este sello es ideal para invitaciones de boda, fotográfos y profesionales e instituciones para proteger sus documentos contra falsificaciones.",
    category: "sellos-en-seco",
    img: "https://res.cloudinary.com/dutjk2zp4/image/upload/v1709053110/sellos/Sello-Seco-Sobremesa-Dorado.jpg",
  },

  {
    id: 9,
    title: "Sello de lacre redondo",
    price: 37.5,
    stock: 30,
    description:
      "Sello de lacre redondo con un tamaño de 25 mm de diámetro. Este sello es ideal para lacrar invitaciones de boda, sobres, pergaminos o botellas de vino. Entrega en 24 horas",
    category: "sellos-de-lacre",
    img: "https://res.cloudinary.com/dutjk2zp4/image/upload/v1709053103/sellos/sello-de-lacre-redondo.jpg",
  },

  {
    id: 10,
    title: "Sello de lacre cuadrado",
    price: 69.95,
    stock: 13,
    description:
      "Sello de lacre cuadrado con un tamaño de 30x30 mm. Este sello es ideal para lacrar invitaciones de boda, sobres, pergaminos o botellas de vino.",
    category: "sellos-de-lacre",
    img: "https://res.cloudinary.com/dutjk2zp4/image/upload/v1709053134/sellos/Sello-de-lacre-cuadrado.jpg",
  },

  {
    id: 11,
    title: "Sello de lacre corazón",
    price: 59.99,
    stock: 6,
    description:
      "Sello de lacre con forma de corazón tamaño de 25x25 mm. Este sello es ideal para lacrar invitaciones de boda o sobres.",
    category: "sellos-de-lacre",
    img: "https://res.cloudinary.com/dutjk2zp4/image/upload/v1709055817/sellos/Sello-de-lacre-corazon_ler2n0.jpg",
  },

  {
    id: 12,
    title: "Sello de lacre de caoba",
    price: 71.5,
    stock: 4,
    description:
      "Conjunto formado por una caja de madera con un cierre dorado, un sello de lacre de 20 mm de diámetro con el mango de caoba y una barra pequeña de lacre rojo.",
    category: "sellos-de-lacre",
    img: "https://res.cloudinary.com/dutjk2zp4/image/upload/v1709055943/sellos/CAJA-REGALO-LACRE-CAOBA_wcgaun.png",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};
