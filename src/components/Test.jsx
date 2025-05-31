import { useState, useEffect } from "react"

/**/

let cats = []
export default function Test() {
    const [catFact, setCatFact] = useState('')
    const [catImages, setCatImages] = useState([])

    const fetchCatFact = function() {
        fetch('https://meowfacts.herokuapp.com/')
                .then((response) => response.json())
                .then((catData) => {
                    setCatFact(catData.data[0])
                })
    }

    useEffect(() => {
        fetchCatFact()
    }, [])

    //fetch cat images
    useEffect(() => {
        fetch('https://cataas.com/api/cats?limit=12&skip=0')
                .then((response) => response.json())
                .then((catimagesJSON) => {
                    cats = catimagesJSON.map(json => {
                        return {
                            id: json.id,
                            url: `https://cataas.com/cat/${json.id}?position=center&width=250`
                        }
                    })
                    setCatImages(cats)

                })
    }, [])

    const consoleLogCats = function() {
        console.log(catImages)
    }

    return(
        <div className="test-fetch">
            <button onClick={fetchCatFact}>Generate cat fact</button>
            <p>{catFact}</p>
            <div className="cat-image-container">
                {catImages.map((catImage) => {
                    return <img key={catImage.id} src={catImage.url}/>
                })}
            </div>            
            <button onClick={consoleLogCats}>console log "cats"</button>
        </div>
    )
}