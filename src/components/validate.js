const validate = (values) => {
  // console.log(values);
  const errors = {};
  if(!values.title) {
    errors.title = 'Please enter a title'
  }
  if(!values.questions[0].question){

    errors.question = ' Please enter a question'
  }
  if(!values.alternative){
    errors.alternative = ' Please enter a alternative'
  }
  return errors;
}

export default validate;
