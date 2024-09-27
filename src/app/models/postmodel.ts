
import mongoose, { Document, Schema, models } from "mongoose";

interface postDocument extends Document {
    postedBy: mongoose.Schema.Types.ObjectId;
  likes: mongoose.Schema.Types.ObjectId[];
  text: string;
  replies: {
    userID: mongoose.Schema.Types.ObjectId;
    text: string;
    userProfilePic?: string;
    username?: string;
  }[];
  img?: string;
}

const postSchema = new Schema<postDocument>({
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    text: {
        type: String,
        maxlength:500
    },
    img:{
        type:String
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    ],
    replies: [
        {
            userID: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true

            },
            text:{
                type:String,
                required:true
            },
            userProfiePic:{
                type:String
            },
            username:{
                type:String
            }


        }
    ]
})

export const Post = models.Post || mongoose.model<postDocument>("Post" , postSchema)