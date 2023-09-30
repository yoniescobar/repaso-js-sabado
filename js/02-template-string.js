////Template string: se usa para concatenar strings y variables

const nombre ="Jose Antonio Lopez";
const aleas = "El chato";

//Contactenacion normal sin template string

console.log("Hola mi nombre es: "+nombre+" y mi apodo es: "+aleas);
console.log("Hola mi nombre es: ",nombre," y mi apodo es: ",aleas);

//Concatenacion con template string
console.log('Utlizando template string');

console.log(`Hola mi nombre es: ${nombre} y mi apodo es: ${aleas} mi edad es ${20+20} años`);



function getSaludo(nombre){
    return "Hola Bienvenido al Curso React.js :  "+nombre.toUpperCase();
}

console.log(`Invocando a la funcion getSaludo: ${getSaludo('Yoni Edilzar Escobar')}`);