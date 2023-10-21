// server/db.js
const mongoose = require("mongoose");

module.exports = () => 
{ const connection = mongoose .connect('mongodb://52.55.181.143:27017/my_db')
.then((result) => console.log("Connected to database"))
.catch((err) => console.log("could not connect to database")); };

