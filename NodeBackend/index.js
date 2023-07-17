const express = require("express");
const {chats} =require("./data/data")
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes")
const app = express();
dotenv.config()
connectDB()
const PORT = process.env.PORT || 5000
app.use(express.json()); // to accept json data

// app.get("/", (req, res) => {
//   res.send("API Running!");
// });

app.use("/chatApp/user", userRoutes);
// app.get("/chatApp/chats",(req,res)=>{
//     res.send(chats)
// })

// app.get("/chatApp/chats/:id",(req,res)=>{
//    const singleChat = chats.find((c)=>c._id === req.params.id)
//    res.send(singleChat)
// })
app.listen(PORT,console.log(`Server started on Port ${PORT}`));