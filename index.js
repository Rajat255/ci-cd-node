// server/index.js
const express = require("express"); 
const cors = require("cors"); 
const connection = require("./db"); 
const crudRoutes = require("./routes/crudRoutes");
const app = express(); const PORT = 8080;

connection();

app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); app.use(cors()); 
app.use((req, res, next) => { res.locals.path = req.path; next(); });
app.use("/api/cruds", crudRoutes); 
//app.use("/api/auth", authRoute);
app.listen(PORT, '0.0.0.0',() => console.log("Listening on port "${PORT}"..."));

