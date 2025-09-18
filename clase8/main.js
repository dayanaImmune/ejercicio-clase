/*fetch("https://swapi.dev/api/people/")
    .then(resp=> resp.json())
    .then(data=>{
        console.log(data)
    })
    */

const ulElement = document.querySelector(".people")


// 4.- se le añade la clase al LI que se ha clicado
function handleLi (ev){
    const a = ev.target // elemento sobre el que se hizo click
    const b = ev.currentTarget // elemento que tiene el addEventListener
    console.log(a)
    console.log(b)
    //classList.add
    ev.currentTarget.classList.add("selected")
}
//3.- escuchamos eventos sobre cada uno de los li
function listerLi(){
    const listLi = document.querySelectorAll(".itemLi")
    for (const li of listLi) {
        li.addEventListener("click", handleLi)
        //click, change, input, submit, focus, blur,mouseover, keypress, keyDown, scroll
    }
}
//2.- Renderizamos los datos de la api en la ul
function renderPeople(list){
    for (const element of list) {
        ulElement.innerHTML +=  `
        <li class="itemLi">
           <span> ${element.name} </span>  --
           <span> ${element.gender} </span>
        </li>`
    }
    listerLi()
}

//1.- hicimos peticion a la api para obttener datos de las personajes
async function getDataApi(){
    const resp = await fetch("https://swapi.dev/api/people/")
    //console.log(resp)
    const data = await resp.json()
    //console.log(data)
    renderPeople(data.results)
}
getDataApi()


