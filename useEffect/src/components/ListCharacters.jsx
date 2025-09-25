
function ListCharacters({info}) {
  return (
    <div className="container">
        {info.map(item =><article key={item.id}>
            <img src={item.image} alt="" />
            <h4>{item.name}</h4>
        </article>)}
    </div>
  )
}

export default ListCharacters