const express = require("express"),
    faker = require("faker"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    // icons = require("evil-icons"),
    app = express()

mongoose.connect("mongodb://localhost/blog_db")
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))


//CONFIG
//schema
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
})

Blog = mongoose.model("Blog", blogSchema)

// Blog.create({
//     title: "first blog",
//     image: "https://static1.visitestonia.com/images/3103015/Seaside+heated+tent+and+grilling+terrace+-+Torni+Talu+Holiday+Cottages.JPG",
//     body: "sample of the body"
// })

//fake data form FAKER :)

// Blog.create({
//     title: faker.name.title(),
//     body: faker.lorem.paragraph(),
//     image: faker.image.imageUrl()
// })


//RESTFUL Routes
app.get("/", (req, res) => {
    res.redirect("/blogs")
})

//INEDX ROUTE
app.get("/blogs", (req, res) => {
    Blog.find({}, (err, blogs) => {
        if (err) {
            console.log("didint work")
        } else {
            res.render("index", { blogs: blogs })
        }
    })

})

//CREATE ROUTE
app.get("/blogs/new", (req, res) => {
    res.render("new")
})

//POST ROUTE
app.post("/blogs", (req, res) => {
    //create
    Blog.create(req.body.blog, (err, newBlog) => {
        if (err) {
            res.render("new")
        } else {
            //redirect
            res.redirect("/blogs")
        }
    })

})

app.listen(3000, () => {
    console.log("listening to port 3000")
})