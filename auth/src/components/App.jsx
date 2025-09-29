import { Route, Routes } from "react-router-dom"
import "../css/App.css"
import Home from "./Home"
import Profile from "./Profile"
import Login from "./Login"
import Nav from "./Nav"
import { useState } from "react"
import AuthRoute from "./AuthRoute"
function App() {
  const [userLogin, setUserLogin] = useState(null)

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<AuthRoute
          user={userLogin}
          component={<Profile userLogin={userLogin} />}
        />} />
        <Route path="/login" element={<Login setUserLogin={setUserLogin} />} />
      </Routes>
    </>
  )
}

export default App
