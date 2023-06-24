



let myfavorites = []

function postFav(req, res){
    const character = req.body
    myfavorites.push(character)
    res.status(200).json(myfavorites)
}
function deleteFav (req, res){
    const {id} = req.params
    const filtered = myfavorites.filter((character) => character.id !== Number(id))
    
    myfavorites = filtered
    
    res.status(200).json(filtered)
}

module.exports = {
    postFav, 
    deleteFav,
}
    