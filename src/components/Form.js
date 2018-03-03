import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfQuestions: 2
    }
  }

  handleAddQuestion = () => (
    this.setState({
      numberOfQuestions: this.state.numberOfQuestions + 1
    })
  );

  onSubmit = (e) => {
    e.preventDefault();
    console.log('values:', e)
  }

  render() {
    const Questions = [];

    for (let i= 0; i < this.state.numberOfQuestions; i++) {
      Questions.push(<Question />);
    }
    return (
      <form onSubmit={this.onSubmit}>
        FORM
        Number of questions: {this.state.numberOfQuestions}
        {Questions.map((question, index) => {
          return <li key={index}>{question}</li>
        })}
        {/* {this.renderQuestions()} */}
        <button onClick={this.handleAddQuestion}>Add Question</button>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default connect()(Form);
