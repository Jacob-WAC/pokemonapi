import React, { useEffect, useState } from "react";
import PokeNames from "./components/pokemonNames";
function App() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((response) => response.json())
            .then((response) => setPokemon(response.results));
    });

    return (
        <div className="App">
            <PokeNames allPokemon={pokemon} />
        </div>
    );
}

export default App;
