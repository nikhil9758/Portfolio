import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import LeftNavigation from './LeftNavigation'
const Nav:React.FC<any> = ({scrollcomp}) => {
    const[ isLeftNavigation,setIsLeftNavigation]= useState<Boolean>(false)
  return (
    <div className=' flex justify-between bg-neutral-800 text-white'>

        <div className='cursor-pointer' onClick={()=>setIsLeftNavigation(!isLeftNavigation)} >My icon</div>
        {isLeftNavigation&&<LeftNavigation setLeftNavigation={()=>setIsLeftNavigation(!isLeftNavigation)}/>}
        <div  className='flex justify-end '>
            <NavLink to='#' className='p-3 m-3 text-3xl cursor-pointer' onClick={()=>scrollcomp('contact')}>Contact</NavLink>
            <NavLink to='#' className='p-3 m-3 text-3xl cursor-pointer' onClick={()=>scrollcomp('work')}>Work</NavLink>
            <NavLink to='#' className='p-3 m-3 text-3xl cursor-pointer' onClick={()=>scrollcomp('skills')}>Skills</NavLink>
        </div>
    </div>
  )
}

export default Nav