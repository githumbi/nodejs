const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", "ejs")

var campgrounds = [
    {name: "moountain view", imgurl: "https://www.campsitephotos.com/photo/camp/16222/feature_Fruita_Campground-f3.jpg"},
    {name: "hills view", imgurl: "https://www.campsitephotos.com/photo/camp/63464/feature_Pierson_Ranch-f3.jpg"},
    {name: "moountain view", imgurl: "https://www.campsitephotos.com/photo/camp/16222/feature_Fruita_Campground-f3.jpg"},
    {name: "hills view", imgurl: "https://www.campsitephotos.com/photo/camp/63464/feature_Pierson_Ranch-f3.jpg"},
    {name: "moountain view", imgurl: "https://www.campsitephotos.com/photo/camp/16222/feature_Fruita_Campground-f3.jpg"},
    {name: "hills view", imgurl: "https://www.campsitephotos.com/photo/camp/63464/feature_Pierson_Ranch-f3.jpg"}
]

//home page
app.get("/", (req,res)=>{
    res.render("landing")
    
})

//campground page with name and images
app.get("/campgrounds", (req, res)=>{
   
   res.render("landpage", {campgrounds: campgrounds})
})

//post name and imgurl
app.post("/campgrounds", (req,res)=>{
  var name =   req.body.name
  var imgurl=   req.body.imgurl
  var newcampgrounds= {name: name, imgurl: imgurl}

  //add to campground string
  campgrounds.push(newcampgrounds)
    //redirect to campground
    res.redirect("/campgrounds")
})

//add new image and name
app.get("/campgrounds/new",(req,res)=>{
    res.render("input")
})

app.listen(3000, ()=>{
    console.log("server started")
})