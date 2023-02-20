const express=require('express');
const router=express.Router();
router.get('/login',(req,res,next)=>{
    //console.log(0);
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="POST"><label>USERNAME</label><input type="text" id="username"><button type="submit">LOGIN</button></form>');
    //res.redirect('/');
});
// router.post('/',(req,res,next)=>{
//     localStorage.setItem(JSON.stringify(req.body.username),JSON.stringify(req.body.username))
    
// });
module.exports=router;