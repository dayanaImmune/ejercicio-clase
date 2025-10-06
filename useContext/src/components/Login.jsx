import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"
function Login() {

    const { login } = useContext(UserContext)
    const [formData, setFormData] = useState({ name: "", email: "" })

    const handleFormData = (ev) => {
        setFormData({ ...formData, [ev.target.id]: ev.target.value })
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        login(formData.name, formData.email)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" id="email" onChange={handleFormData} />
            </div>
            <div>
                <input type="text" id="name" onChange={handleFormData} />
            </div>
            <div>
                <input type="submit" value="login" />
            </div>
        </form>
    )
}

export default Login