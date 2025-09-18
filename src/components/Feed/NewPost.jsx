import React, { useState } from 'react'
import Button from '../ui/Button'
import { X, Smile, Image, LucideClockFading, File } from 'lucide-react'
export default function NewPost({ onClose }) {

  return (
    <div className='bg-black/40 flex justify-center items-center fixed inset-0 z-[9999]' onClick={onClose}>
      <div className='z-[10000] bg-[#E2EFFD]  w-170 h-110 rounded-sm shadow-lg p-4' onClick={(e) => e.stopPropagation()}>
        <div className='flex relative h-1/6 w-full '>
          <img src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile avatar"
            className='h-12 w-12 rounded-full' />
          <div className='flex flex-col mx-3'>
            <span className="font-semibold text-sm pl-2">Ana Kumar</span>
            <select name="" id="" className=' w-40 rounded-md pr-7 pl-1 text-gray-500 placeholder:text-gray-400 text-xs outline-0 '>
              <option value="" className='outline-0  border-0'>Anyone</option>
              <option value="">Connections Only</option>
              <option value="">Recruiters</option>
            </select>
          </div>
          <button onClick={onClose} className='absolute top-1 right-1'><X /></button>
        </div>

        <div className='h-4/6 w-full '>
          <textarea className='w-full h-full outline-0 bg-white p-2 text-start' placeholder='Share your thoughts....' />
        </div>

        <div className=' h-1/6 w-full flex items-center justify-between '>
          <div className='flex gap-2 items-center'>
            <Smile />
            <Image />
            <LucideClockFading />
            <File />
          </div>
          <Button className=' bg-bluee text-whitee ' >Post</Button>
        </div>
      </div>
    </div>
  )
}
