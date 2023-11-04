import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { questionsprop, quizquesprops } from "../MockData/QuizItems";
import Questions from "./Questions";


const SingleQuiz: React.FC<quizquesprops> = ({ id, questions }) => {
    const navigate= useNavigate()
    const [currentQuestion, setCurrentQuestion] = useState<questionsprop>({
    id: 1,
    ques: "",
    options: [],
  });
  const[seconds,setSeconds]=useState(120)
  console.log("cuurentq", currentQuestion, questions);
  useEffect(() => {
    setCurrentQuestion(questions[0]);
  }, [questions]);
  useEffect(()=>{
    let timeoutId=setInterval(()=>setSeconds((prev)=>prev-1),1000)
    if(seconds===0){
        clearInterval(timeoutId)
        navigate('/')
    }
    return ()=>clearInterval(timeoutId)
  })
  const handleOnNext = () => {
    let id = currentQuestion.id + 1;
    let ques = questions?.find((item: questionsprop) => item.id === id);
    setCurrentQuestion(() => ques || { id: 0, ques: "", options: [] });
  };

  const handleOnPrev = () => {
    let id = currentQuestion.id - 1;
    let ques = questions?.find((item: questionsprop) => item.id === id);
    setCurrentQuestion(() => ques || { id: 0, ques: "", options: [] });
  };
  return (
    <div>
        {seconds}
      <Questions {...currentQuestion} />
      <button
        onClick={handleOnNext}
        disabled={currentQuestion?.id === questions.length}
      >
        next
      </button>
      <button onClick={handleOnPrev} disabled={currentQuestion?.id === 1}>
        Prev
      </button>
    </div>
  );
};

export default SingleQuiz;
