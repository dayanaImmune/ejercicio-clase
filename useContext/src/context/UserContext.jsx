const { createContext, useState } = require("react");

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const login = (name, email) => {
        setUser({ name, email })
    }
    const logout = () => {
        setUser(null)
    }
    return <UserContext.Provider value={{ user, login, logout }}>
        {children}
    </UserContext.Provider>

}