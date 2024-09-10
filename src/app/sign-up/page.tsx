"use client"

import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import Link from 'next/link'


const Page = () => {
    const [name, setname] = useState("");
    const [email, setmail] = useState("");
    const [password, setpassword] = useState("");
    const router = useRouter();
    const { toast } = useToast();

    const handleSignUp = async () => {
        
        try {
            const bodyParameter = {
                name , email , password
            }

            const axiosheader = {
                headers: {
                    "Accept": "application/json",
                }
            }

            const response = await axios.post('/api/sign-up', bodyParameter, axiosheader);
            console.log(response)
            if (response.status === 200 && response.data.success) {
                toast({
                    title: "sucess",
                    description: "User Registered Sucessfully"

                })

            }else{
                toast({
                    title: "Failed",
                    description: "User already registered"

                })

            }
           
                router.replace('/sign-in')
            

        } catch (error:any) {
            console.log(error)
            const errorMessage = error.response?.data?.message || "An error occurred during registration";

            toast({
                title: "Error",
                description: errorMessage,
            });

        }

    }
    return (
        <>
             
            <div className='flex  flex-col gap-10 justify-center items-center bg-gray-50  min-h-screen' >
            <h2 className='flex justify-center  text-5xl items-center'>IndiaRoot</h2>
                <div className=' flex-col h-[380px] justify-center text-center bg-white border rounded-md  w-[400px]'>
                    <h1 className='text-center items-center text-3xl mt-5 opacity-85  font-medium'>Sign-up</h1>
                    <div className='flex-col  mt-8 mx-10'>
                        <Input className='' placeholder='name' type='text' value={name} onChange={(e) => setname(e.target.value)} />
                        <Input className='mt-5' placeholder='email' value={email} type='email' onChange={(e) => setmail(e.target.value)} />
                        <Input className='mt-5' placeholder='password'  value={password} type='password' onChange={(e) => setpassword(e.target.value)} />

                        <Button className='mt-7 w-full' onClick={handleSignUp}>SIGN-UP</Button>

                        <p className='mt-3 opacity-80 font-normal'>Already have an account?<Link href="/sign-in">Sign-in</Link></p>



                    </div>


                </div>
            </div>
        </>
    )
}

export default Page
