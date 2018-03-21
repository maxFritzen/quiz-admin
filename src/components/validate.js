const validate = (values) => {

  let errors = {};

  if(!values.title) {
    errors.title = 'Please enter a title'
  }

  values.questions.map((item, index) => {
    if(!item.question){
      const id = (index + 1).toString();
      //push new object into questions[index]
      errors = {
        ...errors,
        questions: {
          ...errors.questions,
          [id]: {
            question:'PLEASE ENTER A QUESTION'
          }
        }
      }
    }
    item.alternatives.map((alternative, index) => {
      if(!alternative) {
        console.log('what');
      }
    })
  });

  return errors;
}

export default validate;
