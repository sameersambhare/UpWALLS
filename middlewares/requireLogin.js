const express=require('express')
const Jwt=require('jsonwebtoken')
const USER=require('../models/users')
const JwtSecret=process.env.JwtSecret;
module.exports=(req,res,next)=>{
    const {authorization}=req.headers;
    if(!authorization){
        res.status(401).json({error:"Login is required."})
    }
    else{
        const token=authorization.replace("Bearer ","");
        Jwt.verify(token,JwtSecret,(err,payload)=>{
            if(err){
                console.log(err)
            }
            else{
                const {_id}=payload;
                USER.findById(_id).then((user)=>{
                    if(!user){
                        res.status(404).json({error:"User not found."})
                    }
                    else{
                        req.user=user;
                        next()
                    }
                })
            }
        })
    }
}