import express from 'express';


const app = express();

app.get('/',(req,res)=>{
    res.send("This is the starting of my project");
});

app.listen(3000,()=>{
    console.log("Server is Running on the Port 3000");
});