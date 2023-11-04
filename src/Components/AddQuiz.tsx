import React,{useCallback, useState} from 'react'
import axios from 'axios'
import { questionsprop } from '../MockData/QuizItems'
import  {useSelector,useDispatch} from 'react-redux'
import  {fetchquestions} from '../Features/QuizSlice'
import { AppDispatch } from '../store'
const AddQuiz = () => {
    const[showTextArea,setShowTextArea]=useState(false)
    // const[options,setOptions]=useState<string[]>([])
    // const dispatch= useDispatch<AppDispatch>()
    // const data= useSelector((state: any)=>state.reducer.data)
    // console.log(data)
    const[questionText,setQuestionText]=useState<questionsprop>({
        id:45,
        ques:'',
        options:[]
    })
    const handleOnTextChange=(e:React.ChangeEvent<HTMLTextAreaElement| HTMLInputElement>): void=>{
        // setQuestionText()
        console.log("target.........",e.target.tagName,e.target.name)
        if(e.target.tagName==='TEXTAREA'){
            setQuestionText({...questionText,ques:e.target.value})
            console.log(questionText)
        }else{
            let newOptions=[...questionText.options]
            newOptions[parseInt(e.target.name.split('option')[1])]=e.target.value
            setQuestionText({...questionText,options:newOptions})
            console.log(parseInt(e.target.name.split('option')[1]),newOptions)
        }
    }
    const handleClickOptions=()=>{
        // setOptions([...options,''])
        let res={...questionText,options:[...questionText.options,'']}
        setQuestionText(res)
    }
    // const handleSubmitForm=useCallback((e:React.SyntheticEvent)=>{
    //     e.preventDefault()
    //     console.log("here.........",questionText)
    //     axios.post('https://logindemo-a1d5e-default-rtdb.firebaseio.com/Quizes/quiz.json',questionText)
    //     .then((res)=>{
    //         console.log("refreshing...........")
    //         debugger
    //         // dispatch(fetchquestions())
    //     })

    // },[questionText])
    const handlesubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log("refreshing....")
        debugger

    }
  return (
    <form onSubmit={handlesubmit}>    
        <div className='flex flex-col'>
            <div>
                Add Question
                <button onClick={()=>setShowTextArea(!showTextArea)}>+</button>
            </div>
            {showTextArea&&<textarea rows={10} cols={150} name='question' className='border-[2px] border-neutral-600' onChange={handleOnTextChange}/>}
            <div>
                AddOptions
                <button onClick={handleClickOptions}>+</button>
                {
                    questionText.options.map((_,index)=>{
                        return(
                            <div>
                                <input type="text" name={`option${index}`} placeholder='Enter the options' onChange={handleOnTextChange}/>
                            </div>)
                    })
                }
            </div>
            <button type='submit'>Submit</button>
        </div>
    </form>
  )
}

export default AddQuiz