import React, { useEffect, useState } from 'react'
import ques from '../assests/javascriptques.png'
import Blogs from './Blogs'
import { blogData,propdata } from '../MockData/BlogItems'
import { useParams } from 'react-router-dom'

export const Blogloader=()=>{
     return {}
}

const SingleBlog = () => {
    const[filteredBlog,setFilterdBlog]=useState<string>('')
    const {id}= useParams()
     console.log('params', id)
    console.log('insidesingleblog')
    const data=blogData
    useEffect(()=>{
        const filtereddata:propdata[]=data.filter((item )=>item.id.toString()===id)
        console.log("fliter",filtereddata[0].maindata)
        console.log(filteredBlog)
        setFilterdBlog(()=>filtereddata[0].maindata)
    },[id])
    return (
        <div className='flex flex-col items-center'>
            <div className='flex '>
                <img src={ques} alt="javascript" className='w-[70vw] h-[70vh]' />
            </div>
            <div className='mx-[15%]'>
                {
                    filteredBlog
                }
            </div>
            <div className='flex fixed bottom-5 text-white p-5 bg-neutral-800 '>
                <div className='p-4 cursor-pointer'>Like</div>
                <div className='p-4 cursor-pointer'>Comment</div>
                <div className='p-4 cursor-pointer'>Bookmark</div>
                <div className='p-4 cursor-pointer'>Payment</div>
                <div className='p-4 cursor-pointer'>Share</div>
            </div>
            <Blogs/>
        </div>
    )
}

export default SingleBlog