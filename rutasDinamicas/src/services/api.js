export const getDataApi = async () => {

    const resp = await fetch("https://randomuser.me/api/?results=20")
    const data = await resp.json()
    //edad, nombre, apellido,ciudad, pais, foto,email, id
    const cleanData = data.results.map(item => {
        return {
            id: item.login.uuid,
            name: item.name.first + " " + item.name.last,
            city: item.locarion.city,
            country: item.locarion.country,
            image: item.picture.large,
            email: item.email,
            gender: item.gender,
            age: item.dob.age
        }
    })
    return cleanData;
}
export const getDataLS = (key, valueDefault) => {
    const dataLs = localStorage.getItem(key)
    if (!dataLs) {
        return valueDefault;
    } else {
        const data = JSON.parse(dataLs)
        return data
    }
}