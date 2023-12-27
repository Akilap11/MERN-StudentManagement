//server.js just copy from somehwre. no need to code this every time 

//npm init- initialize node modules
//npm install express mongoose dotenv cors
//create models,routes folders and server.js file

//declaring variables and assign those dependancies installed by npm init
//google npm and search these packages!!!!
const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");      //for json file
const dotenv=require("dotenv");  //for .env file //for mongoDB url
const app=express();

//to read the url in .env file
require("dotenv").config();

//creating a port
//use any available port nb || use this port number(in localhost) or 
const PORT=process.env.PORT || 8070;

//json means key value pairs. 
//got to package.json file and read below row
//key is the name, value is "backend" , like every row--__--
//using declared dependencies
app.use(cors());
app.use(bodyParser.json());

//create .env file
//paste MongoDB link in .env file
//add password and database name in the URL

const URL=process.env.MONGODB_URL;

//connecting MongoDB
//below // configs are not required for latest versions
mongoose.connect(URL, {
    //useCreateIndex:true,
    useNewUrlParser:true,
    //useUnifiedTopologyL :true,
    //useFindAndModify:false
    //these arent support anyomore
});

//openning the connection that created above
//()=> - function
const connection=mongoose.connection;
connection.once("open", ()=> {
    console.log("Mongodb Connection Success");
})

//after app.listen below
//to use students.js
const studentRouter=require("./routes/students.js");
app.use("/student",studentRouter);

//Everything connected. 
app.listen(PORT,()=>{
    console.log('Server is up and running on port no:'+ PORT)
})

//change package.js server likie below to start the server.js
//"start":"node server.js"

//then npm start

//EXTRA!!
//npm install nodemon
//if we change the code, server will restart automatically
//then add the dev config to package.json
//then just type npm run dev to run the server

