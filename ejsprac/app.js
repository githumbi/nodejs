const express = require('express')
const app = express()

app.get("/", (req,res)=>{
    res.render("home.ejs")
})

app.get("/about/:name", (req,res)=>{
    var myname = req.params.name
    res.render("about.ejs",{myname})
})

app.listen(3000, (req, res)=> console.log("port 3000 opened"))