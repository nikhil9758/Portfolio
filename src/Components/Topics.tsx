import React from 'react'
import { quizProps } from '../MockData/QuizItems'
import { useNavigate } from 'react-router-dom'

const Topics: React.FC<quizProps> = ({id,name}) => {
    const navigate= useNavigate()
  return (
    <div>

    <div className='grid grid-cols-3 gap-20 justify-center'>
        {name.length>100?`${name.substring(0,100)}.....`:name}
        <button className='bg-orange-400 text-white w-20 text-xs ' onClick={()=>navigate(`/quiz/${id}/takequiz`)}>Take the quiz</button>
        <button className='bg-orange-400 text-white w-20 text-xs ' onClick={()=>navigate(`/quiz/${id}/addquiz`)}>Add the quiz</button>
    </div>
    </div>
  )
}

export default Topics