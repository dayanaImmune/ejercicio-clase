import { useContext, useEffect } from "react"
import { ProductContext } from "../context/ProductContext"


function ListProducts() {
    const { products, addProduct, deleteProduct } = useContext(ProductContext)

    useEffect(() => {
        addProduct();
    }, [])

    const handleClick = (ev) => {
        deleteProduct(ev.targte.id)
    }
    return (
        <div>
            {products.map(item => <p> {item.title}
                <span id={item.id} onClick={handleClick}> X</span> </p>)}
        </div>
    )
}

export default ListProducts