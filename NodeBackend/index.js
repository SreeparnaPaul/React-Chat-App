const express = require("express");
const {chats} =require("./data/data")
const dotenv = require("dotenv")
const app = express();
dotenv.config()
const PORT = process.env.PORT || 5000
app.get('/',(req,res)=>{
    res.send("API is running")
})

app.get("/chatApp/chats",(req,res)=>{
    res.send(chats)
})

app.get("/chatApp/chats/:id",(req,res)=>{
   const singleChat = chats.find((c)=>c._id === req.params.id)
   res.send(singleChat)
})
app.listen(PORT,console.log(`Server started on Port ${PORT}`));