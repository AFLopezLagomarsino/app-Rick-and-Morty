const http = require("http");
//const characters = require ("./utils/data")
const getCharById = require ("./controllers/getCharById")

http.createServer((req, res) =>{
const {url} = req

res.setHeader('Access-Control-Allow-Origin', '*');

    if(url.includes("rickandmorty/character")){
        let urlId = url.split("/").pop()
        getCharById(res, urlId)
    }
}).listen(3001)





