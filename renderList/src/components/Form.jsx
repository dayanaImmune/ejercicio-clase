import { useState } from "react"

const initialState = {
    titulo:"",
    genero:"",
    plataforma: ""
}

function Form(props) {

  const [newGame, setNewGame] = useState(initialState)

  const handleInput = (ev)=>{
    const value = ev.target.value; // lo que escribio el usuario
    const id = ev.target.id;// el input que ha cambiado
    setNewGame({
        ...newGame, //spreadOperator (copia el objeto)
        [id]: value
    })
  }

  const handleClick=(ev)=>{
    ev.preventDefault();
    props.addNewGame(newGame)
  }
  return (
    <form >
        <input type="text" placeholder="indica titulo" onChange={handleInput} id="titulo"/>
        <input type="text" placeholder="indica genero" onChange={handleInput} id="genero"/>
        <input type="text" placeholder="indica plataforma" onChange={handleInput} id="plataforma"/>
        <input type="submit" placeholder="añadir " onClick={handleClick} />
    </form>
  )
}

export default Form