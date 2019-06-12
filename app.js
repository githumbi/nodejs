const express = require('express')
const app = express()

app.get('/', (req, res) => res.send("home page") )

//go to /about
app.get('/about', function(req, res) {
    res.send("about page")
    console.log("/about opened")
})

//SUBROUTING
//Used if in a specific path there are sub-branches
app.get('/posts/comments/:anybranch', (req, res)=> res.send("this is a subroute"))

//any path not included to read 'wrong path'
app.get('*', (req, res)=> res.send("wrong path"))


app.listen(3000,()=> console.log("port 3000 listening"))

