const express = require("express");
const routes = require("./routes/authRoutes");
const app = express();
const PORT = 1337;

// accept json
app.use(express.json()); //used for parsing json data

// accept body
app.use(express.urlencoded({ extended: true }));

// use the html
app.use(express.static("public")) //used to serve html files from public folder

// routes
app.use("/api/v1", routes);

app.listen(PORT, () => {
    console.log("App is running at port=", PORT)
})