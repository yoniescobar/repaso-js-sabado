// //Funciones: Bloque de código que se ejecuta cuando es invocado (llamado).

// // Funciones declarativas:
// function miFuncion(nombre="", apellido="") {
//     console.log(`Funcion declarativa- Saludos: ${nombre} ${apellido}`);
// }

// miFuncion("Juan", "Perez");

// // Funciones de expresión o anónimas: es una función que se le asigna a una variable. 

// const miFuncion2 = function(nombre="", apellido="") {
//     return `Funcion de expresion o anonima- Saludos: ${nombre} ${apellido}`
// }

// console.log(miFuncion2("Juan", "Perez"));


// // funciones de flecha: es una forma de escribir las funciones de expresión de una manera más corta.

// const miFuncion3 = (nombre="", apellido="") => `Funcion de flecha- Saludos: ${nombre} ${apellido}`;

// console.log(miFuncion3("Juan", "Perez"));



// const miFuncion4 = (...promedio) => {
//     let suma = 0;
//     for (let i = 0; i < promedio.length; i++) {
//         suma += promedio[i];
//     }
//     return suma / promedio.length; // suma: 530, promedio.length: 7
// }

// console.log(miFuncion4(80, 90, 75, 100, 95, 85, 90));


// const suma = (a, b) => a + b;

// console.log(suma(5, 10));


// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const contarCarecteres =(cadena="") => {
    if (!cadena) { //Si cadena es igual a false, undefined, null, 0, "", NaN
        console.warn("No ingresaste ninguna cadena");
    } else {
        console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
        //length: es una propiedad de los string que nos devuelve el numero de caracteres que tiene la cadena.
    }
}

contarCarecteres("Hola Mundo");



// //2  - Programa una fucion para que calcule el precio de un producto aplicando un descuento, pe. miFuncion(1000, 20) devolverá 800.


const calcularPrecio = (precio=0, descuento=0) => {
    if (!precio ) {
        console.warn("No ingresaste el precio del producto");
    } else if (!descuento) {
        console.warn("No ingresaste el descuento del producto");
    } else {
        let precioFinal = precio - (precio * (descuento / 100)); // 1000 - 200) = 800
        console.info(`El  precio ${precio } con el descuento 0. ${descuento} precio es final es de: $${precioFinal}`);
    }
}

calcularPrecio(1000, 20);


// 3 - Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].



