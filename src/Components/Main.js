import React, {useState} from 'react';
import Board from './sub-main/Board';
import './styles/main.css'

function Main(Props) {

    const [highest, setHighest] = useState(0)
    const [current, setCurrent] = useState(0)

    
    const [chosens, setChosens] = useState([])
    const [pokemonList, setPokemonList] = useState(['mewtwo', 'mew', 'arceus', 'rayquaza', 'lugia', 'alakazam', 'ditto', 'gengar', 'charizard', 'dragonite', 'blastoise', 'gyarados'])

    const choosePokemon = (e) => {
        if (chosens.includes(e.target.name)){
            setCurrent(0)
            setChosens([])
            console.log('exists')
        }
        else {
            setChosens(oldArray => [...oldArray, e.target.name])
            setCurrent(current + 1)
            if (current >= highest){
                setHighest(highest + 1)
            }
        }
    }
    
    
  return (
    <div id='main'>
        <h2>Current Score: {current} highest Score: {highest}</h2>
        <Board pokemonList={pokemonList} choosePokemon={choosePokemon}/>
    </div>
  );
}

export default Main;