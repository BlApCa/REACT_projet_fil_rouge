export const getAllPokemons = async (url) => {
    const allPokeReqHeader = new Headers({'Content-Type': 'application/json'});
    const allPokeReqInit = { 
        method: 'GET',
        headers: allPokeReqHeader,
        mode: 'no-cors',
        cache: 'default' ,
    }

    const response = await fetch(url, allPokeReqInit)

	const data = await response.json()
    console.log(data)
    return data
}