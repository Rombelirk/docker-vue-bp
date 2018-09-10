const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const app = express();


// io.origins('*:*')
app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen("3000");
console.log("server is listening on port 3000")

module.exports = app;
    mongoose.connect('mongodb://mongo/test').then((res)=>console.log("yes", res)).catch(err => console.log("ERROR:",err));
    const Cat = mongoose.model('Cat', { name: String });
    const kitty = new Cat({ name: 'Zildjian' });
    kitty.save().then(() => console.log('meow'));
