import mongoose from "mongoose"

const EventsSchema = new mongoose.Schema({
    
    dateEvents:{ 
        type: Date,
        trim:true
    
    },
    titleEvents:{
        type:String,
        trim: true
    },
    attractions:{
        type: String
    }, 
    description:{
        type:String
    },
    capacity:{
        type: Number
    },

})

const Events = mongoose.model("events", EventsSchema)


export default Events