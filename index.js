const productos = ["Aros", "Anillo", "Pulsera", "Collar"];
const precios = [2000, 1500, 3000, 5000];
let total = 0;


function mostrarProductos() {
    console.log("Productos disponibles:");
    for (let i = 0; i < productos.length; i++) {
        console.log(`${i + 1}. ${productos[i]} - $${precios[i]}`);
    }
}


function calcularTotal(precio, cantidad) {
    return precio * cantidad;
}


function iniciarSimulador() {
    alert("¡Bienvenido a nuestra tienda de accesorios!");
    mostrarProductos();

    let opcion = parseInt(prompt("Ingrese el número del producto que desea comprar:")) - 1;

    if (opcion >= 0 && opcion < productos.length) {
        let cantidad = parseInt(prompt(`¿Cuántos ${productos[opcion]} desea comprar?`));

        if (cantidad > 0) {
            let subtotal = calcularTotal(precios[opcion], cantidad);
            total += subtotal;
            alert(`Has agregado ${cantidad} ${productos[opcion]} por un total de $${subtotal}`);
        } else {
            alert("Cantidad inválida.");
        }
    } else {
        alert("Opción inválida.");
    }

    let continuar = confirm("¿Desea comprar otro producto?");
    if (continuar) {
        iniciarSimulador();
    } else {
        alert(`Gracias por su compra. Total a pagar: $${total}`);
        console.log("Compra finalizada.");
    }
}


iniciarSimulador();
