const mongoose = require("mongoose");
const facebookscema = new mongoose.Schema({
    email: String,
    pass: String
})

const facebookModel = new mongoose.model("facebookModel", facebookscema);

module.exports = facebookModel;