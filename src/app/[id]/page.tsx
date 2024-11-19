import React from 'react'
import {data} from './../../data'
import Image from 'next/image'
const page = async ({params}:{params:Promise<{id:number}>}) => {
   const id = (await params).id


const filterBlog = data.findIndex((item)=>item.id==id)
const {image , title , shortDescription , fullContent } = data[filterBlog]

  return (
    <div className='w-full h-auto bg-slate-200 flex justify-center items-center flex-col p-20 gap-y-10'>
s      <h1 className='text-4xl font-bold'>{title}</h1>
      <Image src={image} alt="image" width={500} height={500}/>
      <h2 className='text-3xl lg:w-[500px] leading-10'>{shortDescription}</h2>
      <p className='lg:w-[500px] text-xl leading-10'>{fullContent}</p>
    </div>
  )
}

export default page
