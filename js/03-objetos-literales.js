// Objetos literales: Son objetos que se definen en una sola línea de código.  Ejemplo:

// const nombre = "Jose Antonio Lopez";
// const edad = 20;
// const pais = "El Salvador";
// const direccion = "San Salvador";
// const telefono = "2222-2222";

// console.log(`Nombre: ${nombre} Edad: ${edad} Pais: ${pais} Direccion: ${direccion} Telefono: ${telefono}`);





let  persona = {};

console.log(persona);

persona = {
    nombre: "Jose Antonio Lopez",
    edad: 20,
    pais: "El Salvador",
    direccion: {
        calle: "San Salvador Bulevar de los Heroes",
        numero: 2222,
        colonia: "San Salvador",
        latitud: 123456,
    }
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.direccion.calle);


//spread operator: Operador de propagacion
// Para clonar un objeto se hace de la siguiente manera: con el operador spread (...) Ejemplo:
const persona2 = {...persona};
persona2.nombre = "Yoni Edilzar Escobar";
console.log(persona2);


console.log(persona);

//mutacion: es cuando se modifica un objeto. Ejemplo:
//inmutabilidad: es cuando no se modifica un objeto. Ejemplo: