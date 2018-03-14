const validate = (values) => {
  // console.log(values);
  const errors = {
    questions: [
       {
        "question": "",
        "alternatives": ["", ""],
        "correctAlternative": ""
      }
    ]
  };
  // const errors = {
  //   question: [],
  //   alternatives: []
  // };
  if(!values.title) {
    errors.title = 'Please enter a title'
  }

  values.questions.map((item, index) => {
    if(!item.question){
      errors.questions[index].question = 'Please enter a question'
    }
  });
    // values.questions[index].alternatives.map((element, i) => {
    //   if(!element) {
    //     errors.alternative[i] = 'Enter alternative'
    //   }
    // })
  // values.questions.map((item, index) => {
  //   if(!item.question){
  //     errors.question[index] = 'Please enter a question'
  //   }
  //   values.questions[index].alternatives.map((element, i) => {
  //     if(!element) {
  //       errors.alternative[i] = 'Enter alternative'
  //     }
  //   })
    // item.alternatives.map((alternative, index) => { // det här blir inte för alla.
    //   if(!alternative) {
    //     errors.alternative[index] = 'Enter alternative'
    //   }
    // })
  // });


  // if(!values.alternative){
  //   errors.alternative = ' Please enter a alternative'
  // }
  console.log(errors);
  return errors;
}

export default validate;

// const validate = (values) => {
//   // console.log(values);
//   const errors = {};
//   if(!values.title) {
//     errors.title = 'Please enter a title'
//   }
//   if(!values.questions[0].question){
//
//     errors.question = ' Please enter a question'
//   }
//   if(!values.alternative){
//     errors.alternative = ' Please enter a alternative'
//   }
//   return errors;
// }

// export default validate;
