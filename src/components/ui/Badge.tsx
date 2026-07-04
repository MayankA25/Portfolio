import React from 'react'

export default function Badge({ text }: { text: string }) {
  return (
    <div className='flex items-center justify-center border-2 border-neutral-700 px-4 py-1 rounded-lg gap-2 bg-neutral-900 hover:bg-neutral-800 cursor-default hover:scale-104 transition-all duration-200'>
      <span className='p-0.75 rounded-full bg-neutral-500'></span>
      <span className='text-xs font-bold'>{text}</span>
    </div>
  )
}
