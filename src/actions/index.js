import database from '../firebase/firebase';
// Använda axios?

export const TEST = 'TEST';
// QUESTIONS
export const ONQUESTIONINPUT = 'ONQUESTIONINPUT';
export const ADDQUESTION = 'ADDQUESTION';
export const DELETEQUESTION = 'DELETEQUESTION';
//ALTERNATIVES
export const ONALTERNATIVEINPUT = 'ONALTERNATIVEINPUT';
export const DELETEALTERNATIVE = 'DELETEALTERNATIVE';
export const ADDALTERNATIVE = 'ADDALTERNATIVE';
// SELECT
export const SETCORRECTALTERNATIVE = 'SETCORRECTALTERNATIVE';
// TITLE
export const TITLEINPUT = 'TITLEINPUT';
// VALIDATE
export const VALIDATE = 'VALIDATE';

// VALIDATE
export const validate = (value) => {
  return {
    type: VALIDATE,
    value
  }
}

// TITLE
export const validateInput = (dispatchToValidate, value, index, questionIndex) => {
  return function (dispatch, getState) {
    switch (dispatchToValidate) {
      case 'title':
        return (
          dispatch(titleInput(value))
          .then(dispatch(validate(getState().form)))
        )
      case 'question':
        return (
          dispatch(questionInput(value, index))
          .then(dispatch(validate(getState().form)))
        )
      case 'alternative':
        return (
          dispatch(alternativeInput(value, index, questionIndex))
          .then(dispatch(validate(getState().form)))
        )
      default: return;
    }

    // .then(dispatch(() => console.log(getState())))
    // .then(() => console.log('hej'))
  }
}
// export const validateTitleInput = (value) => {
//   return function (dispatch, getState) {
//     return dispatch(titleInput(value))
//     .then(dispatch(validate(getState().form)))
//     // .then(dispatch(() => console.log(getState())))
//     // .then(() => console.log('hej'))
//   }
// }

export const titleInput = (value) => dispatch => {
  return new Promise(resolve => {
    resolve(
      dispatch({
        type: TITLEINPUT,
        value
     })
    )
  })
};
// export const titleInput = (value) => dispatch => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve();
//     }, 10);
//   }).then(() => {
//     dispatch({
//       type: TITLEINPUT,
//       value
//    });
//   });
// };
// export const titleInput = (value) => {
//   return {
//     type: TITLEINPUT,
//     value
//   }
// }

// SELECT
export const setCorrectAlternative = (value, questionIndex) => {
  return {
    type: SETCORRECTALTERNATIVE,
    value,
    questionIndex
  }
}
// ALTERNATIVES
export const alternativeInput = (value, index, questionIndex) => dispatch => {
  return new Promise(resolve => {
    resolve(
      dispatch({
        type: ONALTERNATIVEINPUT,
            value,
            index,
            questionIndex
     })
    )
  })
};
// export const alternativeInput = (value, index, questionIndex) => {
//   return {
//     type: ONALTERNATIVEINPUT,
//     value,
//     index,
//     questionIndex
//   }
// }
export const deleteAlternative = (index, questionIndex) => {
  return {
    type: DELETEALTERNATIVE,
    index,
    questionIndex
  }
}
export const addAlternative = (questionIndex) => {
  return {
    type: ADDALTERNATIVE,
    questionIndex
  }
}

// QUESTIONS
export const questionInput = (value, index) => dispatch => {
  return new Promise(resolve => {
    resolve(
      dispatch({
        type: ONQUESTIONINPUT,
            value,
            index
     })
    )
  })
};
// export const questionInput = (value, index) => {
//   return {
//     type: ONQUESTIONINPUT,
//     value,
//     index
//   }
// }
const generateId = (x) => {
  return x + 1;
}
export const addQuestion = (lastId) => {
  const id = generateId(lastId);
  const newQuestion = {
    id: id,
    question: '',
    alternatives:['', ''],
    correctAlternative: ''
  }
  return {
    type: ADDQUESTION,
    newQuestion
  }
}

export const deleteQuestion = (index) => {
  return {
    type: DELETEQUESTION,
    index
  }
}


// export const CREATE_QUIZ = 'CREATE_QUIZ';
//
// export const createQuiz = (values) => {
//   console.log('createQuiz values:', values);
//    return database.ref('quiz').push({
//     name: values.quizName,
//     questions: values.questions
//   })
//   .then((ref) => console.log('key:', ref.key));
// }
