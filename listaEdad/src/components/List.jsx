
function List({data,deleteUser,flag}) {

  const handleRemove=(ev)=>{
    //ejecutar la funcion de eliminar del array
    const id= parseInt(ev.target.id)
    deleteUser(id, flag)
  }

  return (
    <div>
        {data.map(item => <article>
          <h4>{item.nombre}- {item.edad}</h4>
          <button onClick={handleRemove} id={item.id}>X</button>
        </article> )}
    </div>
  )
}

export default List