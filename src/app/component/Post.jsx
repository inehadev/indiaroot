
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

const Post = () => {
    return (
        <div className=' rounded-lg border border-opacity-60 border-gray-50  '>
            <div className='flex gap-2 mt-3 mx-5'>
                <Avatar className='mt-2' >
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className='flex flex-col ml-2 '>
                    <p className='mt-2'>neha_</p>
                    <p className='opacity-90'>Bathinda, Punjab</p>
                </div>

            </div>
            <Separator className='mt-5 ' />

            <div className=' mx-5   '>
            <p className='mt-3 font-thin opacity-85'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nulla fuga repudiandae expedita id
            accusantium rerum suscipit. Veritatis, delectus?
          </p>
           
         
          <div className='relative inset-0 mt-5 w-full overflow-hidden h-[300px] flex items-center justify-center'>
        <img className='w-full h-full object-contain rounded-lg' src='/holi.jpeg' alt='Decorative' />
        </div>
           
            </div>
           


        </div>
    )
}

export default Post
