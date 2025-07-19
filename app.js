const express=require('express')
const app=express();
const orderRouter=require('./routes/orders')

app.use((req,res,next)=>{
    console.log(`${req.method} request made to ${req.url}`);
});



app.listen(4000,(req,res)=>{
    console.log('server is running');
});

