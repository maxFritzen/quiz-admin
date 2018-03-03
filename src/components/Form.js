import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: ['', '']
    }
  }

  handleAddQuestion = () => {
    const newArray = this.state.questions;
    newArray.push('');
    this.setState({
      questions: newArray
    });
  };

  handleInputChange = (e, index) => {
    const newArray = this.state.questions;
    newArray[index] = e.target.value;
    this.setState({
     questions: newArray
   });
  }

  remove = (index) => {
    const newArray = this.state.questions;
    newArray.splice(index, 1);
    this.setState({
      questions: newArray
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('values:')
  }

  render() {
    const questions = this.state.questions;
    return (
      <form onSubmit={this.onSubmit}>
        FORM
        <ul>
          {questions.map((question, index) => (
              <li key={index}>
                 <Question
                    index={index} // Används i remove
                    value={this.state.questions[index]}
                    onChange={this.handleInputChange}

                 />
                <button type="button" onClick={() => this.remove(index)}>Delete Question</button>
              </li>
          ))}
        </ul>
        <button onClick={this.handleAddQuestion}>Add Question</button>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default connect()(Form);
