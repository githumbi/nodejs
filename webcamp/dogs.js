const mongoose = require("mongoose")
//connect
mongoose.connect("mongodb://localhost/dogs")

var dogSchema = new mongoose.Schema({
    name: String,
    type: String,
    total: Number

})

var dog = mongoose.model("dog",dogSchema)

dog.create({
    name: "tommy",
    type: "poodle",
    total: 5
},(err,list)=>{
    if(err){
        console.log("error occured")
    }else{
        console.log("NEW DOG ADDED")
        console.log(list)
        
    }
})

dog.find((err,list)=>{
    if (err) {
        console.log("ERROR OCCURED")
    }else{
        console.log("LIST OF DOGS IN DB")
        console.log(list)
    }
})