import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://sh0034879:iblWxNDCvt9TsDUm@admin.eoz3svq.mongodb.net/').then(()=>{
       console.log('DB connected') ;
    })
}