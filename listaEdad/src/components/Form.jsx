import { useState } from "react"

const initialState = {
    id:"",
    nombre:"",
    edad:"",
}
function Form({addNewUser}) {
  const [user, setUser] = useState(initialState)

  const handleInput = (ev)=>{
    const value = ev.target.value; // lo que escribio el usuario
    const id = ev.target.id;// el input que ha cambiado
    setUser({
        ...user, //spreadOperator (copia el objeto)
        [id]: value
    })
  }
  const handleClick=(ev)=>{
    ev.preventDefault();
    addNewUser(user)

  }

  return (
    <form >
        <input type="text" placeholder="indica nombre" onChange={handleInput} id="nombre"/>
        <input type="text" placeholder="indica edad" onChange={handleInput} id="edad"/>
        <input type="submit" placeholder="añadir " onClick={handleClick} />
    </form>
  )
}

export default Form