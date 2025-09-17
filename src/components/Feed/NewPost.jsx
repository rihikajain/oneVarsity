import React, { useState } from 'react'
import Button from '../ui/Button'
export default function NewPost({ onClose }) {

  return (
    <div className='bg-black/40 flex justify-center items-center fixed inset-0 z-[9999]' onClick={onClose}>
      <div className='z-[10000] bg-cardBg w-170 h-110 rounded-xl shadow-lg static' onClick={(e) => e.stopPropagation()}>
        <Button onClick={onClose} className='relative top-1 left-1 bg-bluee text-white' >Close</Button>
      </div>
    </div>
  )
}
