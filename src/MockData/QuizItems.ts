export const QuizItems=[
    {
        id:1,
        name:'Understanding variables and data types'
    },
    {
        id:2,
        name:'Working with strings and numbers'
    },
    {
        id:3,
        name:'Using JavaScript functions'
    },
    {
        id:4,
        name:'Working with arrays and loops Working with arrays and loopsWorking with arrays and loopsWorking with arrays and loopsWorking with arrays and loopsWorking with arrays and loopsWorking with arrays and loopsWorking with arrays and loopsWorking with arrays and loopsWorking with arrays and loopsWorking with arrays and loopsWorking with arrays and loopsWorking with arrays and loopsWorking with arrays and loopsWorking with arrays and loopsWorking with arrays and loopsWorking with arrays and loops'
    }
]


export interface quizProps{
    id: number,
    name: string
}

export interface questionsprop{
    id: number,
    ques:string,
    options: string[]
}

export interface quizquesprops{
    id: number,
    questions:questionsprop[]
}
export const QuizQuestions=[
    {
        id:1,
        questions:[
            {
                id:1,
                ques:'let x = { b: 1, c: 2 };\n let y = Object.keys(x);\nconsole.log(y.length);',
                options:['2','3','4','5']
            },
            {
                id:2,
                ques:'let x = { b: 2, c: 3 };\n let y = Object.keys(x);\nconsole.log(y.length);',
                options:['2','3','4','5']
            },
            {
                id:3,
                ques:'let x = { b: 3, c: 4 };\n let y = Object.keys(x);\nconsole.log(y.length);',
                options:['2','3','4','5']
            },
            {
                id:4,
                ques:'let x = { b: 4, c: 5 };\n let y = Object.keys(x);\nconsole.log(y.length);',
                options:['2','3','4','5']
            }
        ]
    },
    {
        id:2,
        questions:[
            {
                id:1,
                ques:'let x = { b: 1, c: 2 };\n let y = Object.keys(x);\nconsole.log(y.length);',
                options:['2','3','4','5']
            },
            {
                id:2,
                ques:'let x = { b: 1, c: 2 };\n let y = Object.keys(x);\nconsole.log(y.length);',
                options:['2','3','4','5']
            },
            {
                id:3,
                ques:'let x = { b: 1, c: 2 };\n let y = Object.keys(x);\nconsole.log(y.length);',
                options:['2','3','4','5']
            },
            {
                id:4,
                ques:'let x = { b: 1, c: 2 };\n let y = Object.keys(x);\nconsole.log(y.length);',
                options:['2','3','4','5']
            }
        ]
    }
]



// body: JSON.stringify({
//     id:1,
//     questions:[
//         {
//             id:1,
//             ques:'let x = { b: 1, c: 2 };\n let y = Object.keys(x);\nconsole.log(y.length);',
//             options:['2','3','4','5']
//         },
//         {
//             id:2,
//             ques:'let x = { b: 1, c: 2 };\n let y = Object.keys(x);\nconsole.log(y.length);',
//             options:['2','3','4','5']
//         },
//         {
//             id:3,
//             ques:'let x = { b: 1, c: 2 };\n let y = Object.keys(x);\nconsole.log(y.length);',
//             options:['2','3','4','5']
//         },
//         {
//             id:4,
//             ques:'let x = { b: 1, c: 2 };\n let y = Object.keys(x);\nconsole.log(y.length);',
//             options:['2','3','4','5']
//         }
//     ]
// }