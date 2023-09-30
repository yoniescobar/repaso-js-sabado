//Arreglos: Son estructuras que nos permiten almacenar varios datos y agruparlos.


const notas =[80,90,75,100,95,85,90];
console.log(notas);
console.log(`Imprimier el valor de 75: ${notas[2]}`); //Imprime el valor de la posición 2 del arreglo

//notas.push(100);
//console.log(notas);


//Recomendable usar el operador spread (...) para agregar un elemento al arreglo. Ejemplo:
//Para clonar un arreglo se hace de la siguiente manera: con el operador spread (...) Ejemplo:

const notas2 = [...notas,100];
console.log(notas2);



const notas3 = notas2.map(function(valor){
    return valor/100; //Se divide entre 100 para obtener el porcentaje
});

//map: recorre el arreglo y modifica cada uno de los elementos del arreglo de acuerdo a la función que le pasemos.

console.log(notas3);


//MDN: documentación de javascript y de los navegadores LINK https://developer.mozilla.org/es/docs/Web/JavaScript
//callback: es una función que se manda como argumento a otra función. 