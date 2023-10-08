
const calcular = (operacion)=>{

    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor ingrese un numero");
        return;
    }
    
    let resultado = 0;

    switch(operacion){
        case 'suma':
            resultado = n1 + n2;
            break;
        case 'resta':
            resultado = n1 - n2;
            break;
        case 'multiplicacion':
            resultado = n1 * n2;
            break;
        case 'division':
            if(n2 == 0){
                resultado = 'No se puede dividir por 0';
            }
            else{
                resultado = n1 / n2;
            }
            break;
        default:
            resultado = 'No se ha seleccionado ninguna operacion';
            break;
    }
    document.getElementById("respuesta").value = resultado;
}


