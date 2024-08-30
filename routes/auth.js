const express = require("express");
const router = express.Router();
const bcrypt=require('bcrypt')
const Jwt=require('jsonwebtoken')
const JwtSecret=process.env.JwtSecret;
const USER=require('../models/users')
const nodemailer=require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "samuofficial94@gmail.com",
      pass: "ncnwpzuudjdhsozf",
    },
  });

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
                            const reciever={
                                from:"samuofficial94@gmail.com",
                                to:email,
                                subject:"Welcome to UpWALLS! Your Registration is Confirmed",
                                html:`  <div>
      <div class="header">
        <h1>Welcome to UpWALLS!</h1>
      </div>
      <div class="content">
        <p>Dear ${name},</p>
        <br />
        <p>Thank you for registering with UpWALLS! We're excited to have you join our community of wallpaper enthusiasts.</p>
        <br />
        <p>Your account has been successfully created, and you can now explore thousands of high-quality wallpapers curated just for you. Here’s what you can do next:</p>
        <br />
        <ul>
          <li><strong>Browse and Download:</strong> Access a wide range of wallpapers across different categories.</li>
          <li><strong>Create Collections:</strong> Save your favorite wallpapers to personalized collections.</li>
          <li><strong>Upload Your Own:</strong> Share your creativity by uploading your own wallpapers to the community.</li>
          <li><strong>Stay Updated:</strong> Keep an eye on our newsletters for the latest additions and special features.</li>
        </ul>
        <br />
        <p>If you have any questions or need assistance, feel free to  visit our <a href="#">support page</a>.</p>
        <p>Welcome aboard, and happy browsing!</p>
      </div>
      <br />
      <div class="footer">
        <p>Best regards,</p>
        <p>The UpWALLS Team</p>
      </div>
      </div>`
                            }
                            console.log(user);
                            transporter.sendMail(reciever)
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
                        const {email,name,mobile}=savedUser;
                    res.status(200).json({message:"Login successfully.",token,localUser:{email,name,mobile}})
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
