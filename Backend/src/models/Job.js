import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
{
    jobId:{
        type:String,
        unique:true
    },

    topic:String,

    status:{
        type:String,
        enum:[
            "PENDING",
            "PROCESSING",
            "COMPLETED",
            "FAILED"
        ],
        default:"PENDING"
    },

    workspace:String,

    progress:{
        type:Number,
        default:0
    }

},
{
    timestamps:true
});

export default mongoose.model("Job",jobSchema);