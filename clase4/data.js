const pelis  = [
  {
    titulo: "El Señor de los Anillos: La Comunidad del Anillo",
    director: "Peter Jackson",
    anio: 2001,
    protagonistas: ["Frodo", "Gandalf", "Aragorn", "Legolas"],
    duracionMin: 178
  },
  {
    titulo: "Harry Potter y la Piedra Filosofal",
    director: "Chris Columbus",
    anio: 2001,
    protagonistas: ["Harry Potter", "Hermione Granger", "Ron Weasley", "Dumbledore"],
    duracionMin: 152
  },
  {
    titulo: "Las Crónicas de Narnia: El León, la Bruja y el Armario",
    director: "Andrew Adamson",
    anio: 2005,
    protagonistas: ["Lucy Pevensie", "Edmund Pevensie", "Aslan", "La Bruja Blanca"],
    duracionMin: 143
  },
  {
    titulo: "El Laberinto del Fauno",
    director: "Guillermo del Toro",
    anio: 2006,
    protagonistas: ["Ofelia", "Fauno", "Capitán Vidal", "Mercedes"],
    duracionMin: 118
  },
  {
    titulo: "Alicia en el País de las Maravillas",
    director: "Tim Burton",
    anio: 2010,
    protagonistas: ["Alicia", "Sombrerero Loco", "Reina Roja", "Gato de Cheshire"],
    duracionMin: 108
  }
]

const btn = document.querySelector(".btn")
const lista = document.querySelector(".lista")


function renderProtagonistas(lista){
  let html = ""
  for(const prota of lista){
    html += `<li>${prota}</li>`
  }
  return `<ul>${html}</ul>`
}
function render(peli){
  return `<li> 
      Titulo: ${peli.titulo}
      Año : ${peli.anio},
      Protagonistas : ${renderProtagonistas(peli.protagonistas)}
    </li>`
}
btn.addEventListener("click", ()=>{ 
  lista.innerHTML ="";
  for (const peli of pelis) {
    lista.innerHTML += render(peli)
  }
  //btn.classList.add("hidden")
})


