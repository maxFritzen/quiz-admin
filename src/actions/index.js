import database from '../firebase/firebase';
// Använda axios?

export const TEST = 'TEST';
export const ONQUESTIONINPUT = 'ONQUESTIONINPUT';
export const ADDQUESTION = 'ADDQUESTION';
export const DELETEQUESTION = 'DELETEQUESTION';
export const ONALTERNATIVEINPUT = 'ONALTERNATIVEINPUT';

export const test = (id) => {
  return {
    type: TEST,
    payload: id
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
