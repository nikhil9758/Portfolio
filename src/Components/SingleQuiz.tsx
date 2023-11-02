import React from 'react'
import { useParams } from 'react-router-dom'


const SingleQuiz = () => {
    const {id}= useParams()
    console.log(id)
  return (
    <div>SingleQuiz</div>
  )
}

export default SingleQuiz