import PokemonCard from '../components/PokemonCard.jsx'
import { pokemons } from '../data/pokemons.js'
import './PokemonList.css'

function PokemonList() {
  return (
    <main className="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </main>
  )
}

export default PokemonList
