import { Route, Routes } from "react-router-dom"
import "../css/App.css"
import Home from "./Home"
import Products from "./Products"
import { useState } from "react"
import Header from "./Header"
import Services from "./Services"
import AuthRoute from "./AuthRoute"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'; // Opcional
import { fab } from '@fortawesome/free-brands-svg-icons'; // Opcional



function App() {

  /*
  Para obtener el role del usuario-> hacer un inicio de sesion
  "user" --> acceda a servicios
  "consulting" --> acceder a productos
  */
  const [user, setUser] = useState({ id: 1, name: "anacleta", role: "user" })

  return (
    <>

      <FontAwesomeIcon icon="fa-solid fa-house" />
      <h1>Titulo de la web</h1>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={
          <AuthRoute
            user={user}
            component={<Products />}
            role="consulting" />
        } />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  )
}

export default App
