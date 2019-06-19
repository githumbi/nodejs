const express = require("express")
const app = express()
const bodyParser = require("body-parser")


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", "ejs")

var friends=["john", "paul", "Isabela","maggy",]

app.get("/", (req, res)=>{
    
    res.render("index", {friends: friends})
})

app.post("/friendrequest", (req, res)=>{
    //data sent will be put in newfriends variable
    var newfriends = req.body.newfriend

    //add data to frinds object
    friends.push(newfriends)

    //redirect to home page
    res.redirect("/")
})


app.listen(3000, ()=>{
    console.log("listening to port 3000")
})