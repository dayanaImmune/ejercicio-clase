import { useState } from "react"
import "../css/App.css"
import data from "./data.json"
import Form from "./Form"
import List from "./List"

function App() {
  const [list, setList] = useState(data);

  const addNewGame =(game)=>{
    game.id = list.length + 1
    setList([
      ...list, game
    ])
  }
  return (
    <>
       <h1>Videojuegos</h1>
       <Form addNewGame = {addNewGame}/>
       <List data = {list}/>
    </>
  )
}

export default App
