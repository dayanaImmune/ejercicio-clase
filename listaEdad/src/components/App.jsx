import { useState } from "react"
import "../css/App.css"

import Form from "./Form"
import List from "./List"

function App() {
  const [listOne, setListOne] = useState([]);
  const [listTwo, setListTwo] = useState([]);

  const addNewUser =(user)=>{
    if(user.edad >= 18){
      user.id = listTwo.length + 1
      setListTwo([
        ...listTwo,user
      ])
    }else{
      user.id = listOne.length +1
      setListOne([
        ...listOne, user
      ])
    }
  }

  const deleteUser =(id, flag)=>{
    console.log(id,flag)
    if(flag==="one"){
      const newArray =  listOne.filter(item => item.id  !== id)
      setListOne(newArray)
    }else{
      const newArray =  listTwo.filter(item => item.id  !== id)
      setListTwo(newArray)
    }
  }
  return (
    <>
       <h1>Lista de edades </h1>
       <Form addNewUser = {addNewUser}/>
       <section className="flex">
        <List  data={listOne} deleteUser= {deleteUser} flag="one"/>
        <List  data={listTwo} deleteUser= {deleteUser} flag="two" />
       </section>
    </>
  )
}
export default App
