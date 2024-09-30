import { NextAuthOptions } from "next-auth";
import {User} from "@/app/models/userModel"
import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt"
import Credentials from "next-auth/providers/credentials";
import CredentialsProvider  from "next-auth/providers/credentials";


export const authOption : NextAuthOptions={
    providers:[
        CredentialsProvider({
            id:"credentials",
            name:"credentials",
            credentials:{
                email:{label:"email" , type:"text"},
                password:{label:"password" , type:"text"}
            },
            async authorize(credentials:any):Promise<any>{
                await dbConnect()
                try {
                    const user = await User.findOne({
                    
                            email:credentials.email
                
                    })
                    console.log("user email matched")

                    if(!user){
                        throw new Error("user not found")
                    }
                    const ispasswordmatch = await  bcrypt.compare(credentials.password , user.password)

                    if(ispasswordmatch){
                        return user;
                    }else{
                        throw new Error ("Incorrect Password")
                    }

                } catch (error) {
                  console.log(error);
                  return  null;
                }
            }

        })
    ],
    pages:{
        signIn:"/sign-in"

    },
    callbacks:{
        async jwt ({token , user}){
            console.log("JWT Callback Triggered"); // Check if this logs
        if (user) {
            token.id = user.id;
        }
        console.log("Token in JWT:", token); // Check the token
        return token;
        },
        async session ({session , token}){
            if(token){
                session.id=token.id
            }
            return session;
        }
    },
    secret : process.env.NEXTAUTH_SECRET

}



