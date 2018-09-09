const express = require("express");

const app = express();

// io.origins('*:*')
app.get("/", (req, res) => {
    res.sendFile("../public/index.html");
})

app.listen("8080");

module.exports = app;