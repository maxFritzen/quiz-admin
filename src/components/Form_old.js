import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import validate from './validate';
import { createQuiz } from '../actions';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
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

const renderQuestions = ({ fields, meta: { error, submitFailed } }) => (
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
          component={renderField}
          label="Question"
        />
        <FieldArray name={`${question}.alternatives`} component={renderAlternatives} />


        <Field name={`${question}.correct`} component="select">
          <option></option>


            <option value="00ff00">{fields.question.question}</option>
            <option value="0000ff">Blue</option>
        </Field>
      </li>
    ))}
  </ul>
);

export const renderAlternatives = ({ fields, meta: { error } }) => (
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
          component={renderField}
          label={`Alternative #${index + 1}`}
        />
      </li>
    ))}
  </ul>
);

const onSubmit = (values) => {
  console.log('values:', values);
  // createQuiz(values);
}


export const Form = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit.bind(this))} className="form-horizontal">
      <Field
        name="quizName"
        type="text"
        component={renderField}
        label="Quiz Title"
      />
      <FieldArray name="questions" component={renderQuestions} />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default reduxForm({
  form: 'quizForm',
  validate
})(
  connect(null, {createQuiz})(Form)
);
