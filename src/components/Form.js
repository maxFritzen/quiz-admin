import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Question from './Question';
import { onQuestionInput, addQuestion, deleteQuestion, titleInput } from '../actions';
import validate from './validate';

class Form extends React.Component {
  constructor(props) {
    super(props);

  }

  handleAddQuestion = () => {
    this.props.addQuestion();
  };

  handleInputChange = (e, index) => {
    this.props.onChange(e.target.value, index);
  }

  remove = (index) => {
    this.props.deleteQuestion(index);
  }

  onChange = (e) => {
    this.props.titleInput(e.target.value);
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('questions:', this.props.questions);
  }

  render() {
    console.log('render form');

    validate(this.props.form);
    const questions = this.props.questions;

    return (
      <form onSubmit={this.onSubmit}>
        FORM
        <h3>
            <input
            value={this.props.title}
            onChange={(e) => this.onChange(e)}
            placeholder="Title"
          />

        </h3>

        <ul>

          {questions.map((question, index) => (
              <li key={index}>
                 <Question
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
  form: state.form,
  title: state.form.title,
  questions: state.form.questions
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value, index) => dispatch(onQuestionInput(value, index)),
  addQuestion: () => dispatch(addQuestion()),
  deleteQuestion: (index) => dispatch(deleteQuestion(index)),
  titleInput: (value) => dispatch(titleInput(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
