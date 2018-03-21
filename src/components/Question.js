import React from 'react';
import { connect } from 'react-redux';
import Alternative from './Alternative';
import Select from './Select';
import validate from './validate';
import {
  questionInput,
  alternativeInput,
  deleteAlternative,
  addAlternative,
  setCorrectAlternative,
  validateInput
 } from '../actions';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMessage: 'error'
    }

  }

  handleInputChange = (e, index) => {
    // For alternative
    this.props.alternativeInput(e.target.value, index, this.props.index);
  }

  handleSelectChange = (e) => {
    this.props.setCorrectAlternative(e.target.value, this.props.index);
  }

  handleAddAlternative = () => {
    this.props.addAlternative(this.props.index);
  }

  remove = (index) => {
    this.props.deleteAlternative(index, this.props.index);
  }



  onBlur = () => {
    if(!this.props.value) {
      this.setState({
        error: true,
        errorMessage: 'Please enter value'
      });
    }
  }

  onChange = (e, index) => {

      if(this.props.error.questions[this.props.index]) {
        // This one validates after input, making sure the warning disappears
        // when OK.
        this.props.validateInput('question', e.target.value, index);
      } else {
      // Validation happens in local state, and only when onBlur.
      this.props.questionInput(e.target.value, index);
    }
  }
  //   if(this.props.error.question) {
  //     if(this.props.error.question[this.props.index]) {
  //       // This one validates after input, making sure the warning disappears
  //       // when OK.
  //       this.props.validateInput('question', e.target.value, index);
  //     }
  //
  //   } else {
  //     // Validation happens in local state, and only when onBlur.
  //     this.props.questionInput(e.target.value, index);
  //   }
  // }

  onFocus = () => {
    this.setState({
      error: false
    });
  }

  render() {

  const alternatives = this.props.alternatives;
  // const error = this.props.error.questions.map((item, index) => {
  //   if(this.props.error.questions[index].question) {
  //     return error;
  //   }
  // })
  let error;
  // if (this.props.error.questions[this.props.index]) {
  //   error = this.props.error.questions[this.props.index].id === this.props.id ? 'Errorrrr' : 'Nooo error';
  // }
  // const error = ((this.props.error.questions[this.props.index]) && (this.props.error.questions[this.props.index].id === this.props.id))
  //   ?
  //   this.props.error.questions[this.props.index].question
  //   :
  //   'No error'
    return (
      <div>
        <h4>Question</h4>
        <input
          value={this.props.value}
          onChange={(e) => this.onChange(e, this.props.index)}
          // onChange={(e) => this.props.onChange(e, this.props.index)}
          placeholder="Question"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        id: {this.props.id}
        {this.state.error && this.state.errorMessage}
        {/* {error} */}
        {/* {this.props.error.questions[0].question} */}
        {/* {this.props.error.questions[this.props.index] && this.props.error.questions[this.props.index].question} */}
        {/* {error} */}
        {this.props.error.questions[this.props.id] && this.props.error.questions[this.props.id].question}
        <ul>
          {alternatives.map((alternative, index) => (
              <li key={index}>
                 <Alternative
                    index={index}
                    value={this.props.alternatives[index]}
                    questionIndex={this.props.index}
                    // onChange={this.handleInputChange}
                    // error={error.alternative}
                 />
                <button type="button" onClick={() => this.remove(index)}>Delete Alternative</button>
              </li>
          ))}
        </ul>
        <button type="button" onClick={this.handleAddAlternative}>Add Alternative</button>
        <Select
          error={this.state.error}// Lägg in global error eller hur jag väljer att ha det.
          correctAlternative={this.props.correctAlternative}
          handleChange={this.handleSelectChange}
          alternatives={this.props.alternatives}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  error: state.validate.error,
  form: state.form,
  alternatives: state.form.questions[props.index].alternatives,
  correctAlternative: state.form.questions[props.index].correctAlternative
});

const mapDispatchToProps = (dispatch) => ({
  questionInput: (value, index) => dispatch(questionInput(value, index)),
  alternativeInput: (value, index, questionIndex) => dispatch(alternativeInput(value, index, questionIndex)),
  deleteAlternative: (index, questionIndex) => dispatch(deleteAlternative(index, questionIndex)),
  addAlternative: (questionIndex) => dispatch(addAlternative(questionIndex)),
  setCorrectAlternative: (value, questionIndex) => dispatch(setCorrectAlternative(value, questionIndex)),
  validateInput: (dispatchToValidate, value, index) => dispatch(validateInput(dispatchToValidate, value, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
