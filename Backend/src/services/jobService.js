import Job from "../models/Job.js";

export const createJob = async (topic, workspace) => {

    return await Job.create({

        jobId: crypto.randomUUID(),

        topic,

        workspace,

        status:"PENDING"

    });

}

export const updateJob = async(id,data)=>{

    return await Job.findByIdAndUpdate(id,data,{
        new:true
    });

}