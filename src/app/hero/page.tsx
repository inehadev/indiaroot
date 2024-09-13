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
const hero = () => {
  return (
    <div className='flex min-h-screen justify-center ' >

       {/*   sidebar   */}

        <div className='bg-blue-600 w-[300px]'>
            <h2 className='text-2xl  text-white font-bold mt-5 ml-5'>IndiaRoot </h2>
             
            <div className='flex mt-8 mx-4  text-white rounded-full border ' > <Search className='text-white ml-2 mt-1' size={30}/><Input placeholder='Search ' className='bg-transparent border-none placeholder:text-white'>
            </Input>
            </div>

    
           <div className='flex flex-col  text-white  gap-8 mt-10 ml-5' >
           <div className='flex gap-2'> <House /> <span >Feed</span></div>
           <div className='flex gap-2'> <CircleFadingPlus /> <span >Stories</span></div>
           <div className='flex gap-2'><Users/> <span >Friends</span></div>
           <div className='flex gap-2'><Box/> <span >Api</span></div>
           <div className='flex gap-2'><Settings/> <span >Setting</span></div>
           
              
           </div>
            
           
        </div>
       
         {/*   post  */}

        <div className='bg-white flex-grow'>

        <div className='flex mt-8 mx-4   rounded-full border py-1 ' > <Input placeholder='Search  for friends , groups or colleges' className='bg-transparent  border-none placeholder:opacity-90 placeholder:ml-20'>
            </Input><Search className='mr-3 opacity-70  ' size={25}/>
           
            
            </div>
          
          <Button>Add New Post<Plus/></Button>


            
          
        </div>

         {/*   message   */}


        <div className='bg-cyan-200  w-[320px]'>
              
               message
        </div>
      
    </div>
  )
}

export default hero
