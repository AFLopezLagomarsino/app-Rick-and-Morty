const axios = require ("axios")


function getCharById (res, id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
        const datos = response.data
        const character = {
           id : id,
           name : datos.name,
           gender : datos.gender,
           species : datos.species,
           origin : datos.origin.name,
           image : datos.image,
           status: datos.status
        }
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(character))
    })
    .catch((error) =>{
        res.writeHead(500, { "Content-Type": "text/plain" })
        res.end(error.message)
    })
}





module.exports = getCharById