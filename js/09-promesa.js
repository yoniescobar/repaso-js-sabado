//promesas: es un objeto que representa un valor que se puede resolver en el futuro o no las promesas son asincronas y se pueden resolver o rechazar una sola vez, no se pueden cancelar
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

import {getProductos} from "./09-Tareas.js";

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('2 segundos despues');
        const producto = getProductos(3);

        //resolve(producto); //Tarea: simular que la promesa se resuelva correctamente
        //reject('No se pudo encontrar el producto'); //Tarea: simular que la promesa no se resuelva correctamente

        if(producto){ //Tarea: simular que la promesa se resuelva correctamente
            resolve(producto); //Tarea: simular que la promesa se resuelva correctamente
        }
        else{
            reject('No se pudo encontrar el producto'); //Tarea: simular que la promesa no se resuelva correctamente
        }

    }, 2000); //2 segundos
}
);

promesa.then((producto) => {
    console.log(producto);
}).catch((error) => {
    console.log(error);
});



// ---- Ejemplo de promesa mdn web docs

console.log(" ----- mdn web docs -----")

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300); // 300 milisegundos
  });

    myPromise.then((value) => {
    console.log(value);
    // expected output: "foo"
    });
  
 
  