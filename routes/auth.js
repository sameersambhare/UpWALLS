const express = require("express");
const router = express.Router();
router.get('/',(req,res)=>{
    console.log('GET');
})
router.post('/register',(req,res)=>{
    console.log('Register')
})
module.exports = router;
