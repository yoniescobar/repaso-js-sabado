const tecnologias = ['React', 'Vue', 'Angular', 'Svelte'];
//console.log(tecnologias);
//console.log(tecnologias[0]);

const [React,Vue,Angular,Svelte] = tecnologias; // destructuring de arreglos
console.log(React);


// --- Retornar un arreglo desde una funcion y desestructurarlo -----
const retornarArreglo = () =>{
    return ['ABC', 123]; //usuario y password
}

const [letras, numeros] = retornarArreglo(); // 
console.log(letras, numeros);