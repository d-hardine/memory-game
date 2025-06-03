import { useState, useEffect } from "react"
import { getCatImages, shuffleArray } from "./fetch-cat-api"
import '../styles/Main.css'

export default function Main() {
    const [catImages, setCatImages] = useState([])
    const [score, setScore] = useState(0)
    const [popupScore, setPopupScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    const [gameOverPopup, setGameOverPopup] = useState(false)

    //fetch cat images
    async function fetchImages() {
        const images = await getCatImages()
        setCatImages(images)
    }

    useEffect(() => {        
        fetchImages()
    }, [])

    //clicked cat image handler
    const imageHandler = (e) => {
        let newCatImages = [] //to prevent mutation, react f**king sucks
        for(let i =0; i< catImages.length; i++) {
            newCatImages[i] = catImages[i]
        }
        let shuffledCatImages = shuffleArray(newCatImages)
        setCatImages(shuffledCatImages)

        if(e.target.classList.contains('isClicked')) { //if lose
            e.target.classList.remove('isClicked')
            fetchImages()
            setScore(0)
            setGameOverPopup(true)
        } else { //keep playing...
            e.target.classList.add('isClicked')
            setScore(score + 1)
            setPopupScore(score + 1)
            if( score >= bestScore)
                setBestScore(score + 1)
        }
    }

    return(
        <main>
            <div className="top-container">
                <div className="left-container">
                    <p>Play Memory Game with Cats!</p>
                    <p>There are 12 different cat images on the board. Click on each card once until you click them all. </p>
                </div>
                <div className="right-container">
                    <p>Score: {score}</p>
                    <p>Best Score: {bestScore}</p>
                </div>
            </div>
            <div className="cat-image-container">
                {catImages.map((catImage) => {
                    return <img className="cat-image" onClick={imageHandler} key={catImage.id} id={catImage.id} src={catImage.url} width={350}/>
                })}
            </div>
            {gameOverPopup ?
                (<div className="overlay">
                    <div className="popup">
                        <p><b>GAME OVER</b></p>
                        <p>Score: {popupScore}</p>
                        <p>Best Score: {bestScore}</p>
                        <button onClick={() => setGameOverPopup(false)}>Play Again</button>
                    </div>
                </div>)
                : null
            }
        </main>
    )
}