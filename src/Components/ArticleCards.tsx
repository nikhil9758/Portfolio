import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'

interface propdata{
    id: number,
    image: string,
    heading: string,
    desc: string
}
const ArticleCards: React.FC<propdata> = ({id,image,heading,desc}) => {
  const navigate=useNavigate()
    const[isShowText, setIsShowText]=useState(false)
  return (
    <div className='flex flex-col'>
        <div >{image}</div>
        <div onClick={()=>navigate(`/singleblog/${id}`)}>{heading}</div>
        <div>{desc.length>100? `${desc.substring(0,100)}`:desc}
           {desc.length>100 &&`${isShowText?desc.substring(100):'....'}`}
            {desc.length>100 && <button  className='text-orange-600' onClick={()=>setIsShowText(!isShowText)}>{isShowText?'read less': 'read more'}</button> }
            
        </div>
    </div>
  )
}

export default ArticleCards