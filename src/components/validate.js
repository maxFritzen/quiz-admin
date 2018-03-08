const validate = (values) => {
  console.log(values);
  const errors = {};
  if(!values.title) {
    errors.title = 'Please enter a title'
  }
  console.log(errors);
  return errors;
}

export default validate;
