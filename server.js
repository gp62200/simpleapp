var express =require('express');
var app=express();

app.get("/",(req,res)=>{
    res.send(
        "<h1>Vijay sales</h1>"
        +"</hr>"
        +"</h3>Smart devices for sale</h3>"
        +"<br>"
        +"<ol>"
        +"<li>laptops</li>"
        +"<li>computers</li>"
        +"<li>watches</li>"
        +"<li>earphones</li>"
        +"</ol>"
    );
});

var server=app.listen(7000);
console.log("simple running at port no 7000")