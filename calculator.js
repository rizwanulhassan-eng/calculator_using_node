const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
      
      res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
      console.log(req);
      var a=Number(req.body.num1);
      var b=Number(req.body.num2);
      var result=a+b;
      res.send("the result is"+result);
})

app.get("/bmicalculator",function(req,res){
      res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
      var h=Number(req.body.height);
      var w=Number(req.body.weight);
      var bmi=w/(h*h);
      res.send("your bmi is"+bmi);
});

app.listen(3000,function(){
      console.log("server started");
});