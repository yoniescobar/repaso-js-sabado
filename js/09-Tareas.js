import productos,{marcas} from "../data/productos.js";

// 1. Obtener todos los productos por id 

export const getProductos = (id) => productos.find((producto) => producto.id === id);



// 2. filtrar productos activos 
export const getProductosByActive = (active) => {
    return productos.filter((producto) => producto.stock === active); 
}