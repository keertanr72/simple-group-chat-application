const express=require('express');

const adminRouter=require('./routes/admin');
const userRouter=require('./routes/user');
const bodyParser= require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended : false}));
app.use(adminRouter);
app.use(userRouter);
app.use((req,res,next)=>{
    res.status(404).send('<h1>PAGE NOT FOUND</h1>')
})
app.listen(7000);