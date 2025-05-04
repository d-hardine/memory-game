async function getPokemonImages() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`)

        if(!response.ok)
            throw Error('invalid pokemon')
        else {
            const data = await response.json()
            console.log(data.results[1])
        }
    }
    catch(error) {console.error(error)}
}

//getPokemonImages()

function getRandomNumberArray(length, min, max) {
    let n = min
    const newArray = [];
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if(!newArray.includes(randomNumber))
        newArray.push(randomNumber);
    }
    return newArray;
  }
  
  const randomArray = getRandomNumberArray(12, 0, 1000);
  console.log(randomArray);