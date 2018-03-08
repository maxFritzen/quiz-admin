import React from 'react';
import { connect } from 'react-redux';
import Alternative from './Alternative';
import Select from './Select';
import {
  onAlternativeInput,
  deleteAlternative,
  addAlternative,
  setCorrectAlternative
 } from '../actions';

class Question extends React.Component {
  constructor(props) {
    super(props);

  }

  handleInputChange = (e, index) => {
    // const value = e.target.value;
    // const questionIndex = this.props.index;
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

  render() {

  const alternatives = this.props.alternatives;
    return (
      <div>
        <h4>Question</h4>
        <input
          value={this.props.value}
          onChange={(e) => this.props.onChange(e, this.props.index)}
          placeholder="Question"
        />
        <ul>
          {alternatives.map((alternative, index) => (
              <li key={index}>
                 <Alternative
                    index={index}
                    value={this.props.alternatives[index]}
                    onChange={this.handleInputChange}
                 />
                <button type="button" onClick={() => this.remove(index)}>Delete Alternative</button>
              </li>
          ))}
        </ul>
        <button type="button" onClick={this.handleAddAlternative}>Add Alternative</button>
        <Select
          correctAlternative={this.props.correctAlternative}
          handleChange={this.handleSelectChange}
          alternatives={this.props.alternatives}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
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
