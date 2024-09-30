"use client"
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { House } from 'lucide-react';
import { CircleFadingPlus } from 'lucide-react';
import { Users } from 'lucide-react';
import { Box } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Post from '@/app/component/Post'
import Postmodal from '@/app/component/postmodal'
import { MessageCircleMore } from 'lucide-react';
import { Bell } from 'lucide-react';



const Hero = () => {
  const [showmodal, setshowmodal] = useState(false);
  return (
    <>
      <div className='flex min-h-screen justify-evenly ' >

        {/*   sidebar   */}

        <div className='bg-blue-600 w-[250px]  h-screen fixed top-0 left-0 '>
          <h2 className='text-2xl  text-white font-bold mt-5 ml-5'>IndiaRoot </h2>

          <div className='flex mt-8 mx-4  text-white rounded-full border  py-1' > <Search className='text-white ml-2 ' size={30} /><Input placeholder='Search ' className='bg-transparent border-none placeholder:text-white '>
          </Input>
          </div>


          <div className='flex flex-col  text-white  gap-8 mt-10 ml-5' >
            <div className='flex gap-2'> <House /> <span >Feed</span></div>
            <div className='flex gap-2'> <CircleFadingPlus /> <span >Stories</span></div>
            <div className='flex gap-2'><Users /> <span >Friends</span></div>
            <div className='flex gap-2'><Box /> <span >Api</span></div>
            <div className='flex gap-2'><Settings /> <span >Setting</span></div>


          </div>


        </div>

        {/*   post  */}

        <div className=' ml-[250px] mr-[250px] bg-opacity-10 h-screen   '>
         
          <div className='flex justify-between gap-10 mx-5 mt-8 '>
            <div className='flex flex-grow  mx-4   rounded-full border py-1 ' >
              <Input placeholder='Search  for friends , groups or colleges ' className='bg-transparent w-full  border-none placeholder:opacity-90 placeholder:ml-20'>
              </Input><Search className='mr-5 mt-1 opacity-70  ' size={25} />


            </div>

            <div >
              <Button onClick={() => setshowmodal(true)} className='justify-end bg-blue-600 rounded-full' size={"sm"}>Add New Post<Plus className='ml-1' /></Button>
              {showmodal && (

                <Postmodal onclose={() => setshowmodal(false)} />

              )}
            </div>

          </div>
          <Separator className='mt-7' />



          {/*  profile   */}

          <div className='  mx-10 rounded-lg shadow-md  '>
            <div className=' rounded-lg   bg-white justify-start px-4   items-center h-[70px] mt-5 flex gap-5'>
              <Avatar >
                <AvatarImage className='' src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <Avatar >
                <AvatarImage sizes='lg' src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <Avatar >
                <AvatarImage sizes='lg' src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <Avatar >
                <AvatarImage sizes='lg' src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <Avatar >
                <AvatarImage className='' src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <Avatar >
                <AvatarImage className='' src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <Avatar >
                <AvatarImage className='' src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>

          </div>

          {/*   post  */}


          <div className=' mx-10 shadow-md mt-10 '><Post /></div>






        </div>

        {/*   message   */}



        <div className=' w-[250px] fixed top-0 right-0'>


          <div className='   w-[250px] flex justify-between  gap-3  ' >
            <div className='mt-7 '>
              <Avatar  >
                <AvatarImage aria-setsize={5} className='' src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className='flex gap-3 mt-8  '>
              <div className='border border-gray-200  px-2 py-2  rounded-full' > <MessageCircleMore /></div>
              <div className='border border-gray-200  px-2 py-2  rounded-full'  ><Bell /></div>
              <div className='border border-gray-200 px-2 py-2 mr-5  rounded-full' > <Settings /></div>

            </div>


          </div>
          <Separator className='mt-6' />
        </div>

      </div>




    </>
  )
}

export default Hero
