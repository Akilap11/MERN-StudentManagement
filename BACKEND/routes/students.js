const router=require("express").Router();
const { get } = require("mongoose");
let Student=require("../models/Student");

//1.add data to database
//create route
router.route("/add").post((req,res)=>{
    const name=req.body.name;
    const age=Number(req.body.age);
    const gender=req.body.gender;
//the data that we entered will send to the backend by a request body.
//we created 3 variables and got those 3 variable values here through the body req.body

const newStudent=new Student({
    name,
    age,
    gender
})
//passing the object to the mongoDb database through student.js
newStudent.save().then (()=>
//if success .then. kinda like if else. 
{
    res.json("Student Added") //sending from json format
}).catch(()=>{
    console.log(err);
})
}) 

//2.get all student route
//getting data from database
router.route("/").get((req,res)=>{
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
})

//3.update student data
//we can identify a student by the id. MongoDB auto generated
//we can get the id from the url when we getting the data ;)
//POST,GET,PUT(get data and update\can also use POST),DELETE
//2nd method. 1-req,res like above 2.async/await- below 
//async/wait- complete multiple requests without crashing
//user dont need to wait till his previous function completes
router.route("/update/:id").put(async (req,res)=>{
    let userId=req.params.id; //req.params- request has body,parameter,...
    //we can get data like above formal way
    //new way-destrcuture
    const {name,age,gender}=req.body; //data from the frontend req.body save to this structure

    //creating a object to update the database
    const updateStudent={
        name,
        age,
        gender
    }
    const update=await Student.findByIdAndUpdate(userId,updateStudent).then(()=>{
    //dont need to create update student always
    //userId,{name,age,gender}
        res.status(200).send({status:"user updated"})
    }).catch((err)=>{
        console.log(console.error());
        res.status(500).send({status:"Error with updating data",error:err.message})
    })
    })
    //await-wait till one update complete
    

//4.delete data
//can use POST also
router.route("/delete/:id").delete(async(req,res)=>{
    let userId=req.params.id;
        //findbyOne for any other params
    await Student.findByIdAndDelete(userId)
    .then(()=>{
            res.status(200).send({status:"User Deleted"});
        }).catch((errr)=>{
            console.log(errr.message);
            res.status(500).send({status:"Error with delete user",error:err.message})
        })
    })



//5.to get data of just a one user
router.route("/get/:id").get(async(req,res)=>{
    let userId=req.params.id;
    const user=await Student.findById(userId)
    .then((student)=>{
        res.status(200).send({status:"User fetched",student})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"Error with getting a single user",err:err.message})
    })
})

module.exports=router; //always EXPORT!!!