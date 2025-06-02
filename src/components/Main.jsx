import { useState, useEffect } from "react"
import { getCatFacts, getCatImages } from "./fetch-cat-api"
import '../styles/Main.css'

export default function Test() {
    const [catFact, setCatFact] = useState('')
    const [catImages, setCatImages] = useState([])

    //fetch cat facts
    async function fetchFacts() {
        const facts = await getCatFacts()
        setCatFact(facts)
    }

    useState(() => {
        fetchFacts()
    }, [])

    //fetch cat images 2
    useEffect(() => {
        async function fetchImages() {
            const images = await getCatImages()
            setCatImages(images)
        }

        fetchImages()
    }, [])

    return(
        <main>
            <button onClick={fetchFacts}>Generate cat fact</button>
            <p>{catFact}</p>
            <br />
            <div className="cat-image-container">
                {catImages.map((catImage) => {
                    return <img key={catImage.id} src={catImage.url} width={350}/>
                })}
            </div>
        </main>
    )
}