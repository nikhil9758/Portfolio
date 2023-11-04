import React, {useEffect,useState} from 'react'
import SingleQuiz from '../Components/SingleQuiz'
import { useParams } from 'react-router-dom'
import { QuizQuestions, questionsprop, quizquesprops } from '../MockData/QuizItems'
import { useDispatch,useSelector } from 'react-redux'
import { fetchquestions, getSpecificQuiz } from '../Features/QuizSlice'
import { AppDispatch } from '../store'
import AddQuiz from '../Components/AddQuiz'

const TopicQuiz = () => {
  const {id,quizaction}=useParams()
  console.log("actionquiz",quizaction)
  const[quizFilteredItems,setQuizFilteredItems] =useState<quizquesprops>({id:0,questions:[]})
  const dispatch= useDispatch<AppDispatch>()
  useEffect(()=>{
    dispatch(fetchquestions())
  },[])
  const records= useSelector((state:any)=>state.reducer.data)
  useEffect(()=>{
    const foundrecord=records?.find((item:questionsprop)=>item.id.toString()===id)
    if(foundrecord){
        setQuizFilteredItems(foundrecord)
    }
  },[records,id])
  console.log("select",records)

  return (
    <div>
            {quizaction==='takequiz'&&<SingleQuiz {...quizFilteredItems}/>}
            {quizaction==='addquiz'&&<AddQuiz/>}
    </div>
  )
}

export default TopicQuiz