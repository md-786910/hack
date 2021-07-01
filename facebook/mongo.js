const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://db:6O3rHBpJYYLnGjbV@database.l2fnk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }).then(() => {
        console.log("connected")
    }).catch((error) => {
        console.log(error)
    });

// module.exports = mongo;