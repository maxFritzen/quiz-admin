import {
  TEST,
  ONQUESTIONINPUT,
  ADDQUESTION,
  DELETEQUESTION,
  ONALTERNATIVEINPUT,
  DELETEALTERNATIVE,
  ADDALTERNATIVE,
  SETCORRECTALTERNATIVE
 } from '../actions';

// const defaultState = {
//   title: 'DEFAULT TITLE',
//   questions: {
//     one: {
//       "question": "",
//       "alternatives": ["", ""],
//       "correctAlternative": ""
//     },
//     two :{
//      "question": "",
//      "alternatives": ["", ""],
//      "correctAlternative": ""
//    }
//  }
// }
const defaultState = {
  title: 'DEFAULT TITLE',
  questions: [
     {
      "question": "",
      "alternatives": ["", ""],
      "correctAlternative": ""
    },
    {
     "question": "",
     "alternatives": ["", ""],
     "correctAlternative": ""
   }
  ]
}

// const defaultState = {
//   title: 'DEFAULT TITLE',
//   questions: {
//     byId: {
//       "question1": {
//         id: "question1",
//         value: '',
//         alternatives: []
//
//       }
//     }
//   }
// }

const newQuestion = {
  question: '',
  alternatives:['', ''],
  correctAlternative: ''
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case TEST:
      console.log('testing', action.payload);
      return state;

    // ALTERNATIVES
    case SETCORRECTALTERNATIVE:
    // console.log('SETCORRECTALTERNATIVE:', action.value, action.questionIndex);
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
    // questions: state.questions.filter((item, index) => index !== action.index)
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
    // console.log('ONALTERNATIVEINPUT', action.value, action.index, action.questionIndex);
    // // state.questions[action.questionIndex].alternatives[action.index] = action.value;
    // return {
    //   ...state,
    //   questions: [
    //     ...state.questions,
    //     [0]: {
    //       ...state.questions[0].question,
    //       ...state.question[0].correctAlternative,
    //       alternatives:[
    //         ...state.questions[action.questionIndex].alternatives,
    //         [0]: action.value
    //       ]
    //     }
    //   ]
    // }
    // QUESTIONS
    case ADDQUESTION:
      // console.log('ADDQUESTION');

      return {
        ...state,
        questions:[
          ...state.questions,
          newQuestion
        ]
      }
    case DELETEQUESTION:
      // console.log('DELETEQUESTION:', action.index);
      // const newQuestions = state.questions;
      // state.questions.splice(action.index, 1);
      //
      // return { // BORDE NOG ANVÄNDA FILTER HÄR
      //   ...state,
      //   questions: [...state.questions]
      // };
      return {
        ...state,
        questions: state.questions.filter((item, index) => index !== action.index)
      }
    case ONQUESTIONINPUT:{
      // console.log('ONQUESTIONINPUT:', action.value);
      // console.log(state);
      // state.questions[action.index].question = action.value;

      return { //  Borde kunna använda map och if-statement, som i editExpenses.
        ...state,
        questions: state.questions.map((question, i) => // DEN HÄR FUNKAR
          i === action.index
          ? {...question, question: action.value}
          : question
        )

        // questions: [
        //   ...state.questions,
        //   [0]: {
        //     question: action.value
        //   }
        // ]

        // questions:[
        //   ...state.questions,
        //   {
        //     question: action.value
        //   }
        // ]
          // [0]: {
          //   question: 'hejsan'
          // }

      };
    }
      // return state;
    default:
      return state
  }
}
