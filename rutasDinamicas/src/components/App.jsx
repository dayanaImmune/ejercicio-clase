import { useState } from "react"
import { getDataApi, getDataLS } from "../services/api"
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Detail from "./Detail"

function App() {

  const [users, setUsers] = useState(getDataLS("users", []))

  useEffect(() => {
    const get = async () => {
      const data = await getDataApi()
      setUsers(data)
      localStorage.setItem("users", JSON.stringify(data))
    }
    if (users.length === 0) {
      get()
    }

  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home users={users} />} />
        <Route path="/detail/:id" element={<Detail users={users} />} />
      </Routes>
    </>
  )
}

export default App
