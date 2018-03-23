import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Question from './Question';
import { questionInput, addQuestion, deleteQuestion, titleInput, validateInput, validate, addForm } from '../actions';
// import validate from './validate';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMessage: 'error'
    }

  }

  handleAddQuestion = () => {
    const l  = this.props.questions.length
    const lastId = this.props.questions[l - 1].id;
    const parsed = parseInt(lastId);
    console.log(lastId);
    this.props.addQuestion(parsed); //
  };


  handleInputChange = (e, index) => {
    // For question
    this.props.questionInput(e.target.value, index);

  }

  remove = (index) => {
    this.props.deleteQuestion(index);
  }

  onChange = (e) => {
    // For title
    if(this.props.error.title) {
      // If save-button have been clicked and errors occured.
      // This one validates after input, making sure the warning disappears
      // when OK.
      this.props.validateInput('title', e.target.value);
    } else {
      // Validation happens first in local state, and only when onBlur.
      this.props.titleInput(e.target.value);
    }
  }

  onFocus = () => {
    this.setState({
      error: false
    });
  }

  onBlur = () => {
    if(!this.props.title) {
      this.setState({
        error: true,
        errorMessage: 'Please enter value'
      });
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addForm(this.props.form, () => { // REMOVE THIS WHEN DONE WITH TESTING
      console.log(' form added, this is in Form.js');
      this.props.history.push('/form-added');
    });
    if(!this.props.error.questions && this.props.error.title) {
      this.props.addForm(this.props.form, () => {
        console.log(' form added, this is in Form.js');
        this.props.history.push('/form-added');
      });
    } else {
      this.props.validate(this.props.form);
    }

  }

  render() {

    const questions = this.props.questions;

    return (
      <form onSubmit={this.onSubmit}>
        FORM
        <h3>
            <input
              value={this.props.title}
              onChange={(e) => this.onChange(e)}
              placeholder="Title"
              onBlur={this.onBlur}
              onFocus={this.onFocus}
            />

          {this.state.error && this.state.errorMessage}
          {this.props.error.title}
        </h3>

        <ul>
          {questions.map((question, index) => (
              <li key={index}>
                 <Question
                    id={questions[index].id} //NY
                    index={index} // Används i onChange
                    value={this.props.questions[index].question}
                    onChange={this.handleInputChange}

                 />
                <button type="button" onClick={() => this.remove(index)}>Delete Question</button>
              </li>
          ))}
        </ul>
        <button type="button" onClick={this.handleAddQuestion}>Add Question</button>
        <button type="submit">Save</button>
        <p>{this.props.errorMessage}</p>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.validate.error,
  errorMessage: state.errorMessage.message,
  form: state.form,
  title: state.form.title,
  questions: state.form.questions
});

const mapDispatchToProps = (dispatch) => ({
  questionInput: (value, index) => dispatch(questionInput(value, index)),
  addQuestion: (lastId) => dispatch(addQuestion(lastId)), //NY
  // addQuestion: () => dispatch(addQuestion()),
  deleteQuestion: (index) => dispatch(deleteQuestion(index)),
  validateInput: (dispatchToValidate, value) => dispatch(validateInput(dispatchToValidate, value)),
  titleInput: (value) => dispatch(titleInput(value)),
  addForm: (form, callback) => dispatch(addForm(form, callback)),
  validate: (value) => dispatch(validate(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
