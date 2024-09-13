import React from 'react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { House } from 'lucide-react';
const hero = () => {
  return (
    <div className='flex min-h-screen justify-center ' >

        <div className='bg-blue-600 w-[300px]'>
            {/*   sidebar   */}
            <h2 className='text-2xl  text-white font-bold mt-5 ml-5'>IndiaRoot </h2>
             
            <div className='flex mt-3 mx-4  text-white rounded-full border ' > <Search className='text-white ml-2 mt-1' size={30}/><Input placeholder='Search ' className='bg-transparent border-none placeholder:text-white'>
            </Input>
            </div>

            <div>
            <House /> <span className='flex'>Feed</span>
              
            </div>
            
           
        </div>
        <div className='bg-white flex-grow'>
               {/*   post  */}
               post
        </div>
        <div className='bg-cyan-200  w-[320px]'>
               {/*   message   */}
               message
        </div>
      
    </div>
  )
}

export default hero
