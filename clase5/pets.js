const pets = [
    {
        id:1,
        name: "fifi",
        age: 8,
        owner:{
            name:"Anacleta",
            phone: 5632145
        }
    },
     {
        id:2,
        name: "zeus",
        age: 2,
        owner:{
            name:"pepe",
            phone: 778899
        }
    },
     {
        id:3,
        name: "toby",
        age:4,
        owner:{
            name:"luisana",
            phone: 11223
        }
    },
]

/*
1.- mostrar un listado con las mascotas y su edad
2.- cada mascota debe tener un enlace o boton  "ver dueño"
3.- Al hacer click en ver dueño,   se debe mostrar en  un <p> los datos de dueño
*/

const list = document.querySelector(".list");
const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".btnClose")
const h3Modal = document.querySelector(".modal h3")
const h4Modal = document.querySelector(".modal h4")

closeBtn.addEventListener("click", ()=>{
    modal.classList.add("hidden")
})
function showOwner (ev){
    const idPet = parseInt(ev.target.id)
    //mostrar la ventana modal
    modal.classList.remove("hidden")
    //mostrar el propietario

    //metodo find()---> busca dentro del array el primer elemento que cumpla con una condicion  indicada
    const petFind = pets.find((pet)=> pet.id === idPet)
    h3Modal.textContent = petFind.owner.name
    h4Modal.textContent = petFind.owner.phone
}
function listenerButton (){
    const listBtn = document.querySelectorAll(".btn") // array
    for (const btn of listBtn) {
    btn.addEventListener("click",showOwner)
    }
}
function renderPets(){
    for(const pet of pets){
        list.innerHTML += `<li>
        Mascota :${pet.name} 
        Edad: ${pet.age} 
        <button class= "btn" id="${pet.id}"> Ver Dueño </button>
        </li>`
    }
    listenerButton()
}

//ejecutan al cargar la pagina
renderPets()
