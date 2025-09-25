function List(props) {
  console.log(props) // objeto
  return (
    <div>
        <ul>
            <li>{props.name}</li>
            <li>{props.email}</li>
            <li>{props.lastName}</li>
        </ul>
    </div>
  )
}

export default List