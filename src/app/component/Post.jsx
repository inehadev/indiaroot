
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

const Post = () => {
    return (
        <div className='  mx-10 rounded-lg h-[150px]  mt-10 border border-gray-100'>
            <div className='flex gap-2'>
                <Avatar className='' >
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className='flex flex-col ml-2'>
                    <p className='mt-2'>neha_</p>
                    <p className='opacity-90'>Bathinda, Punjab</p>
                </div>

            </div>
            <Separator className='mt-5' />

            <div className='bg-green-300'>
            <p className='mt-3 font-thin opacity-85'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nulla fuga repudiandae expedita id
            accusantium rerum suscipit. Veritatis, delectus?
          </p>
           
           
          <Image  className='w-full object-cover' src={'/holi.jpeg'} height={100} width={300}/>

            </div>


        </div>
    )
}

export default Post
