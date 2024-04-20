const mongoose = require('mongoose')
const user = require('../models/usermodel');
const generatetoken = require('../utils/jwt')

const registeruser= async(req,res)=>{
    try {
         // taking input
    const {email , password , confirmpassword} = req.body;
    // checking if null value
    if(email == null || password == null || confirmpassword == null){
        return res.json({
            message: "plz fill all data"
        })
    }
    // checking existing user 
    const userexists = await user.findOne({email});
    if(userexists){
        return res.json({
            message:"user already exists"
        })
    }else{
    }
    // creating new user
    const User = await user.create({
        email,
        password
    })
    
    if(User){
        return res.status(201).json({
            message:"sucessfuly created user",
            jwt:generatetoken(User._id)
        })
    }
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred",
            error: error.message
        })
    }
      
}

/// login controller
const authuser = async(req,res) =>{
    const { email , password} = req.body;
        const authuser = await user.findOne({email,password})
        if(authuser){
            return res.json({
                message:"login succes",
                jwt:generatetoken(authuser._id),
                email:authuser.email
            })
        }else{
            return res.json({
                message:"user not found"
            })
        }
}

module.exports = { authuser , registeruser};