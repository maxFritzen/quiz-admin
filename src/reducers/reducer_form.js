import {
  TEST,
  ONQUESTIONINPUT,
  ADDQUESTION,
  DELETEQUESTION,
  ONALTERNATIVEINPUT,
  DELETEALTERNATIVE,
  ADDALTERNATIVE,
  SETCORRECTALTERNATIVE,
  TITLEINPUT
 } from '../actions';

// const defaultState = {
//   title: '',
//   questions: [
//      {
//       "question": "",
//       "alternatives": ["", ""],
//       "correctAlternative": ""
//     },
//     {
//      "question": "",
//      "alternatives": ["", ""],
//      "correctAlternative": ""
//    }
//   ]
// }
const defaultState = {
  title: '',
  questions: [
      {
        id: "1",
        question: "",
        alternatives: ["", ""],
        correctAlternative: ""
      },
      {
        id: "2",
        question: "",
        alternatives: ["", ""],
        correctAlternative: ""
      }
  ],
 questionIds: ["question1", "question2"] // Vad är de här till?
 //
 // alternatives: [
 //   {
 //     id: "alternative1",
 //     text: ""
 //   },
 //   {
 //     id: "alternative2",
 //     text: ""
 //   }
 // ],
 //   altIds: ["alternative1", "alternative2"]

}

// const newQuestion = {
//   id: '',
//   question: '',
//   alternatives:['', ''],
//   correctAlternative: ''
// }

export default (state = defaultState, action) => {
  switch (action.type) {
    // TITLE
    case TITLEINPUT:
    return {
      ...state,
      title: action.value
    };
    // ALTERNATIVES
    case SETCORRECTALTERNATIVE:
    return {
      ...state,
      questions: state.questions.map((question, i) =>
        i === action.questionIndex
        ? {...question, correctAlternative: action.value }
        : question
        )
      }

    case ONALTERNATIVEINPUT:
    return {
      ...state,
      questions: state.questions.map((question, i) =>
        i === action.questionIndex
        ? {...question, alternatives:
          question.alternatives.map((alternative, i) =>
          i === action.index
          ? action.value
          : alternative
        )
      }
        : question
      )
    }

    case DELETEALTERNATIVE:
    return {
      ...state,
      questions: state.questions.map((question, i) =>
        i === action.questionIndex
        ? {...question, alternatives:
          question.alternatives.filter((item, index) =>
            index !== action.index
          )
        }
        : question
      )
    }
    case ADDALTERNATIVE:
      return {
        ...state,
        questions: state.questions.map((question, i) =>
          i === action.questionIndex
          ? {...question, alternatives:
            [
              ...question.alternatives,
              ''
            ]
          }
          : question
        )
      }

    // QUESTIONS
    case ADDQUESTION:
      return {
        ...state,
        questions:[
          ...state.questions,
          action.newQuestion
        ]
      }
    // case ADDQUESTION:
    //   return {
    //     ...state,
    //     questions:[
    //       ...state.questions,
    //       newQuestion
    //     ]
    //   }

    case DELETEQUESTION:
      return {
        ...state,
        questions: state.questions.filter((item, index) => index !== action.index)
      }

    case ONQUESTIONINPUT:{
      return {
        ...state,
        questions: state.questions.map((question, i) =>
          i === action.index
          ? {...question, question: action.value}
          : question
        )
        // questions: state.questions.map((question, i) =>
        //   i === action.index
        //   ? {...question, question: action.value}
        //   : question
        // )
      };
    }
    // case ONQUESTIONINPUT:{
    //   return {
    //     ...state,
    //     questions: state.questions.map((question, i) =>
    //       i === action.index
    //       ? {...question, question: action.value}
    //       : question
    //     )
    //   };
    // }

    default:
      return state
  }
}
// export default (state = defaultState, action) => {
//   switch (action.type) {
//     // TITLE
//     case TITLEINPUT:
//     return {
//       ...state,
//       title: action.value
//     };
//     // ALTERNATIVES
//     case SETCORRECTALTERNATIVE:
//     return {
//       ...state,
//       questions: state.questions.map((question, i) =>
//         i === action.questionIndex
//         ? {...question, correctAlternative: action.value }
//         : question
//         )
//       }
//
//     case ONALTERNATIVEINPUT:
//     return {
//       ...state,
//       questions: state.questions.map((question, i) =>
//         i === action.questionIndex
//         ? {...question, alternatives:
//           question.alternatives.map((alternative, i) =>
//           i === action.index
//           ? action.value
//           : alternative
//         )
//       }
//         : question
//       )
//     }
//
//     case DELETEALTERNATIVE:
//     return {
//       ...state,
//       questions: state.questions.map((question, i) =>
//         i === action.questionIndex
//         ? {...question, alternatives:
//           question.alternatives.filter((item, index) =>
//             index !== action.index
//           )
//         }
//         : question
//       )
//     }
//     case ADDALTERNATIVE:
//       return {
//         ...state,
//         questions: state.questions.map((question, i) =>
//           i === action.questionIndex
//           ? {...question, alternatives:
//             [
//               ...question.alternatives,
//               ''
//             ]
//           }
//           : question
//         )
//       }
//
//     // QUESTIONS
//     case ADDQUESTION:
//       return {
//         ...state,
//         questions:[
//           ...state.questions,
//           newQuestion
//         ]
//       }
//
//     case DELETEQUESTION:
//       return {
//         ...state,
//         questions: state.questions.filter((item, index) => index !== action.index)
//       }
//
//     case ONQUESTIONINPUT:{
//       return {
//         ...state,
//         questions: state.questions.map((question, i) =>
//           i === action.index
//           ? {...question, question: action.value}
//           : question
//         )
//       };
//     }
//
//     default:
//       return state
//   }
// }
