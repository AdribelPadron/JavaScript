// //CLASE 6 ARRAYS: 



// // funciones:

// function promo(dato) {

//     dato = dato.toLowerCase();

//     if (dato != "") {
//         if (dato === "si") {
//             let precio = 112099 * 0.95;
//             alert('Promoción: Compra el iPhone SE 64 GB Black, a un precio de $' + precio + ' pesos');
//         } else {
//             alert('No seleccionaste la promoción')
//         }
//     } else {
//         alert('No ingreso datos, intenta nuevamente.')
//     }
// }



// function cuota() {

//     let ncuota = prompt('Ingrese la cantidad de cuotas en la que desea pagar su producto ( 1, 3 ó 6 )');
//     let producto = prompt('Ingrese el producto que desea pagar en cuotas: ( iPhone o Watch )').toLowerCase();
//     let precioiphone = 129099;
//     let preciowatch = 89999;
//     let cuota;

//     if (ncuota != "" && producto != "") {
//         ncouta = parseInt(ncuota);
//         if (producto == 'iphone') {

//             cuota = precioiphone / ncuota;
//             alert('Cada cuota te quedaria en $' + cuota + ' pesos');
//         } else {

//             cuota = preciowatch / ncuota;
//             alert('Cada cuota te quedaria en $' + cuota + ' pesos');
//         }

//     } else {
//         alert('No ingreso datos, intenta nuevamente.')
//     }

// }

// function iva() {

//     let infoIva = prompt('¿Desea saber el IVA? (si/no)')
//     let precioiPhoneSe = 129099;
//     let preciowatchSerie6 = 89999;
//     let precioConIvaWachtS6 = preciowatchSerie6 * 1.105;

//     if (infoIva != "") {

//         if (infoIva == 'si') {

//             let productoIva = prompt('Ingrese el producto del cual quieres saber el IVA: ( iPhone o Watch )').toLowerCase();

//             if (productoIva == 'iphone') {

//                 let precioConIvaIph = precioiPhoneSe * 1.21;

//                 alert('El precio final con Iva es: $  ' + precioConIvaIph + ' pesos');

//             } else if (productoIva == 'watch') {

//                 let precioConIvaWachtS6 = preciowatchSerie6 * 1.105;

//                 alert('El precio final con Iva es: $ ' + precioConIvaWachtS6 + ' pesos');

//             } else {

//                 alert('ingreso un dato incorrecto, intenta nuevamente.')

//             }

//         } else {

//             alert('¡Genial!, continua navegando en nuestra web.')
//         }

//     } else {
//         alert('No ingreso datos, intenta nuevamente.')
//     }
// }




// Aqui ya tenemos los arrays y un array de objetos.

// // DESAFIO COMPLEMENTARIO!!!
// // 
// function menormayor() {

//     let prices = prods.sort((a, b) => parseFloat(a.precio) - parseFloat(b.precio));
//     console.log(prices);

//     for (let i = 0; i < prices.length; i++) {

//         alert([prices[i].producto, "  " + prices[i].precio]);
//         console.log([prices[i].producto, "  " + prices[i].precio])
//     }
// }

// menormayor();




let mostrar = () => {
    let padre = document.getElementById('mostrador');

    for (i = 0; i <= prods.length; i++) {
        let ul = document.createElement('ul')
        let lista = `<li>${prods[i].producto} quedan las siguientes unidades disponibles: ${prods[i].cantidad}</li>`
        console.log(lista)
        ul.innerHTML = lista;
        padre.appendChild(ul);
    }

}

// mostrar();



// let info = prompt('¿Desea conocer los productos disponibles en stock? (si/no)').toLocaleLowerCase();

// if (info != "") {
//     if (info == "si") {
//         mostrar()
//     } else {
//         let salida = document.getElementById('mostrador');
//         let mensaje = document.createElement('h2')
//         mensaje.innerHTML = 'Genial, sigue navegando en nuestra web';
//         salida.appendChild(mensaje);
//     }

