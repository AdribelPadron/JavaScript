// Class
class productos {

    constructor(id, producto, precio, cantidad, color, capacidad) {
        this.id = id
        this.producto = producto;
        this.precio = precio;
        this.cantidad = cantidad;
        this.color = color;
        this.capacidad = capacidad;

    }
}


// Aquí vamos a agregar el array

// Prods es un array vacio

let prods = [];

// los prod1, prod2, prod3 son objetos

let prod1 = new productos(1, 'MacBook Pro 13" M1 Chip', 308099, 10, 'Silver', '512 GB');
let prod2 = new productos(2, 'Apple Watch Series SE 40mm', 46159, 25, 'Gold', 'no');
let prod3 = new productos(3, 'iPod Touch', 29999, 5, 'Silver', '32 GB');

prods.push(new productos(4, 'Cargador Apple 20W USB-C', 6099, 50, 'no', 'no'));
prods.push(new productos(5, 'AirPods Pro', 42899, 30, 'White', 'no'));
prods.push(new productos(6, 'iPhone 11', 175799, 20, 'Purple', '64 GB'));

prods.push(new productos(7, 'iMac 24" - Chip M1', 398249, 10, ' Orange', '512 GB'));
prods.push(new productos(8, 'iPad Air 10.9" ', 42899, 15, 'Sky Blue', '64 GB'));
prods.push(new productos(9, 'iMac 24" - Chip M1', 398249, 5, ' Green', '512 GB'));

prods.push(new productos(10, 'iPad Pro 12.9" - Chip M1', 254199, 20, 'Space Gray', '256 GB'));
prods.push(new productos(11, 'Apple Watch Series S6 44mm', 70299, 30, 'Space Gray', 'no'));
prods.push(new productos(12, 'Apple TV 4k', 486999, 12, 'Black', '64 GB'));


// la propiedad push los que no hace es agregar cada objeto a nuetro array,
// Eso que quiere decir que cuando agregamos los 3, vamos a tener un array de 3 elementos.

prods.push(prod1);

prods.push(prod2);

prods.push(prod3);