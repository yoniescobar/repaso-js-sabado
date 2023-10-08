//fetch: es una funcion que nos permite hacer peticiones a apis externas y nos devuelve una promesa
// await: es una palabra reservada que solo se puede usar dentro de una funcion async
// async: es una palabra reservada que se usa para declarar funciones asincronas
const url = 'https://rickandmortyapi.com/api/character'


const obtenerPersonajes = async () => {

    try {
        
        const respuesta = await fetch(url)
        const data = await respuesta.json()
        console.log(data.results)
    } catch (error) {
        console.log('Este es un erro mas info: ---',error)
    }

}

obtenerPersonajes()