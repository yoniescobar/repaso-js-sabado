//Desestructuración de objetos: Es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    ofeta: false
}

// ---- sin destructuring ----
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);
console.log(producto.ofeta);

//-- con destructuring --
console.log("---- con destructuring ----");
const{nombre, precio, disponible, ofeta} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(ofeta);

// ---- con destructuring y una funcion ----
const retornarProducto =(producto) =>{
    console.log("---- retornarProducto ----");
    console.log(producto.nombre);
    console.log(producto.precio);
    console.log(producto.disponible);
    console.log(producto.ofeta);
}

retornarProducto(producto);

const retornarProducto2 =({nombre, precio, disponible, ofeta}) =>{
    console.log("---- retornarProducto2 ----");
    console.log(nombre);
    console.log(precio);
    console.log(disponible);
    console.log(ofeta);
}

retornarProducto2(producto);