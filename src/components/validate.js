const validate = (values) => {

  let errors = {};

  if(!values.title) {
    errors.title = 'Please enter a title'
  }

  values.questions.map((item, index) => {
    const id = (index + 1).toString();

    if(!item.question){
      //push new object into questions[index]
      errors = {
        ...errors,
        questions: {
          ...errors.questions,
          [id]: {
            question:'PLEASE ENTER A QUESTION',
            alternatives:[]
          }
        }
      }
    } else { // To work with alternatives , this is quick solution
      errors = {
        ...errors,
        questions: {
          ...errors.questions,
          [id]: {
            question:'',
            alternatives:[]
          }
        }
      }
    }

    if(!item.correctAlternative){
      const question = errors.questions[id];
      errors = {
        ...errors,
        questions: {
          ...errors.questions,
          [id]: {
            ...question,
            correctAlternative: true
          }
        }
      }
    } else {
      const question = errors.questions[id];
      errors = {
        ...errors,
        questions: {
          ...errors.questions,
          [id]: {
            ...question,
            correctAlternative: false
          }
        }
      }
    }


    item.alternatives.map((alternative, index) => {
      const question = errors.questions[id];
      if(!alternative) {
        errors = {
          ...errors,
          questions: {
            ...errors.questions,
            [id]: {
              ...question,
              alternatives:[
                ...question.alternatives,
               'ADD ALTERNATIVE'
              ]
            }
          }
        }
      } else {
        errors = {
          ...errors,
          questions: {
            ...errors.questions,
            [id]: {
              ...question,
              alternatives:[
                ...question.alternatives,
               ''
              ]
            }
          }
        }
      }
    })
  });

  return errors;
}

export default validate;
