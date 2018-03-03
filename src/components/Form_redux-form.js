import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import validate from './validate';
import { createQuiz } from '../actions';

// class renderQuestions extends React.Component {
//   render() {
//     return (
//       <ul>
//          <li>
//            <button type="button" onClick={() => fields.push({})}>
//              Add Question
//            </button>
//            {submitFailed && error && <span>{error}</span>}
//          </li>
//          {fields.map((question, index) => (
//           <li key={index}>
//             <button
//               type="button"
//               title="Remove Question"
//               onClick={() => fields.remove(index)}
//             >
//             Remove Question
//             </button>
//             <h3>Question #{index + 1} </h3>
//             <Field
//               name={`${question}.question`}
//               type="text"
//               component={this.renderField}
//               label="Question"
//             />
//             <FieldArray name={`${question}.alternatives`} component={renderAlternatives} />
//
//
//             <Field name={`${question}.correct`} component="select">
//               <option></option>
//
//                 <option value="00ff00">asd</option>
//                 <option value="0000ff">Blue</option>
//             </Field>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    alternatives: []
    }
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => (

    <div>
      <label>{label}</label>
      <div>
        <input
          {...input}
          type={type}
          placeholder={label}
        />
      </div>
    </div>
  );

  renderQuestions = ({ fields, meta: { error, submitFailed } }) => {
    const alternatives = 'test';
    return (
      <ul>
        <li>
          <button type="button" onClick={() => fields.push({})}>
            Add Question
          </button>
          {submitFailed && error && <span>{error}</span>}
        </li>
        {fields.map((question, index) => (

          <li key={index}>
            <button
              type="button"
              title="Remove Question"
              onClick={() => fields.remove(index)}
            >
            Remove Question
            </button>
            <h3>Question #{index + 1} </h3>
            <Field
              name={`${question}.question`}
              type="text"
              component={this.renderField}
              label="Question"
            />
            <FieldArray name={`${question}.alternatives`} component={this.renderAlternatives} />


            {/* <Field name={`${question}.correct`} component="select">
              <option></option>

                <option value="00ff00">{question[0]}</option>
                <option value="0000ff">Blue</option>
            </Field> */}
          </li>
        ))}
      </ul>
    )
  };

  renderAlternatives = ({ fields, meta: { error } }) => {

    return (
      <ul>
        <li>
          <button type="button" onClick={() => fields.push()}>
            Add Alternative
          </button>
        </li>
        {fields.map((alternative, index) => (
          <li key={index}>
            <button
              type="button"
              title="Remove Alternative"
              onClick={() => fields.remove(index)}
              >
              Remove Alternative
            </button>
            <Field
              name={alternative}
              type="text"
              component={this.renderField}
              label={`Alternative #${index + 1}`}
            />
            <Field
              name={`${alternative}`}
              type="checkbox"
              component="input"
              label="js"

            />
          </li>
        ))}

      </ul>
    );


  }

  onSubmit = (values) => {
   console.log('values:', values);
   // createQuiz(values);
 }


  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="">
        <h1>testing:{this.props.test}</h1>
        <Field
          name="quizName"
          type="text"
          component={this.renderField}
          label="Quiz Title"
        />
        <FieldArray name="questions" component={this.renderQuestions} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  test: state.quizForm
}

export default reduxForm({
  form: 'quizForm',
  validate
})(
  connect(mapStateToProps, {createQuiz})(Form)
);
