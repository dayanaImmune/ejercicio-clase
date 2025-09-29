export const postLogin = async (user) => {
    const data = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    const respJson = await data.json()
    return respJson
}