// } else {
//     let salida = document.getElementById('mostrador');
//     let mensaje = document.createElement('h2')
//     mensaje.innerHTML = 'No ingreso datos, intente nuevamente';
//     salida.appendChild(mensaje);
// };

//  Formulario Modal
const formu = () => {

    let modal = document.getElementById("myModal");
    // When the user clicks on the button, open the modal

    modal.style.display = "block"
    let span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }

}
let endbuy = document.getElementById('endCompra');
endbuy.addEventListener('click', (e) => {
    e.preventDefault()
    let modal = document.getElementById("myModal");
    // When the user clicks on the button, open the modal

    modal.style.display = "none"
    localStorage.removeItem('Carrito');
    // actualizar el precio
    let carrito = document.getElementById('cartProd');
    let text = `Carrito vacio`;
    carrito.innerHTML = text;
    swal({
        text: `Gracias por su compra`,
        timer: 3500,
        button: false,
    });
})

// EVENTOS



let total = 0;

let aComprar = [];
let cart = JSON.parse(localStorage.getItem('Carrito'));
console.log(cart)

const mostradorTotal = () => {

    if (cart == null) {
        cart = [];
        console.log(cart.length);
    } else {

        let carrito = document.getElementById('cartProd');
        for (i of cart) {
            total += i.precio;
        }
        let text = `Total $ ${total}`
        carrito.innerHTML = text;
        console.log(total)
    };
}
mostradorTotal();
// const NotiCarrito = (e) => {
//     let madre = document.getElementById('AgregadosAlCarrito')
//     let hija = document.createElement('h5');
//     hija.innerHTML = `Producto agregado ${e} `;
//     $('#AgregadosAlCarrito').prepend(hija);
//     $('#AgregadosAlCarritor h5').fadeIn('slow');
//     $('h5').css('text-align', 'center');

//     setTimeout(() => {

//         madre.removeChild(madre.firstChild);
//     }, 2500)
// }
const agregados = (e) => {
    console.log('hemos entrado')
    let carrito = document.getElementById('cartProd');
    total += e.precio;
    let text = `Total $ ${total}`
    carrito.innerHTML = text;
    cart.push(e);
    let addtoJson = JSON.stringify(cart, null, '\t');
    localStorage.setItem('Carrito', addtoJson);;
    //inicio Animacion top, carrito.

    $('html, body').animate({
        scrollTop: $("#cartProd").offset().top
    }, 100, console.log('agregado'));

    swal({
            text: `Se Agregó ${e.producto}`,
            timer: 1500,
            button: false,
        })
        //Cierre de Animacion top, carrito.
}

const limpiezadeCarrito = () => {
    // actualizar el precio
    let carrito = document.getElementById('cartProd');
    let totalnuevo = 0;
    if (cart.length != 0) {
        for (i of cart) {
            totalnuevo += i.precio;
        }
        let text = `Total $ ${totalnuevo}`
        carrito.innerHTML = text;
        console.log(totalnuevo)
        totalnuevo = 0;
        total = 0;
    } else {
        totalnuevo = 0;
        total = 0
        let carrito = document.getElementById('cartProd');
        let text = `Carrito vacio`
        carrito.innerHTML = text;
        console.log(totalnuevo)
        localStorage.removeItem('Carrito');
    }
}

