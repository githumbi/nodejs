const mongoose = require("mongoose",{ useNewUrlParser: true })
//connect to database "cat". otherwise create it if not there
mongoose.connect("mongodb://localhost/cat_app")

//stucture of schema
var catShema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
})

var Cat = mongoose.model("Cat", catShema)
// var mike= new Cat({
//     name: "mike",
//     age: "5",
//     temperament: "silent"
// })


// //adds new cat to database
// mike.save((err, success)=>{
//     if (err) {
//         console.log("did not add to db")//error if not added
//     }else{
//         console.log("it added to db!!")
//         console.log(success)//shows new cat added on console.log
//     }
// })


//add cat to database
Cat.create({
    name: "gSIM",
    age: "5",
    temperament: "good"
}, (err, cats)=>{ 
    if (err) {
        console.log("not added")
    }else{
        console.log("ADDED NEW CAT")
        console.log(cats)
    }
})


//view cats in the database

Cat.find((err, list)=>{
    if (err) {
        console.log("error occored")
    }else{
        console.log("SEE ALL CATS")
        console.log(list)
    }
})

