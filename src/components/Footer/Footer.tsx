
import { myFont } from '@/app/fonts'
import React from 'react'

export default function Footer({ text }: { text: string }) {
  return (
    <div className='my-40 flex items-center justify-center '>
      <h1 className={`${myFont.className} text-8xl text-neutral-800`}>{text}</h1>
    </div>
  )
}
