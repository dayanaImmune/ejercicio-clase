import { useState } from "react"

//hooks, useState, useEffect, useContext, useReducer, useRef
function Button() {

    const [text, setText] = useState("")
    
    const handleClick =(ev)=>{
        ev.target.classList.toggle("darkMode")
       setText("Bienvenido")
    } 
  return (
    <div>
        
        <button className="" onClick={handleClick}>
            cambiar modo
        </button>
        <p>
            {text}
        </p>
    </div>
  )
}

export default Button