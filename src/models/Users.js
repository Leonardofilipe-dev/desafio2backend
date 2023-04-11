import mongoose from "mongoose"

const UsersSchema = new mongoose.Schema({
    
    userName:{ 
        type: String,
        trim:true
    },
    email:{
        type:String,
        trim: true
    },
    password:{
        type: String
    }, 
 
})

const Users = mongoose.model("users", UsersSchema)


export default Users