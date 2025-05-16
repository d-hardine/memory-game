async function getPokemonData() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=2000`) //fetch every single available pokemon

        if(!response.ok)
            throw Error('invalid response bro')

        const rawPokemonData = await response.json() //json from response

        //randomize the pokemon roster
        let randomizedPokemonsIndexRaw = getRandomNumberArray(12,0,rawPokemonData.results.length)
        let randomizedPokemonsRaw = []

        for(let i=0; i < randomizedPokemonsIndexRaw.length; i++)
            randomizedPokemonsRaw.push(rawPokemonData.results[randomizedPokemonsIndexRaw[i]])

        //fetch the pokemon image
        let pokemonDataResponse = []
        let pokemonData = []
        let pokemonImage = []

        for(let i=0; i<randomizedPokemonsRaw.length; i++) {
            pokemonDataResponse[i] = await fetch(randomizedPokemonsRaw[i].url)
            pokemonData[i] = await pokemonDataResponse[i].json() //json of pokemon data
            pokemonImage[i] = {
                id: crypto.randomUUID(),
                name: pokemonData[i].name,
                image: pokemonData[i].sprites.front_default
            }
        }
        return pokemonImage
    }
    catch(error) {console.error(error)}
}


function getRandomNumberArray(length, min, max) { //randomizer
    let newArray = [];
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if(!newArray.includes(randomNumber))
        newArray.push(randomNumber);
    }

    if(newArray.length < length)
        newArray = getRandomNumberArray(length, min, max)

    return newArray;
}

export { getPokemonData }
