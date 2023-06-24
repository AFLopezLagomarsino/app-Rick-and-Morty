const axios = require ("axios")
const express = require ("express")

// function getCharById (res, id) {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//         const datos = response.data
//         const character = {
//            id : id,
//            name : datos.name,
//            gender : datos.gender,
//            species : datos.species,
//            origin : datos.origin.name,
//            image : datos.image,
//            status: datos.status
//         }
//         res.writeHead(200, { "Content-Type": "application/json" })
//         res.end(JSON.stringify(character))
//     })
//     .catch((error) =>{
//         res.writeHead(500, { "Content-Type": "text/plain" })
//         res.end(error.message)
//     })
// }

const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) => {
    try {
      const {id} = req.params;
  
      const {data} = await axios(URL + id);
  
      const character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin.name,
        image: data.image,
        status: data.status,
        location: data.location.name
      };
  
      character.name
        ? res.status(200).json(character)
        : res.status(404).send("Not found");
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  };
module.exports = getCharById