const express = require ("express")
const users = require ("../utils/users")

function login(req,res){
    const {email, password} = req.query
    const found = users.find (user => user.email === email && user.password === password)

    const access = found ? true : false
    res.status(200).json({access}) 

    // const acc ={
    //     access:true
    //   }
    // if(email === users.email && password === users.password){
    //     res.status(200).json(acc.access)
    // }else{
    //     res.status(200).json(acc.access = false)
    // }
}

module.exports = login