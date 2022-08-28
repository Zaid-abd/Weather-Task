const express=require("express");
const https=require("https")
const bodyparser=require("body-parser")

const app = express();
app.use(bodyparser.urlencoded({extended:true}))

var cityname = "baghdad"


app.get("/",function(req,res){



res.sendFile(__dirname+"/index.html")

})

app.post("/",function(req,res){




cityname= req.body.cityname
const url="https://api.openweathermap.org/data/2.5/weather?q="+ cityname+"&appid=efeb5cc1cd4c625673ea0c6b2a0c2a0d&units=metric"



https.get(url,function(response){

response.on("data",function(data){

const weather = JSON.parse(data)
const temp1 = weather.main.temp
icon = weather.weather[0].icon
const urlimg="http://openweathermap.org/img/wn/"+icon+"@2x.png"

res.write("<h1>Temp. in "+ cityname +" is : "+ temp1 + " degrees</h1>")
res.write("<img src="+ urlimg +">")


})
})
})











