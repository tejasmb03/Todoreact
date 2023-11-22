const express = require("express");
const router = require("./routes/route");
const mongoose = require ('mongoose');
const cors = require ('cors');
const app = express();

const corsOptions= {
    origin : 'http://localhost:3000',
    Credential : true,
    optionSuccessStatus : 200
}

app.use(cors(corsOptions));

mongoose.connect("mongodb://127.0.0.1:27017/mern-task").then(() =>
    console.log("Mongodb Connected")
).catch((err) => console.log("Error connecting mongodb", err))

app.use (express.json());

app.use('/todos',router);

//app.get('/user' , (req,res) => (
//    res.send("hello world"):
//))

app.use('/',router);

app.listen(5000, () => console.log("server running on port 5000"))