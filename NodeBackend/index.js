const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes")
const {notFound,errorHandler} = require("./middlewares/errorMiddleware")
const app = express();
dotenv.config()
connectDB()
const PORT = process.env.PORT || 5000
app.use(express.json()); // to accept json data



app.use("/chatApp/user", userRoutes);


// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(PORT,console.log(`Server started on Port ${PORT}`));