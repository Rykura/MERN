const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

let quotes = [
    {content:"Zero", author:"Someone"},
    {content:"One", author:"Someone Else"},
    {content:"Two", author:"Someone  that wasn't the other 2"},
    {content:"Three", author:"Someone different this time"},
    {content:"Four", author:"Someone who is unique"},
]

//routes
app.get("/api/hello", (req,res)=>{
    res.json({msg: "Hello Human"})
})

//get all the quotes
app.get("/api/quotes", (req,res)=>{
    res.json({count: quotes.length, results: quotes})
})

//get one quote
app.get("/api/quotes/:idx", (req,res)=>{
    res.json({count: 1, quote: quotes[req.params.idx]})
})

//create one quote
app.post("/api/quotes", (req,res)=>{
    console.log(req.body)
    quotes.push(req.body)
    res.json({count: quotes.length, results: quotes})
})

//update one quote
app.put("/api/quotes/:idx", (req,res)=>{
    quotes[req.params.idx] = req.body
    res.json({count: 1, quote: quotes[req.params.idx]})
})

app.delete("/api/quotes/:idx", (req,res)=>{
    quotes.splice(req.params.idx, 1)
    res.json({count: quotes.length, results: quotes})
})


//need this at the bottom of the page to work, tells the app to listen for requests on port 8000
app.listen( port, () => console.log(`Listening on port: ${port}`) );