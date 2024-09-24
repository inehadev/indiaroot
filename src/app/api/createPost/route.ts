import dbConnect from "@/lib/dbConnect";
import { Post } from "@/app/models/postmodel";
import { postValidation } from "@/app/schemas/postSchema";

export async function POST(req:Request){
    await dbConnect();
    try {
     const body = await req.body;

     const {img , text}=postValidation.parse(body);
     
        
        
    } catch (error) {
        
    }
}