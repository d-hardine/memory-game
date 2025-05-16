import { useEffect, useState } from 'react'
import '../styles/Main.css'
import { getPokemonData } from './fetchImages'

export default function Main() {

    const [pokemonCards, setPokemonCards] = useState('')

    useEffect(() => {
        async function fetchData() {
            const initialCards = await getPokemonData()
            setPokemonCards(initialCards)
        }

        fetchData()
    }, [])

    console.log(pokemonCards)

    /*const listItems = pokemonCards.map(card => 
        <li key={card.id}>
            <p>{card.name}</p>
        </li>
    )*/

    return (
        <main>
            <div className="cards-container">
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>                
            </div>
        </main>
    )
}