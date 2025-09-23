const allDiv = document.querySelectorAll(".div")
let x = 0;
let newId; 

const handleDiv = (ev)=>{
    const back = ev.target;
    const clickedElement = ev.currentTarget;
    clickedElement.classList.toggle("rotate")
    const idCard = ev.currentTarget.dataset.idcard;
    if(x=== 0){
        newId  = idCard;  
        x++;
    } else {
        x= 0;
        setTimeout(()=>{
            if( idCard !== newId){
            //este bloque de codigo debe ejecutarse paso 0.5s setTimeOut()
                clickedElement.classList.remove("rotate")
                const cardBefore = document.querySelectorAll(`.div[data-idcard="${newId}"]`)
                for (const element of cardBefore) {
                    element.classList.remove("rotate")
                }
            }
            else{
                //añadir una clase de css que deshabilite el div
                //eliminar el evento click sobre iguales
            }
        },1000)
    }
}
for(const div of allDiv){
    div.addEventListener("click", handleDiv)
   // div.addEventListener("mouseover", handleMouse)
}

/**
 * 1.- Reiniciar partida, quitar rotate a todos los div.
 * 2.- Guardar en LS la partida que no ha sido terminada.
 * 3.- Al encontrar la pareja añadir un estilo especial
 * 4.- Llevar la cuenta de puntos. [definir las reglas]
 * 5.- En js tener un array de las rutas de las imagenes, mezclar el array usando Math.random()
 *     llenar las imagenes desde JS
 *  */
