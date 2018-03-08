import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Question from './Question';
import { onQuestionInput, addQuestion, deleteQuestion } from '../actions';

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


  onSubmit = (e) => {
    e.preventDefault();
    console.log('questions:', this.props.questions);
  }

  render() {

    const questions = this.props.questions;

    return (
      <form onSubmit={this.onSubmit}>
        FORM
        <h3>{this.props.title}</h3>

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
  title: state.form.title,
  questions: state.form.questions
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value, index) => dispatch(onQuestionInput(value, index)),
  addQuestion: () => dispatch(addQuestion()),
  deleteQuestion: (index) => dispatch(deleteQuestion(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
