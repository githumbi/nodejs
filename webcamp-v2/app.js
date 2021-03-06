const express = require("express"),
      app = express(),
      bodyParser = require("body-parser"),
      mongoose = require("mongoose")

app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "ejs")

//connect to db
mongoose.connect("mongodb://localhost/campsites_db")

//create schema
var campSchema = new mongoose.Schema({
    name: String,
    imgurl: String,
    description: String
})

//
var camp = mongoose.model("camp", campSchema)


//home page
app.get("/", (req,res)=>{
    res.render("landing")
    
})

//INDEX page
//campground page with name and images
app.get("/campgrounds", (req, res)=>{
   //fetch campgrounds from database
   camp.find((err,campsites)=>{
       if (err) {
           console.log(err)
       } else {
           console.log("succes listing!!")
           res.render("index", {campgrounds: campsites})
       }
   })
  
})

//post name and imgurl
app.post("/campgrounds", (req,res)=>{
  var name =   req.body.name,
      imgurl=   req.body.imgurl,
      desc = req.body.description

  newcampgrounds= {name: name, imgurl: imgurl, description: desc}

//add campground to db
  camp.create(newcampgrounds,(err,redirect)=>{
      if (err) {
          console.log(err)
      } else {
           //redirect to campground
             res.redirect("/campgrounds")
      }
  })
  
   
})

//add new image and name
app.get("/campgrounds/new",(req,res)=>{
    res.render("input")
})

//SHOW -more info about one campsite
app.get("/campgrounds/:id",(req,res)=>{
    //find campground by id
    camp.findById(req.params.id, (err,foundcamp)=>{
        if (err) {
            console.log(err)
        }else{
            //render that campground details with that id
            res.render("show", {campgrounds: foundcamp })
        }
    })
    
})

app.listen(3000, ()=>{
    console.log("server started")
})