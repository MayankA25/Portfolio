import { Loader2 } from 'lucide-react'
import React from 'react'

export default function Loader() {
  return (
    <div className='absolute top-0 w-full h-full bg-neutral-50 dark:bg-black flex items-center justify-center z-10'>
      <Loader2 className='animate-spin size-8'/>
    </div>
  )
}
