
// CREADO CON HTTP
// const http = require("http");
// //const characters = require ("./utils/data")
// const getCharById = require ("./controllers/getCharById")

// http.createServer((req, res) =>{
// const {url} = req

// res.setHeader('Access-Control-Allow-Origin', '*');

//     if(url.includes("rickandmorty/character")){
//         let urlId = url.split("/").pop()
//         getCharById(res, urlId)
//     }
// }).listen(3001)

const express = require("express")
const server = require ("./App")
const PORT = 3001;
const { conn } = require("./DB_connection")

server.listen(PORT, ()=> {
    conn.sync({force:true})
    console.log(`Server corriendo en el puerto ${PORT}`)
})






