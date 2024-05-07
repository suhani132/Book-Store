import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from './route/Book.route.js'
import userRoute from './route/User.route.js'    
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());  

dotenv.config();

const PORT=process.env.PORT || 4000
const URI= process.env.MongoDBURI;


// connect to mongodb
try{
 mongoose.connect(URI).then(()=>{
  console.log("Connected to MongoDB");

 });
 
}catch(error){
    console.log("Error :"+error.message)
}

//defining routes
app.use("/book",bookRoute)
app.use("/user",userRoute)


//listening to port

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})