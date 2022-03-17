const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
  }

  class Company {
    constructor() {
        this._id = faker.commerce.productName();
        this.name = faker.commerce.productName();
        this.address = {street: faker.address.streetName(),city: faker.address.city(), state: faker.address.state(), zipCode: faker.address.zipCode(), country: faker.address.country()};
    }
  }



//routes
app.get("/api/user/new", (req,res)=>{
    res.json(new User())
})

//get all the quotes
app.get("/api/companies/new", (req,res)=>{
    res.json(new Company())
})

//get one quote
app.get("/api/user/company", (req,res)=>{
    res.json([new User(), new Company()])
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




app.listen( port, () => console.log(`Listening on port: ${port}`) );