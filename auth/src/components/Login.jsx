import { useState } from "react"
import { postLogin } from "../services/api"
import { useNavigate } from "react-router-dom"

const initial_state = {
    username: "", password: ""
}
function Login({ setUserLogin }) {
    const [user, setUser] = useState(initial_state)
    const navigate = useNavigate()

    const handleInput = (ev) => {
        setUser({ ...user, [ev.target.id]: ev.target.value })
    }
    const handleForm = async (ev) => {
        ev.preventDefault()
        const resp = await postLogin(user)
        const token = resp.accessToken ? resp.accessToken : ""
        localStorage.setItem("token", token)
        if (token) {
            setUserLogin(resp)
            navigate("/profile")
        }

    }

    return (
        <form onChange={handleInput} onSubmit={handleForm}>
            <div>
                <label htmlFor="">Nombre usuario</label>
                <input type="text" id="username" />
            </div>
            <div>
                <label htmlFor="">Contraseña</label>
                <input type="password" id="password" />
            </div>
            <button>Aceptar</button>
        </form>
    )
}

export default Login