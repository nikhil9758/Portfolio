import { useRef } from 'react'
import Nav from '../Components/Nav'
import {Outlet} from 'react-router-dom'

const HomeLayout = () => {
    const sectionRefs: any={
        'contact':useRef(null),
        'work':useRef(null),
        'skills':useRef(null)
    }
    const scrollToSmooth=(id: string)=>{
        const elementPosition= sectionRefs[id].current.getBoundingClientRect().top
        const offsetPosition= elementPosition+window.scrollY
        window.scroll({
            top: offsetPosition,
            behavior: 'smooth'
        })
    }
  return (
    <div>
        <Nav scrollcomp={scrollToSmooth}/>
        <Outlet context={sectionRefs}/>
    </div>
  )
}

export default HomeLayout