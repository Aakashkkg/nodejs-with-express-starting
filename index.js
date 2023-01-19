const express = require("express")
const app = express();

const ejs =require('ejs');


app.set('view engine','ejs');
// app.set("view engine","ejs")

var a = 'aakash';
var b =['raju','ravi','amit'];

app.get('/',(req,res)=>{
    console.log('Home');
    res.send('welcome to home newg');
    // res.render("home",{Name:a})
}) 


app.get('/About',(req,res)=>{
    console.log('About')
res.send('welcome to About');
// res.render('about',{Arr:b});
}) 

app.get('/contact',(req,res)=>{
    console.log('contact')
    res.send('welcome to contact');
}) 

// app.listen(100,(req,res)=>{
//     console.log('sever started');
    
// })

app.listen(100,(req,res)=>{
    console.log("server started");
})