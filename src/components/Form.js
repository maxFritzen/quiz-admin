import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Question from './Question';
import { onQuestionInput, addQuestion, deleteQuestion } from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // questions: ['', '']
    }
  }

  handleAddQuestion = () => {
    this.props.addQuestion();
    // const newArray = this.state.questions;
    // newArray.push('');
    // this.setState({
    //   questions: newArray
    // });
  };

  handleInputChange = (e, index) => {
    const value = e.target.value;
    this.props.onChange(value, index);
   //  const newArray = this.state.questions;
   //  newArray[index] = e.target.value;
   //  this.setState({
   //   questions: newArray
   // });
  }

  remove = (index) => {
    this.props.deleteQuestion(index);

    // const newArray = this.state.questions;
    // newArray.splice(index, 1);
    // this.setState({
    //   questions: newArray
    // });
  }

  // renderPosts() {
  //   return   _.map(this.props.posts, post => {
  //     return (
  //       <li className="list-group-item" key={post.id} >
  //         <Link to={`/posts/${post.id}`}>
  //           {post.title}
  //         </Link>
  //
  //       </li>
  //     );
  //   });
  // }
  // renderQuestions = () => {
  //   let i = 0;
  //   return _.map(this.props.questions, question => {
  //     i++;
  //     return (
  //       <li key={i}>
  //         <Question
  //            index={i} // Används i onChange
  //            // value={this.state.questions[index]}
  //            value={this.props.questions.one.question}
  //            onChange={this.handleInputChange}
  //
  //         />
  //       </li>
  //     )
  //   });

    // console.log (Object.keys(this.props.questions));
  // }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('questions:', this.props.questions);
  }

  render() {
    // console.log(this.props.questions[0].question);
    //
    // // const questions = this.state.questions;
    const questions = this.props.questions;
    // console.log(questions);
    return (
      <form onSubmit={this.onSubmit}>
        FORM
        <h3>{this.props.title}</h3>

        <ul>
          {/* {this.renderQuestions()} */}
          {questions.map((question, index) => (
              <li key={index}>
                 <Question
                    index={index} // Används i onChange
                    // value={this.state.questions[index]}
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
