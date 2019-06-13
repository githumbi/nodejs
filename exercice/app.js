const express = require('express')
const app = express()

app.get('/animals', (req, res)=> res.send("main pge"))

app.get("/types/:animal", (req, res) => {
   
    

    // if(animal === 'cow'){
    //     sound = 'mooo'
    // }else if(animal === 'dog'){
    //     sound = "woof"
    // }else if(animal === 'sheep'){
    //     sound = 'meee'
    // }
    //use string instead 
    var sound = {
        cat : "meoow",
        dog : "woof",
        cow : "mooo"
    }
    var animal = req.params.animal
    sound = sound[animal]
    
    res.send("the animal is " + animal + " and the sound is '"+ sound + "'")
})

//repeat the message sevral times
app.get('/repeat/:message/:times', (req,res)=>{
    var message = req.params.message
    var times = Number(req.params.times)
    var results = ""
    for(var i = 0; i < times; i++){
        results += message + " "
    }

    res.send(results)
   

})

app.listen(3000, ()=> console.log("port 3000 open"))





 