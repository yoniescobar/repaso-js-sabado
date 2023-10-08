import productos,{marcas} from "../data/productos.js";


//destructuring productos
// const [camisaReact, camisaVue] = productos;
// console.log(camisaReact);

//------------------ funcion para buscar un producto por id ------------------
const getProductosById = (id) => {
    return productos.find((producto) => producto.id === id);
}

//console.log(getProductosById(20));
const resultado = getProductosById(100);

if(resultado){
    console.log(resultado.nombre);
}else{
    console.log('No existe el producto');
}

//------------------ funcion para obtener productos con stock activo ------------------
const getProductosByStock = (active) => {
    return productos.filter((producto) => producto.stock === active);
}

console.log(getProductosByStock(false));


//------------------ funcion para obtener productos con pais china ------------------

const getMarcasByPais = (pais) => {
    return marcas.filter((marca) => marca.pais !== pais);
}

console.log(getMarcasByPais('EEUU'));