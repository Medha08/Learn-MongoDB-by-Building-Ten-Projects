const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('file-system')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname+'/'))

// app.get('/',(req,res)=>{
//      fs.readFile(__dirname+'/index.html',function(err,data){
//          if(!err){
//            res.write(data);
//            console.log("Reading till here...")
//          }else{
//              console.log("Error");
//          }

//         res.end();
//    })
 
// })

app.post('/displaynew',function(req,res){
    let msg = JSON.stringify({"name":req["body"]["usr"],"message":req["body"]["msgText"]});
    fs.writeFile(__dirname+'/messages.json',msg,function(err){
        console.log(err);
    })
    res.redirect('/');
})

app.get('/display',function(req,res){
    fs.readFile(__dirname+'/messages.json',function(err,data){
        if(!err){
            res.send(JSON.parse(data))
        }
        else{
            console.log(err);
        }
        res.end();

    })
})

app.listen(8000,(err)=>{
    if(err){
        console.log("Some error Occurred")
    }
    console.log("In  progress....")
})