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
export const titleInput = (value) => {
  return {
    type: TITLEINPUT,
    value
  }
}

// SELECT
export const setCorrectAlternative = (value, questionIndex) => {
  return {
    type: SETCORRECTALTERNATIVE,
    value,
    questionIndex
  }
}
// ALTERNATIVES
export const onAlternativeInput = (value, index, questionIndex) => {
  return {
    type: ONALTERNATIVEINPUT,
    value,
    index,
    questionIndex
  }
}
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
export const onQuestionInput = (value, index) => {
  return {
    type: ONQUESTIONINPUT,
    value,
    index
  }
}

export const addQuestion = () => {
  return {
    type: ADDQUESTION
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
