import React from 'react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
const hero = () => {
  return (
    <div className='flex min-h-screen justify-center  ' >

        <div className='bg-blue-600 w-[300px]'>
            {/*   sidebar   */}
            <h2 className='text-2xl  text-white font-bold mt-5 ml-5'>IndiaRoot </h2>
             
            <div className='flex mt-3 mx-4' > <Input placeholder='Search ' className='bg-none'>
            </Input><Search className='text-white' size={35}/>
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
