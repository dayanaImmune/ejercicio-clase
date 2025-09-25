function Card(props) {
  return (
    <article>
            <h3>{props.item.titulo}</h3>
            <p>{props.item.genero}</p>
            <p>{props.item.plataforma}</p>
    </article>
  )
}

export default Card