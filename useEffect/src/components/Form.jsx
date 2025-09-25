

function Form({setSearch, error}) {

const handleChange= (ev)=>{
    setSearch(ev.target.value)
}

  return (
    <>
    <form>
      <input type="text" id="name" placeholder="buscar por nombre" onChange={handleChange}/>
    </form>
    <p>{error}</p>
  </>
  )
}

export default Form