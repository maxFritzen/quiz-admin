const validate = (values) => {
  const errors = {};
  if(!values.title) {
    errors.title = 'Please enter a title'
  }
  return errors;
}

export default validate;
