const data=require('./data');
const express=require('express');
const router=express.Router();
router.get('/',(req,res,next)=>{
    //console.log(1);
    res.send(`<p>${data}</p><form action="/" method="POST" ><input type="text" name="msg" onclick="document.getElementById('username').value=localStorage.getItem('username')"><input name="username" type="hidden" id="username"><button type="submit">send msg</button></form>`);
});
router.post('/',(req,res,next)=>{
    if(req.body.username!==undefined) data.push(` ${req.body.username} : ${req.body.msg} `);
    console.log(data);
    res.redirect('/');
})
module.exports=router;