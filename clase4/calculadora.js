const form = document.querySelector(".form")
const result = document.querySelector(".result")

form.addEventListener("submit", (ev)=>{
    ev.preventDefault()
    const op = ev.submitter.value;
    //console.log(ev.submitter.value) --> cuando el evento es submit
    //console.log(ev.target.value) -- > cualquier evento
    const num1 = parseFloat(form.elements["num1"].value)
    const num2 = parseFloat(form.elements["num2"].value)
    console.log(num1)

    if( op === "+"){
        result.textContent = `El resultado es ${num1 + num2}`
    }
    else if( op === "-"){
        result.textContent = `El resultado es ${num1 - num2}`
    }
    else if( op === "*"){
        result.textContent = `El resultado es ${num1 * num2}`
    }
    else if( op === "/"){
        result.textContent = `El resultado es ${num1 / num2}`
    }
})