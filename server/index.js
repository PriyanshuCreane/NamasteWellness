const express =require("express")
const mongoose =require("mongoose")
const dotenv = require('dotenv')
const cors =require('cors')
const cookieParser = require('cookie-parser');
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")

const app = express()


// const uri = "mongodb+srv://rishirj422:Password123@cluster0.48hyear.mongodb.net/repository1"

//database connection
const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.URI)
        console.log("DB Connected!!!!");
    }catch(err){
        console.log(`DB connection error: ${err}`);
    }
}



//middleware




dotenv.config()
app.use(express.json())
app.use(cors({origin:"http://localhost:5173",credentials:true}))
// app.use(cors({origin:"*",credentials:true}))
app.use(cookieParser())
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)

// cors
const corsOptions1 = {
    origin: "http://localhost:5173",
    credentials: true,
  };
  
  const corsOptions2 = {
    origin: "http://localhost:5174",
    credentials: true,
  };
  
//   app.use(cors(corsOptions1));
//   app.use(cors(corsOptions2));
  


app.listen(process.env.PORT,()=>{
    connectDB();
    console.log(`listening on ${process.env.PORT}`);
})