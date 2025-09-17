import React, { useState } from 'react'
import Button from '../ui/Button'
import { X } from 'lucide-react'
export default function NewPost({ onClose }) {

  return (
    <div className='bg-black/40 flex justify-center items-center fixed inset-0 z-[9999]' onClick={onClose}>
      <div className='z-[10000] bg-cardBg  w-170 h-110 rounded-sm shadow-lg p-3' onClick={(e) => e.stopPropagation()}>
        <div className='flex relative h-1/5 w-full border'>
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
          <Button onClick={onClose} className='absolute top-1 right-1'><X /></Button>
        </div>

        <div className='h-3/5 w-full border'>
          <input type="text" className='w-' />
        </div>

        <div className='relative h-1/5 w-full border'>
          <div >
          </div>
          <Button className='absolute bottom-0 right-0 border  bg-bluee text-whitee ' >Post</Button>
        </div>
      </div>
    </div>
  )
}
