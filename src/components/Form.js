import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Question from './Question';
import { questionInput, addQuestion, deleteQuestion, titleInput, validateInput, validate } from '../actions';
// import validate from './validate';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // focus: false,
      // blur: false
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
  // handleAddQuestion = () => {
  //   this.props.addQuestion();
  // };

  handleInputChange = (e, index) => {
    // For question
    this.props.questionInput(e.target.value, index);

  }

  remove = (index) => {
    this.props.deleteQuestion(index);
  }

  test = () => {
    console.log('testing callback');
  }

  onChange = (e) => {
    // For title

    if(this.props.error.title) {
      // This one validates after input, making sure the warning disappears
      // when OK.
      this.props.validateInput('title', e.target.value);
    } else {
      // Validation happens in local state, and only when onBlur.
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
    // console.log('questions:', this.props.questions);
    // validate(this.props.form);
    this.props.validate(this.props.form);
  }

  render() {
    console.log('render form');
    // const error = validate(this.props.form);
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
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.validate.error,
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
  validate: (value) => dispatch(validate(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
