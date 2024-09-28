import dbConnect from "@/lib/dbConnect";
import { Post } from "@/app/models/postmodel";
import { postValidation } from "@/app/schemas/postSchema";
import { v2 as cloudinary} from "cloudinary"
import  jwt from "jsonwebtoken"
export async function POST(req:Request){
    await dbConnect();
    try {
     const body = await req.json();

     ////// getting user id //////

     const authHeader = req.headers.get("token");
     const token = authHeader?.split(" ")[1];

     if(!token){
        return new Response ("Unauthorized user " , {status:401})
     }

     const decoded :any =  jwt.verify(token , "NEXT_AUTH_SECRET")

     const userID = decoded.userID;
     console.log(userID);

     const { img , text}=postValidation.parse(body);
     
     let imgurl : string | null = null

     if(img){
        const upload = await cloudinary.uploader.upload(img);
        imgurl = upload.secure_url
     }

    const newPost =  await Post.create({
        postedBy:userID,
        text ,
        img : imgurl,
    })
    
    return new Response(JSON.stringify(newPost) , {status:201})

     
        
        
    } catch (error) {
        console.log(error);
        return new Response ("failed t create post" , {status:500});
        
    }
}