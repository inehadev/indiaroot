"use client"
import React , {useState} from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react';


const Postmodal = ({onclose}) => {
    


  return (
   <div  className="fixed mt-[50%] inset-0 flex items-center justify-center bg-black bg-opacity-80">
    <div className='justify-center place-content-center items-center '>
   <X className='text-black bg-transparent' onClick={onclose} />
     <div className='border border-gray-50'>
     <Input type='file' placeholder='Add image' className='border-none'/>
     <Textarea className='mt-2 border-none' placeholder='Add Comment...' />
     </div>
    </div>
    </div>
  )
}

export default Postmodal
