//variable: es un contenedor de informacion
//constante: es un contenedor de informacion pero su valor no puede cambiar




//const: no se puede reasignar
// const nombre = "Juan Carlos Cervantes";
// nombre= "Juan Carlos Rivera"
// console.log(nombre);








//let: si se puede reasignar
// let edad = 50;
// edad= 60;

// console.log(edad);

// edad = "hola mundo"

// console.log(edad);

// edad =[1,25,3,48,5,6,7,8,9,10];

// console.log(edad);





// scope: es el alcance de una variable

 let nombre = "Juan Carlos Cervantes";

    if(true){
        let nombre = "Juan Carlos Rivera";
        console.log(nombre);
    }

    console.log(nombre);