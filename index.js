import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();




app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://instgram-delta.vercel.app');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.use(cors(
     {
  origin : ['https://instgram-delta.vercel.app'],
  methods :[ 'POST'],
  credentials : true
 }
));



mongoose.set('strictQuery',false);
mongoose.set('strictQuery',true);


import userRouter from './router/users.js';

app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))

app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.json("This is API");
});

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = "mongodb+srv://admin:admin@cluster1.ksmsrxs.mongodb.net/";

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    }))
    .catch((err) => console.log(err.message));

export default app;
