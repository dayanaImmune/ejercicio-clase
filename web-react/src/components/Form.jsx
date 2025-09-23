import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState("")
    const [age, setAge] = useState(null)
    const [msg, setMsg] = useState("")
    const [color, setColor] = useState("")

    const handleName = (ev)=>{
        setName(ev.target.value)
    }
     const handleAge = (ev)=>{
        setAge(parseInt(ev.target.value))
    }
    const handleClick =(ev)=>{
        ev.preventDefault()
        //age=== null || name=== "" 
        if(!age || !name){
            setMsg(`Debe rellenar todos lo campos`)
            setColor("red")
        }
        else{
            if(age <18){
                setColor("red")
            }else{
                setColor("green")
            }
            setMsg(` Bienvenido: ${name} y tienes ${age} años`)
        }
    }

  return (
    <>
        <form>
            <div>
                <input type="text" placeholder="Indica el nombre" onChange={handleName}/>
            </div>
            <div>
                <input type="number" placeholder="Indica edad" onChange={handleAge} />
            </div>
                <input type="submit"  value="publicar" onClick={handleClick}/>
        </form>
        <p className={color}>
           {msg}
        </p>
    </>
  )
}

export default Form