import { Link } from "react-router-dom"


function ListUsers({ users }) {

    const renderUsers = () => {
        return users.map(item => <Link to={`/detail/${item.id}`}>
            <article key={item.id}>
                <img src={item.image} alt="" />
                <h4>{item.name}</h4>
            </article>
        </Link>)
    }
    return (
        <div>
            {renderUsers()}
        </div>
    )
}

export default ListUsers