const modificarCarrito = () => {
    let idcoso = [];
    let counter = 1;
    for (i of cart) {
        let carritoproductos = document.getElementById('AgregadosAlCarrito');
        aComprar.push(i.producto)
        let idcompra = i.id + 'id' + counter;
        let hija = document.createElement('h5');
        hija.innerHTML = ` <span class="close${idcompra} closeall"> ${i.producto} &times;</span> `;
        idcoso.push(idcompra);
        $('#AgregadosAlCarrito').prepend(hija);
        $('h5').css('text-align', 'center');
        carritoproductos.style.display = 'block'
        counter += 1;
    }

    for (i = 0; i < idcoso.length; i++) {

        let buscar = `.close${idcoso[i]}`
        let buscarid = parseInt(idcoso[i].split('id', 1))
        $(buscar).on('click', () => {
            let index = cart.findIndex(id => id.id == buscarid);
            cart.splice(index, 1)
            $(buscar).css('display', 'none')
            let addtoJson = JSON.stringify(cart, null, '\t');
            localStorage.setItem('Carrito', addtoJson);
            console.log(cart)
            limpiezadeCarrito();

        })
    }


    let endbuy1 = document.getElementById('endCompra1');
    endbuy1.addEventListener('click', (e) => {
        e.preventDefault()
        let madre = document.getElementById('AgregadosAlCarrito')
        madre.innerHTML = `<button id="endCompra1" type="submit" class="btn-info mt-3 text-align-center m-2 ">Finalizar Compra</button>
        <button id="endCompra2" class="btn-danger mt-3 text-align-center m-2 ">Cancelar</button>`;

        aComprar = [];
        $('#AgregadosAlCarrito').css('display', 'none')
        formu()
    })
    let endbuy2 = document.getElementById('endCompra2');
    endbuy2.addEventListener('click', (e) => {

        $('#AgregadosAlCarrito').css('display', 'none')
        let madre = document.getElementById('AgregadosAlCarrito')
        madre.innerHTML = `
        <button id="endCompra1" type="submit" class="btn-info mt-3 text-align-center m-2 ">Finalizar Compra</button>
        <button id="endCompra2" class="btn-danger mt-3 text-align-center m-2 ">Cancelar</button>`;

        aComprar = [];

    })
}

const comprar = (e) => {


    datajson = JSON.stringify(e);

    // la parte de AJAX

    // Envio de Mail usando emailJS
    if (cart.length == 0) {
        swal({
            text: `El carrito está vacio`,
            timer: 3000,
            button: false,
        });
    } else {
        $.ajax({
            type: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: datajson,
            contentType: 'application/json',
        }).done(function() {
            modificarCarrito();
        }).fail(function(error) {
            swal({
                text: `Se produjo un error, intente de nuevo`,
                timer: 3000,
                button: false,
            });
        });
    }

}

// EVEEEENTOOOOOOOS


// INICIA jquery productos Primera section.


let botonid4 = $('#btn4').on('click', agregados.bind(this, prods.find(id => id.id == 4)))

let botonid5 = $('#btn5').on('click', agregados.bind(this, prods.find(id => id.id == 5)))

let botonid2 = $('#btn2').on('click', agregados.bind(this, prods.find(id => id.id == 2)))

// Cierra jquery productos Primera section.







// INICIA jquery productos Segunda section.


let botonid3 = $('#btn3').on('click', agregados.bind(this, prods.find(id => id.id == 3)))

let botonid1 = $('#btn1').on('click', agregados.bind(this, prods.find(id => id.id == 1)))

let botonid6 = $('#btn6').on('click', agregados.bind(this, prods.find(id => id.id == 6)))

// Cierra jquery productos Segunda section.








//INICIA jquery HTML Novedades:


let botonid7 = $('#btn7').on('click', agregados.bind(this, prods.find(id => id.id == 7)))

let botonid8 = $('#btn8').on('click', agregados.bind(this, prods.find(id => id.id == 8)))

let botonid9 = $('#btn9').on('click', agregados.bind(this, prods.find(id => id.id == 9)))

let botonid10 = $('#btn10').on('click', agregados.bind(this, prods.find(id => id.id == 10)))

let botonid11 = $('#btn11').on('click', agregados.bind(this, prods.find(id => id.id == 11)))

let botonid12 = $('#btn12').on('click', agregados.bind(this, prods.find(id => id.id == 12)))

let botoncomprar = $('#btncomprar').on('click', comprar.bind(this, cart));


// Cierre jquery HTML Novedades: