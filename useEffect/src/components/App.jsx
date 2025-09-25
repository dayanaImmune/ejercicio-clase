import { useEffect, useState } from "react"
import "../css/App.css"
import Header from "./Header"
import About from "./About"
import Contact from "./Contact"
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import NotFound from "./NotFound"
function App() {
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data.results);
        /*if(data.results){
          setCharacters(data.results)
        }
        else{
          setCharacters([])
        }*/
        //condicion?algo:otracosa
        setCharacters(data.results ? data.results : [])
        setError(data.error ? `No existe el personaje ${search}` : "")
      })
  }, [search])
  /*
 []--> se ejecuta una sola vez al cargar el componente
 [varState1] -->  la funcion del useEffect se ejecuta cada vez que estas var cambien de valor
  */
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home
          setSearch={setSearch}
          error={error}
          info={characters} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>


    </>
  )
}

export default App
