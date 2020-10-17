// import Pokemons from "./pokemon"

class App extends React.Component {
    render() {

        return (
            <div>
                <h1 className="main-heading">Pokidex - Kento Region</h1>
                <div className="main-container">
                    {
                        pokemons.map(pokemon => {
                            return (
                                <Pokidex
                                    eng_name={pokemon.english_name}
                                    jap_name={pokemon.japanese_name}
                                    key={pokemon.pokidex_index}
                                    index={pokemon.pokidex_index}
                                    type={pokemon.type}
                                    url={pokemon.img}
                                    evolve_into={pokemon.Evolves_into}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));