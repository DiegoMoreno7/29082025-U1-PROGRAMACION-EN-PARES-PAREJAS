let precios = [10,20,30,40];

let total = precios.reduce((acum, precio) => acum + precio, 0);

console.log("Total: " + total);