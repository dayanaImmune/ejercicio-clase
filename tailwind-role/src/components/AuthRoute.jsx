import { Navigate } from "react-router-dom"


function AuthRoute({ user, component, role }) {
    if (user && user.role === role) {
        return component
    } else {
        return <Navigate to="/" />
    }
}

export default AuthRoute