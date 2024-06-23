const express = require("express");
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
require('dotenv').config();

const router = express.Router()

router.post('/signup', async(req,res)=> {
    const{username, email, password} = req.body;
    try{
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message:"User already exits"});
        }
        const user = await User.create({username, email, password})
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET,{
            expiresIn: '1h'
        });
        res.status(201).json({token})
    }catch(error){
        res.status(500).json({message: "Server Error", error: error.message})
    }

});


router.post("/login", async (req, res) => {
  const {email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const isMatch = await user.matchPassword(password);
     if (!isMatch) {
       return res.status(400).json({ message: "Invalid Credentials" });
     }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({ token });
  } catch (error) {
    console.error('Login Error', error);
    res.status(500).json({ message: "Server Error" , error: error.message});
  }
});
 
module.exports = router