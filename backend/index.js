require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');



const port = process.env.PORT || 4000;
const uri = process.env.MONGO_URL;


const app = express() ;
mongoose.connect(uri);

app.listen(port,()=>{
  console.log(`App started at port number ${port}!`);
  mongoose.connect(uri);
  console.log("DB connected successfully !");
});
