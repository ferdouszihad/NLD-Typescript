{
  interface Product<T> {
    name: string;
    price: number;
    features: T;
  }

  interface smartWatch {
    display: string;
    trackng: boolean;
    fitness: string;
  }
  interface mouse {
    rgb: boolean;
    buttons: string;
    dpi: string;
  }

  const newProduct: Product<smartWatch> = {
    name: "Amazfit smart watch 09",
    price: 3400,
    features: {
      fitness: "Support walking count , sleep count",
      trackng: true,
      display: "Amolked panel",
    },
  };
  const newProduct2: Product<mouse> = {
    name: "Amazfit smart button 09",
    price: 3400,
    features: {
      buttons: "total 6 button ",
      rgb: true,
      dpi: "3 category DPI supported",
    },
  };
  console.log(newProduct);
}
