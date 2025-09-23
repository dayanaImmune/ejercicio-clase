import "../css/App.css"
import Button from "./Button"
import Form from "./Form"
import Image from "./Image"
import List from "./List"

function App() {
  const nameUser = "Dayana"
  const email = "email@gmail.com"
  const lastName =  "Romero"

  return (
    <>
      <h1>Titulo de la web</h1>
      <Button/>
      <List name={nameUser} email={email} lastName={lastName}/>
      <List name="Anacleta" email="ana@ana" lastName= "ramirez"/>
      <Image/>
      <Form/>
    </>
  )
}

export default App


