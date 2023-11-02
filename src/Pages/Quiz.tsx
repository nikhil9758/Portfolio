import React from 'react'
import { QuizItems } from '../MockData/QuizItems'
import Topics from '../Components/Topics'

const Quiz = () => {
  return (
    <div className='mx-40'>
        Select the Topics
        {
            QuizItems.map((item, index)=>{
                return <Topics {...item} key={index}/>
            })
        }
    </div>
  )
}

export default Quiz