/**
 * 1.- Crear el Hmtl, (form boton y input:text (nombre) ) 
 * 2.- Escuchar evento click sobre el boton
 *  2.1 .- Recoger el valor del nombre a buscar
 * 3.- Cuando ocurra el evento  hacemos la peticion a la api  fetch()
 * 4.- renderizar los personajes
 */

const btn  = document.querySelector(".btn")
const inputName  = document.querySelector(".inputName")
const listChar  = document.querySelector(".list")
const inputStatus  = document.querySelectorAll(".status")

function renderCharacters(list){
    for (const element of list) {
        listChar.innerHTML +=  `
        <li>
            <img src= "${element.image}" />
            <h4>${element.name} </h4>
        </li>
        `
    }
}
function getDataApi(name, status){
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`)
    .then(response => response.json())
    .then(data=> {
        console.log(data)
        renderCharacters(data.results)
    })
}
function handleForm (ev){
    ev.preventDefault()
    const valueName = inputName.value
    let status;
    for(let i of inputStatus){
        //i.checked === true
        if(i.checked){
            status = i.value
        }
    }
    console.log(status)
    getDataApi(valueName, status )
}
btn.addEventListener("click", handleForm)