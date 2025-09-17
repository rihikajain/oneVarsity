import React, { useState } from 'react'
import Button from '../ui/Button'
export default function NewPost({ onClose }) {

  return (
    <div className='backdrop-blur-sm flex justify-center items-center fixed inset-0 w-screen h-screen'>
      <div className='z-10 bg-white w-96 h-96 rounded-xl shadow-lg relative'>
        <Button onClick={onClose} className>Close</Button>
      </div>
    </div>
  )
}
