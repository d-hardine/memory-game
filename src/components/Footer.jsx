import { useState, useEffect } from "react"
import { getCatFacts } from "./fetch-cat-api"
import '../styles/Footer.css'

export default function Footer() {
    const [catFact, setCatFact] = useState('')

    //fetch cat facts
    async function fetchFacts() {
        const facts = await getCatFacts()
        setCatFact(facts)
    }

    useEffect(() => {
        fetchFacts()
    }, [])

    return (
        <footer className='footer'>
            <div className="footer-container">
                <p>{catFact}</p>
                <button className="footer-btn" onClick={fetchFacts}>More cat fact</button>
            </div>
        </footer>
    )
}