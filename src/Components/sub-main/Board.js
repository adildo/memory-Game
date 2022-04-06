import React, {useState, useEffect} from 'react';
import '../styles/board.css'
function Board(props) {
    
    const [pokemons, setPokemons] = useState([])
    

    const shuffle = (array) => {
        let currentIndex = array.length,  randomIndex;
        
        while (currentIndex !== 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        
        return array;
    }
    useEffect(() => {
        
        const getPokemon = async (pokemon, index) => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
            const data = await response.json();
            const pokemonData = { id: index, name: pokemon, url: data.sprites.other.dream_world.front_default}
            return pokemonData
        }
        const pokemonPromiseArr = props.pokemonList.map((pokemon, index) => getPokemon(pokemon, index))
        Promise.all(pokemonPromiseArr).then(pokemonArr => setPokemons(pokemonArr))
    }, [])

    useEffect(() => {
        shuffle(pokemons)
    },props.current)
    
  return (
    <div id='board'>
        {pokemons.map((pokemon) => {
            return <div key={pokemon.id} className="pokemonCard" name={pokemon.name} onClick={props.choosePokemon}>
                        <p>{pokemon.name}</p>
                        <img src={pokemon.url} alt={`${pokemon.name} pic`} name={pokemon.name}/>
                   </div>
        })}
    </div>
  );
}

export default Board;