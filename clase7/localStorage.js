/**
 * 1.-pedir al usuario mail y password
 * 2.- preguntar con checkbox, si desea guardar los datos
 * 3.- Si  acepta se guarda en el localStorage
 */
const form =  document.querySelector(".form")

const handleLocalStorage =(ev)=>{
    ev.preventDefault()
    console.log("holisss")
    if(form.elements["question"].checked){
        localStorage.setItem("email", form.elements["email"].value )
        localStorage.setItem("password", form.elements["password"].value )

        //otra forma de hacerlo usando objetos
        const user= {
            email: form.elements["email"].value , 
            pass: form.elements["password"].value 
        }
        localStorage.setItem("user" , JSON.stringify(user))
    }
}
form.addEventListener("submit", handleLocalStorage)

//forma numero 1 de hacerlo
const getDataLS = ()=>{

    const email = localStorage.getItem("email")
    const pass =  localStorage.getItem("password")

    if(email && pass){
        form.elements["email"].value = email;
        form.elements["password"].value = pass;

    }
}
//getDataLS() forma 1

//forma numero 2 de hacerlo
const getDataLS2 = ()=>{
    const dataLS = localStorage.getItem("user")// datos en string
    // si dataLS es un valor truthy
   if(dataLS){
    const dataUser = JSON.parse(dataLS)
    form.elements["email"].value = dataUser.email;
    form.elements["password"].value = dataUser.pass;
   }

}
getDataLS2()