"use client"

import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import { signIn } from 'next-auth/react'
import Link from 'next/link'



const Page = () => {
    const [email, setmail] = useState("");
    const [password, setpassword] = useState("");
    const[loading , setloading]=useState(false);
    const router = useRouter();
    const { toast } = useToast();

    const handleSignIn = async (data: any) => {
      setloading(true);
      try{
      const response = await signIn('credentials', {
        redirect: false,
        email, 
        password
      });
    
      console.log("SignIn Response:", response); // Added detailed console log

          
            if (response?.error) {
                toast({
                    title: "Failed",
                    description: "Login Failed"

                })


            } else {
                toast({
                    title: "sucess",
                    description: "User Logined Sucessfully"

                })

                router.replace('/')
            }

          


        } catch (error: any) {
            console.log(error)
            const errorMessage = error.response?.data?.message || "An error occurred in Login";

            toast({
                title: "Error",
                description: errorMessage,
            });

        }finally{
            setloading(false)
        }

    }
    return (
        <>
            <div className='flex  flex-col gap-10 justify-center items-center bg-gray-50  min-h-screen' >
                <h2 className='flex justify-center  text-5xl items-center'>IndiaRoot</h2>

                <div className=' flex-col h-[340px] justify-center text-center bg-white border rounded-md  w-[400px]'>
                    <h1 className='text-center items-center text-3xl mt-5 opacity-85 font-medium'>Sign-In</h1>
                    <div className='flex-col  mt-8 mx-10'>

                        <Input className='mt-5 py-2' placeholder='email' value={email} type='email' onChange={(e) => setmail(e.target.value)} />
                        <Input className='mt-5 py-1' placeholder='password' value={password} type='password' onChange={(e) => setpassword(e.target.value)} />

                        <Button className='mt-7 w-full' onClick={handleSignIn}>SIGN-IN</Button>

                        <p className='mt-5 opacity-80 font-normal'>Already have an account?<Link href="/sign-up">Sign-Up</Link></p>




                    </div>


                </div>
            </div>
        </>
    )
}

export default Page
