import { NextAuthOptions } from "next-auth";
import {User} from "@/app/models/userModel"
import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt"
import Credentials from "next-auth/providers/credentials";
import CredentialsProvider  from "next-auth/providers/credentials";


export const authOption : NextAuthOptions={
    providers:[
        CredentialsProvider({
            id:"crendetials",
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
                    throw new Error
                    
                }
            }

        })
    ],
    pages:{
        signIn:"/sign-in"

    },
    callbacks:{
        async jwt ({token , user}){
            if(user){
                token.id=user.id
            }
            return token;
        },
        async session ({session , token}){
            if(token){
                session.id=token.id
            }
            return session;
        }
    },
    secret : process.env.NEXT_AUTH_SECRET

}



