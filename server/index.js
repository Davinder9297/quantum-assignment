const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose=require('mongoose');
const registeration = require('./models/registeration');
const jwt=require('jsonwebtoken')

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://davinder:davinder@cluster0.ed9lgev.mongodb.net/");
const app = express();

app.use(cors());

app.use(bodyParser.json());

app.post('/registeration', async(req, res) => {
    let formdata=req.body;
    // console.log(formdata)
    let data=new registeration(formdata);
    await data.save();
    let token=jwt.sign({user:formdata.email},"quantumlogin");
    res.json({ message: 'User registered successfully',token}).status(200);

});
app.post('/login', async(req, res) => {
    let email=req.body.email;
    let password=req.body.password;
    let data=await registeration.findOne({email,password});
    // console.log(data)
    if(data){
        let token=jwt.sign({user:email},"quantumlogin");
    res.json({ message: 'User login successfully',token,data}).status(200);
    }
    else{
        res.json({ error: 'Not found'}).status(404);

    }

});
app.get('/data', async(req, res) => {
 
    let data=await registeration.find({});
    res.json(data).status(200);

});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
