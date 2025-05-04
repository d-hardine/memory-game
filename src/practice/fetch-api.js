/*fetch('https://pokeapi.co/api/v2/pokemon/bob')
    .then(response => {
        if(!response.ok)
            throw Error('nguwawor')
        else
            return resolve.json()
    })
    .then(data => console.log(data.name, data.weight, data.id))
    .catch(error => console.log(error))*/

async function fetchData(pokemon) {
    try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        if(!response.ok) {
            throw new Error('nguwawor')
        }
        else {
            const data = await response.json()
            console.log(data.stats[1])
        }
    }
    catch(error) {
        console.error(error)
    }
}

fetchData('bob')