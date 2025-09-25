import ListCharacters from "./ListCharacters"
import Form from "./Form"

function Home({ setSearch, error, info }) {
    return (
        <div>
            <h1>Api Rick and Morty</h1>
            <Form setSearch={setSearch} error={error} />
            <ListCharacters info={info} />
        </div>
    )
}

export default Home