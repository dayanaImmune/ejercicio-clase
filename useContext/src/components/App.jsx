import { useContext } from "react"
import "../css/App.css"
import { UserContext } from "../context/UserContext"
import Login from "./Login"
function App() {

  const { user, logout } = useContext(UserContext)

  const handleLogout = () => {
    logout()
  }
  return (
    <>
      <h1>Titulo de la web</h1>
      {user ? <button onClick={handleLogout}>Logout</button> : null}
      <Login />
    </>
  )
}

export default App
