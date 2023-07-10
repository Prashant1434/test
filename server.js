const express=require('express');
const cors=require('cors');
const routetoemp=require('./Employee');
const app=express();

app.use(express.json());
app.use(cors('*'));

app.use('/Employee',routetoemp);

app.listen(9292,'0.0.0.0',()=>
{
    console.log("server started");
})