import React from 'react'
import Card from './Card'
import { data } from '@/data'
const ThirdSection = () => {
  return (
    <div className='w-full h-auto bg-slate-200 border-[3px] flex justify-center flex-col gap-20 items-center pb-24'>
      <h1 className='text-[#163020]  font-bold text-5xl font-relway mt-12'>Explore Blogs</h1>
      <div className='flex flex-wrap justify-center items-center gap-6 xs:px-10 lg:px-0'>

        {
          data.map((item)=>{
            return<Card imagePath={item.image} heading={item.title} shortDescription={item.shortDescription} key={item.id} id={item.id}/>
          })
        }
        </div>
    
    </div>
  )
}

export default ThirdSection
