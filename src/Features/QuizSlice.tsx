import {createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { QuizQuestions, questionsprop } from "../MockData/QuizItems"
import Questions from "../Components/Questions"

const initialState={
    isLoading: false,
    isError: false,
    data:[]
}

export const fetchquestions=createAsyncThunk('/fetchquestions',async()=>{
       const quizdata: any= await fetch('https://logindemo-a1d5e-default-rtdb.firebaseio.com/Quizes/quiz.json'
        ).then(response =>
            response.json())
            .then(d => {
                debugger
            console.log("inside thunk",Object.entries(d))
            let data=Object.entries(d).map((item)=>{
                    console.log(item[1])
                    return item[1]
            })
            console.log("final data",data)
           return data 
        }).catch((error)=>{
            console.log(error)
        })
        return {data:quizdata}
    })
const QuizSlice=createSlice({
    name:'quiz',
    initialState,
    reducers:{
        addQuiz:(state,action)=>{

        },
        getSpecificQuiz:(state,action: PayloadAction<number>)=>{
            const id= action.payload
            return state.data?.find((item:questionsprop)=>item.id===id)
            // if(record){
            //     return record
            // }
            // return null
        }
        
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchquestions.pending,(state,action)=>{
            console.log("pending")
            state.isLoading=true
        });
        builder.addCase(fetchquestions.fulfilled,(state,action)=>{
            state.isLoading=false
            const{data}= action.payload
            console.log("fulfiled")
            console.log("fullfilied data",action.payload)
            state.data=data
        });
        builder.addCase(fetchquestions.rejected,(state,action)=>{
            console.log("error")
            state.isLoading=false
            state.isError=true
        })
    },
})


export const {addQuiz,getSpecificQuiz} =QuizSlice.actions

export default QuizSlice.reducer