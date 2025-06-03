import { useState, useEffect } from "react"
import { getCatImages, shuffleArray } from "./fetch-cat-api"
import '../styles/Main.css'

export default function Main() {
    const [catImages, setCatImages] = useState([])

    //fetch cat images
    useEffect(() => {
        async function fetchImages() {
            const images = await getCatImages()
            setCatImages(images)
        }
        fetchImages()
    }, [])

    function buttonHandler() {
        console.log(catImages)
    }

    const imageHandler = (e) => {
        let newCatImages = [] //to prevent mutation, react f**king sucks
        for(let i =0; i< catImages.length; i++) {
            newCatImages[i] = catImages[i]
        }
        let shuffledCatImages = shuffleArray(newCatImages)
        setCatImages(shuffledCatImages)

        console.log(e.target.id)
    }

    return(
        <main>
            <p>Play Memory Game with Cats!</p>
            <p>There are 12 different cat images on the board. Click on each card once until you click them all. </p>
            <br />
            <button onClick={buttonHandler}>console log catImages</button>
            <div className="cat-image-container">
                {catImages.map((catImage) => {
                    return <img className="cat-image" onClick={imageHandler} key={catImage.id} id={catImage.id} src={catImage.url} width={350}/>
                })}
            </div>
        </main>
    )
}