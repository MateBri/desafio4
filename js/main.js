let nombreProducto = "Sillon"
let precioUnitario = 100
let cantidadDeseada = prompt("Ingrese la cantida de sillones que desea")


function sumarProductos(precioUnitario , cantidadDeseada) {
    let totalGastado = precioUnitario * cantidadDeseada;
    return totalGastado;
}

let totalDeCompra = sumarProductos(precioUnitario , cantidadDeseada)

console.log("El total gastado es de: $" + totalDeCompra);