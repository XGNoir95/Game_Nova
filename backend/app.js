const express = require("express");
const app =  express();

require("dotenv").config();
require("./conn/conn");

const User = require("./routes/user");
app.use(express.json());
//route handling
app.use("/api/v1", User);

//creating Port
app.listen(process.env.PORT,()=>{
    console.log(`Listening to port ${process.env.PORT}`);
});