const express = require("express");
const app =  express();

require("dotenv").config();
require("./conn/conn");

const User = require("./routes/user");
const Games = require("./routes/game");
const Favourites = require("./routes/favourite");
app.use(express.json());
//route handling
app.use("/api/v1", User);
app.use("/api/v1", Games);
app.use("/api/v1", Favourites);

//creating Port
app.listen(process.env.PORT,()=>{
    console.log(`Listening to port ${process.env.PORT}`);
});