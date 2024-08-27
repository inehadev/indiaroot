"use client"

import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import { signIn } from 'next-auth/react'



const page = () => {
    const [name, setname] = useState("");
    const [email, setmail] = useState("");
    const [password, setpassword] = useState("");
    const router = useRouter();
    const { toast } = useToast();

    const handleSignIn = async (data:any) => {
        try {

            const response = await signIn('credentials', {
                redirect: false,
                identifier: data.email || data.username,
                password: data.password


            })
            console.log(response)
            if (response?.error) {
                toast({
                    title: "Failed",
                    description: "Login Failed"

                })


            } else {
                toast({
                    title: "sucess",
                    description: "User Login Sucessfully"

                })

            }

            router.replace('/')


        } catch (error: any) {
            console.log(error)
            const errorMessage = error.response?.data?.message || "An error occurred during Login";

            toast({
                title: "Error",
                description: errorMessage,
            });

        }

    }
    return (
        <>
            <div className='flex  justify-center items-center bg-gray-50  min-h-screen' >

                <div className=' flex-col h-[300px] justify-center text-center bg-white border rounded-md  w-[400px]'>
                    <h1 className='text-center items-center text-3xl mt-5  font-medium'>Sign-In</h1>
                    <div className='flex-col  mt-8 mx-10'>

                        <Input className='mt-5' placeholder='email' value={email} type='email' onChange={(e) => setmail(e.target.value)} />
                        <Input className='mt-5' placeholder='password' value={password} type='password' onChange={(e) => setpassword(e.target.value)} />

                        <Button className='mt-7 w-full' onClick={handleSignIn}>SIGN-IN</Button>



                    </div>


                </div>
            </div>
        </>
    )
}

export default page
