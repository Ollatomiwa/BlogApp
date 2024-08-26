import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-route";

const app = express();
app.use('/api/user',router);


mongoose.connect("mongodb+srv://olatomeewa:RSeBlbhHCwMP6wdA@cluster0.3gtlz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=> app.listen(5000))
.then(()=> console.log("connected to Database and Listening to Localhost 5000"))

.catch((err)=> console.log(err));



//RSeBlbhHCwMP6wdA