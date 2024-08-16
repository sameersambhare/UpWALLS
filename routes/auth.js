const express = require("express");
const router = express.Router();
const bcrypt=require('bcrypt')
const Jwt=require('jsonwebtoken')
const JwtSecret=process.env.JwtSecret;
const USER=require('../models/users')

router.get('/',(req,res)=>{
    console.log('GET');
    res.status(200).json({message:"GET"})
})
router.post('/register',(req,res)=>{
    const {email,name,mobile,password}=req.body;
    if(!email||!name||!mobile||!password){
        res.status(422).json({error:"Please add all the fileds."})
    }
    else{
        USER.findOne({email:email}).then((savedUser)=>{
            if(savedUser){
                res.status(422).json({error:"Email is already registered."})
            }
            else{
                bcrypt.hash(password,10).then((hashPassword)=>{
                    const newUser=new USER({
                        email,
                        name,
                        mobile,
                        password:hashPassword,
                    })
                    newUser.save().then((user)=>{
                        if(!user){
                            res.status(422).json({error:"Internal server error."})
                        }
                        else{
                            console.log(user);
                            res.status(200).json({message:"Registered Successfully."})
                        }
                    })
                })
            }
        })
    }
})
router.post('/login',(req,res)=>{
    const {email,password}=req.body;
    if(!email||!password){
        res.status(422).json({error:"Please add all the fields."})
    }
    else{
        USER.findOne({email:email}).then((savedUser)=>{
            if(!savedUser){
                res.status(422).json({error:"Email is not registered."})
            }
            else{
                const token=Jwt.sign({_id:savedUser.id},JwtSecret)
                bcrypt.compare(password,savedUser.password).then((match)=>{
                    if(match){
                        const {email,name}=savedUser;
                    res.status(200).json({message:"Login successfully.",token,localUser:{email,name}})
                    }
                    else{
                        res.status(422).json({error:"Password is incorrect."})
                    }
                })
            }
        })
    }
})

module.exports = router;
