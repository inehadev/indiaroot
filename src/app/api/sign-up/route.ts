
import dbConnect from "@/lib/dbConnect";
import{ User} from "@/app/models/userModel"
import bcrypt from "bcrypt"
import { userValidation } from "@/app/schemas/userSchema";

export async function POST (request :Request){
    await dbConnect();
   try {
    const body = await request.json();
    const { name, email, password } = userValidation.parse(body);
    const exisitingUser = await User.findOne({email});
    if(exisitingUser){
        return   Response.json({
            success:false,
            message:"User already registered try with another email"
        },{status:400})
    }
     const hashpassword= await bcrypt.hash(password , 10);
    const user= new User({
        name : name , 
        email:email,
        password:hashpassword
    })

    await user.save();
    return Response.json({
        success:true,
        message:"user registered successfully",
        user
    } , {status:200})
    
   } catch (error) {
    console.error("error in registering " , error);
       return Response.json({
        success:false,
        message:"user registration failed"
    },{status:400})
    
    
   }

}