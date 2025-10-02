import "../css/detail.css"
import { Link, useParams } from "react-router-dom"


function Detail({ users }) {
    const params = useParams()
    const id = params.id;

    const dataUser = users.find(item => item.id === id)

    return (
        <div>
            <Link to="/">Volver a home</Link>
            {dataUser ?
                <section>
                    <img src={dataUser.image} alt="" />
                    <div>
                        datos
                    </div>
                </section> :
                <p>Usuario no encontrado</p>
            }


        </div>
    )
}

export default Detail