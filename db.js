const mongoose = require("mongoose");

module.exports = () => 
{ const connection = mongoose .connect('mongodb://3.81.164.81:27017/my_db')
.then((result) => console.log("Connected to database"))
.catch((err) => console.log("could not connect to database")); };

