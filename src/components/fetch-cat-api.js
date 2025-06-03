//fetch cat facts
async function getCatFacts() {
    const response = await fetch('https://meowfacts.herokuapp.com/')
    const data = await response.json()

    return data.data[0]
}

//fetch cat images
async function getCatImages() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=12&api_key=live_4N6Ryn8KVEpBiilnAf8hTPiKoXaSslmF7L2OdVCzxvmR5GNAPJjCYCVz4HFfcEdq')
    const catData = await response.json()

    let heightValid = []
    for(let i=0; i<catData.length; i++) {
        if(catData[i].height > catData[i].width) {
            heightValid[i] = false
        }
        else {
            heightValid[i] = true
        }
    }
    if(heightValid == false) {
        await getCatImages()
    } else {
        return catData
    }
}
//shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array; 
}

let a = [1,2,3,4,5]

export {getCatFacts, getCatImages, shuffleArray}