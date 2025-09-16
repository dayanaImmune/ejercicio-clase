const listCharacters = document.querySelector(".characters")

// peticiones al servidor
// pedir los datos  a la api de Rick and Morty
//asincronia

//promesa--> pendiente, resuelta, error
fetch("https://rickandmortyapi.com/api/character")
.then((response)=> response.json())
.then((data)=>{
    console.log(data)
    renderCharacters(data.results) // lista de los personajes
})

function renderCharacters(array){
    for(const char of array){
        listCharacters.innerHTML += `
        <li>
            <img src="${char.image}" alt="">
            <h4>${char.name}</h4>
        </li> `
    }
}
console.log("holiss")