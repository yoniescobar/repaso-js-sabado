
//llamando por id
let boton = document.getElementById("boton");
//cambiar el texto del boton
boton.innerHTML = "Nuevo texto del boton desde el DOM";
//cambiar el color del boton


//llamado por class
let parrafos = document.getElementsByClassName("parrafos");
parrafos[0].innerHTML = "Este es el nuevo texto del parrafo desde el DOM";


function cambiarColor() {
    let boton = document.getElementById("boton");
    boton.style.background = "red";
    boton.style.padding = "20px";
    boton.style.border = "1px solid #ccc";
}

boton.addEventListener("mouseover", function () {
   document.body.style.background = "blue";
   alert('cambiando el color del fondo')
});