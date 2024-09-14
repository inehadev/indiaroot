import React from 'react'
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


const hero = () => {
  return (
    <div className='flex min-h-screen justify-center ' >

      {/*   sidebar   */}

      <div className='bg-blue-600 '>
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

      <div className=' flex-grow  '>

        <div className='flex justify-between gap-24 mx-5 mt-8 '> <div className='flex flex-grow  mx-4   rounded-full border py-1 ' > <Input placeholder='Search  for friends , groups or colleges ' className='bg-transparent w-full  border-none placeholder:opacity-90 placeholder:ml-20'>
        </Input><Search className='mr-3 opacity-70  ' size={25} />


        </div>

          <div className=' '> <Button className='justify-end bg-blue-600 rounded-full' size={"sm"}>Add New Post<Plus className='ml-1' /></Button></div>
        </div>
        <Separator className='mt-7' />

        <div className='bg-opacity-55'>
          <div className='bg-white rounded-lg mx-5 justify-center items-center h-[70px] mt-10 flex gap-8'>
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
              <AvatarImage sizes='lg' src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

        </div>




      </div>

      {/*   message   */}


      <div className='bg-cyan-200  w-[320px]'>

        message
      </div>

    </div>
  )
}

export default hero
