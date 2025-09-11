const section = document.querySelector(".container")
/*modificar contenido de una etiqueta.. innerHTML */
//añade una clase de CSS
section.classList.add("danger");
section.classList.add("warning")

//elimina una clase css
section.classList.remove("danger")

// modifica una clase de css
section.classList.toggle("danger")

//eventos--> click, submit, change, focus, mouseover, keypress, scroll

const btn =  document.querySelector(".btn")
const paragraph =  document.querySelector(".paragraph")

btn.addEventListener("click", ()=>{
    paragraph.classList.remove("hidden")
})
// cambiar modo de claro a oscuro
const btnMode =  document.querySelector(".btnMode")
const body =  document.querySelector("body")

btnMode.addEventListener("click", ()=>{
    body.classList.toggle("dark_mode")
})
