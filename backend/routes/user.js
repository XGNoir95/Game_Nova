const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
//Sign Up
router.post("/sign-up",async (req,res) => {
    try{
        const {username,email,password,address} = req.body;

        //check if username length is more than 4
        if(username.length < 4){
            return res.status(400)
            .json({message: "Username should be at least 4 characters long"});
        }

        //check if username already exists
        const existingUsername = await User.findOne({username: username});
        if(existingUsername){
            return res.status(400)
            .json({message: "Username already exists"});
        }

        //check if email already exists
        const existingEmail = await User.findOne({email: email});
        if(existingEmail){
            return res.status(400)
            .json({message: "Email already exists"});
        }

        //check password;s length
        if(password.length <= 5){
            return res
            .status(400)
            .json({message: "Password's length should be greater than 5"});                   
        }
        const hashPass =  await bcrypt.hash(password,10);

        const newUser = new User({
            username: username,
            email: email, 
            password: hashPass, 
            address: address
        });

        await newUser.save();
        return res.status(200).json({message: "SignUp Successful"});
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

module.exports = router;