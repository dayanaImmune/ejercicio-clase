const inputName = document.getElementById("inputName")
const inputAge = document.getElementById("inputAge")
const errorName = document.querySelector(".errorName")
const errorAge = document.querySelector(".errorAge")
const error = document.querySelector(".error")

inputName.addEventListener("input", (ev)=>{
    console.log(form.elements["inputName"].value)
    let value = ev.target.value;
    if(value.length<2){
        errorName.classList.remove("hidden");
        errorName.textContent = "Debe tener minimo 2 caracteres"
    }else{
        errorName.classList.add("hidden");
    }
})
//change - blur
inputAge.addEventListener("blur", (ev)=>{
    let value = ev.target.value;
    if(value < 18){
        errorAge.classList.remove("hidden");
        errorAge.textContent = "debe ser mayor de edad"
    }else{
        errorAge.classList.add("hidden");
    }
    console.log(typeof value)
    console.log(value + 10)
})

const form = document.querySelector(".form")
console.log(form.elements["inputAge"])

form.addEventListener("submit", (ev)=>{
    ev.preventDefault()
    for(let i = 0; i < form.elements.length; i++ ){
        if(form.elements[i].value === ""){
            error.classList.remove("hidden")
            error.textContent= "Debe rellenar todos los campos"
        }
    }
})


let edad= "20" // asi llegan los datos del form
console.log(typeof edad)
edad = parseInt(edad)
console.log(typeof edad)

let apellido = "romero"
apellido = parseInt(apellido)
console.log(apellido) //NaN
console.log(typeof apellido)

console.log(isNaN(apellido)) //