const express = require("express");
const app =  express();

require("dotenv").config();
require("./conn/conn");

const User = require("./routes/user");
const Games = require("./routes/game");
app.use(express.json());
//route handling
app.use("/api/v1", User);
app.use("/api/v1", Games);

//creating Port
app.listen(process.env.PORT,()=>{
    console.log(`Listening to port ${process.env.PORT}`);
});