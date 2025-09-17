/**
 * peticion api 
 * metodo--> GET, POST, PUT, DELETE
 * Por defecto si no especificamos son de tipo GET
 * 1.- DELETE eliminar datos
 * 2.- PUT modficar datos
 * 3.- POST- añadir datos, enviar un conjunto de datos
 * 3.- GET--> consultar datos
 */

const form =  document.querySelector(".form")
const paragraph =  document.querySelector(".paragraph")
/*
function handleNewProduct(ev){
    ev.preventDefault()
    console.log("se envio el form")
}*/

const postApiProduct = (product)=>{
    fetch("https://fakestoreapi.com/products",{
        method:"POST",
        body: JSON.stringify(product),
        headers:{
            "Content-type": "application/json"
        }
    })
    .then(resp => resp.json())
    .then(data=>{
        //truthy, todo lo que no sea FALSY
        //falsy --> 0, "", null, undefined, false 
        if(data.id){
            paragraph.classList.remove("hidden")
        }
    })
}

const handleNewProduct =(ev)=>{
    ev.preventDefault()
    const newProduct = {
        title: form.elements["title"].value,
        price: form.elements["price"].value, 
        description:form.elements["description"].value,
        category:form.elements["category"].value,
        image: form.elements["image"].value, 
    }
    postApiProduct(newProduct)
}
form.addEventListener("submit", handleNewProduct)


//localStore-- > guardar informacion en el navegador limite 5m
localStorage.setItem("name", "Victor")
const ls = localStorage.getItem("name")
console.log(ls)
localStorage.clear()