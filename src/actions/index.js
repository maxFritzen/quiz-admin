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

export const ERRORMSG = 'ERRORMSG';

// Add form to database
export const addForm = (form, callback) => {
  console.log('addform');
  return (dispatch, getState) => {
    return database.ref(`quiz/${form.title}`).push(form).then((ref) => {
      console.log('form added');
      callback();
    }).catch((e) => {
        console.log('ERROR:', e.message);
        return (dispatch(errorMessage(e.message)));
    });
  }
}

const errorMessage = (message) => {
  return {
    type: ERRORMSG,
    message
  }
}

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
  }
}


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
