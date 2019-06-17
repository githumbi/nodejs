const express = require("express")
const app = express()

//enable server t serve public directory
app.use(express.static("public"))

//tell that templates are in .ejs
app.set("view engine","ejs")

app.get('/title', (req, res)=> {
    var title = [
        {names: "hello world book", author: "jseph Jordin"},
        {names: "javascript beginner" , author: "Doreen Teresa"}
    ]
    res.render("index",{myname: title})
})

app.get("/movies", (req,res)=>{
    var movies = [
        {name: "avengers", company: "marvel"},
        {name: "Titanic", company: "Nova"}
    ]

    res.render("movies", {movies: movies})
})


app.listen(3000, ()=>console.log('listening at 3000'))