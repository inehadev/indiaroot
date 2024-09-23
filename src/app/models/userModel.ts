import mongoose, { models, Schema , Document } from "mongoose";

 
interface userDocument extends Document{
    name:string,
    email:string , 
    password:string
}

const UserSchema = new Schema<userDocument>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
        
    },
    password:{
        type:String,
        required:true
    }
})

export  const User = models.User || mongoose.model<userDocument>("User" ,UserSchema )

