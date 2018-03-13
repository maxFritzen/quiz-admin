import React from 'react';
import { connect } from 'react-redux';
import Alternative from './Alternative';
import Select from './Select';
import validate from './validate';
import {
  onAlternativeInput,
  deleteAlternative,
  addAlternative,
  setCorrectAlternative
 } from '../actions';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // blur: false,
      // focus: false,
      // altBlur: false,
      // altFocus: false
      error: false,
      errorMessage: 'error'
    }

  }

  handleInputChange = (e, index) => {
    // For alternative
    this.props.onAlernativeInput(e.target.value, index, this.props.index);
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

  onFocus = () => {
    this.setState({
      error: false
    });
  }

  onBlur = () => {
    if(!this.props.value) {
      this.setState({
        error: true,
        errorMessage: 'Please enter value'
      });
    }
  }
  render() {
  // const error = validate(this.props.form);

  const alternatives = this.props.alternatives;
    return (
      <div>
        <h4>Question</h4>
        <input
          value={this.props.value}
          onChange={(e) => this.props.onChange(e, this.props.index)}
          placeholder="Question"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          // onFocus={() => this.onFocus('question')}
          // onBlur={() => this.onBlur('question')}
        />
        {/* {this.state.blur && error.question} */}
        {this.state.error && this.state.errorMessage}
        {/* {this.props.error.question[this.props.index]} */}
        <ul>
          {alternatives.map((alternative, index) => (
              <li key={index}>
                 <Alternative
                    index={index}
                    value={this.props.alternatives[index]}
                    onChange={this.handleInputChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    // error={error.alternative}
                    blur={this.state.altBlur}
                 />
                 {/* {this.state.altBlur && error.alternative} */}
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
  onAlernativeInput: (value, index, questionIndex) => dispatch(onAlternativeInput(value, index, questionIndex)),
  deleteAlternative: (index, questionIndex) => dispatch(deleteAlternative(index, questionIndex)),
  addAlternative: (questionIndex) => dispatch(addAlternative(questionIndex)),
  setCorrectAlternative: (value, questionIndex) => dispatch(setCorrectAlternative(value, questionIndex))
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
