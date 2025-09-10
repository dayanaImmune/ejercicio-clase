console.log("hola mundo")

const name= "Dayana";
let year = 2000;

if (year === 2025){
    console.log("año actual")
}
else{
    console.log("no se que dices")
}

function sayHi(){
    console.log("holisss")
}
sayHi()

/* funciones flecha */
const sayBye = () =>{
    console.log("Chao")
}
sayBye()
//i++ --> i = i+1
for(let i= 1; i<=5; i++){
    console.log(i)
}
let lista = [1,2,3,4];
let objeto = {
    pro1: "valor1",
    prop2: 0
}
console.log(objeto)
console.log(objeto.pro1)
console.log(objeto["prop2"])

const span = document.querySelector(".spanName")
span.textContent= name;

const divParagraph = document.querySelector(".paragraph");

divParagraph.innerHTML = "<p>Tengo hambre</p>";

const listaItem= document.querySelector(".lista")
listaItem.innerHTML= "<li>item 1 </li> <li>item 2 </li>"

const pet={
    name:"luna",
    age:5,
    race: "chihuahua"
}
const namePet= document.querySelector(".namePet")
const description= document.querySelector(".description")
namePet.textContent =` Nombre: ${pet.name}` 
description.textContent= `Edad: ${pet.age}, Raza: ${pet.race}`