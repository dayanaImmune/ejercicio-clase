const { createContext, useState } = require("react");

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    const addProducts = () => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }

    const deleteProduct = (id) => {
        const newArray = products.filter(item => item.id !== parseInt(id))
        setProducts(newArray)
    }
    return <ProductContext.Provider value={{ products, addProducts, deleteProduct }}>
        {children}
    </ProductContext.Provider>

}