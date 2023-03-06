//we need to connect to the mongodb 
const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const studentSchema=new Schema({
    //mongodb auto creates a object id
    //we dont have to mention it
    name:{
        type: String,
        required: true //backend validation. name required
    },
    age:{
        type: Number,
        required: true //backend validation. name required
    },
    gender:{
        type: String,
        required: true //backend validation. name required
    },

})

const Student=mongoose.model("Student",studentSchema)
//first parameters-table/collection name
//every word will be capital and it will be students aftergoing to the db

//export to routing
module.exports=Student;

//data from routes go through the model to the database