import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(cors());

mongoose.set('strictQuery',false);
mongoose.set('strictQuery',true);


import userRouter from './router/users.js';

app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))

app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send("This is an open book library API");
});

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = "mongodb+srv://admin:admin@cluster1.ksmsrxs.mongodb.net/";

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    }))
    .catch((err) => console.log(err.message));

export default app;
