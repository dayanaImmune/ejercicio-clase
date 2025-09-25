
import Card from './Card'

function List(props) {
    //props.data()
  return (
    <div>
        {props.data.map(item => <Card item={item} key={item.id}/> )}
    </div>
  )
}

export default List