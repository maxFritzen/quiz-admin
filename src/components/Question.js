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
    this.state = {
      // correctAlternative: '',
      // alternatives: ['','']
    }

  }

  handleInputChange = (e, index) => {
    const value = e.target.value;
    const questionIndex = this.props.index;
    this.props.onAlernativeInput(value, index, questionIndex);

   //  const newArray = this.state.alternatives;
   //  newArray[index] = e.target.value;
   //  this.setState({
   //   alternatives: newArray
   // });
  }

  handleSelectChange = (e) => {
    this.props.setCorrectAlternative(e.target.value, this.props.index);
    // this.setState({
    //   correctAlternative: e.target.value
    // });
  }

  handleAddAlternative = () => {
    this.props.addAlternative(this.props.index);

    // this.props.test(2);
  //   const newArray = this.state.alternatives;
  //   newArray.push('');
  //   this.setState({
  //     alternatives: newArray
  //   });
  }

  remove = (index) => {
    // const questionIndex = this.props.index;
    this.props.deleteAlternative(index, this.props.index);
    // removes index from array, then sets alternatives to newArray.
    // const newArray = this.state.alternatives;
    // newArray.splice(index, 1);
    // this.setState({
    //   alternatives: newArray
    // });
  }

  render() {
  // const alternatives = this.state.alternatives;

  const alternatives = this.props.alternatives;
  // console.log(alternatives);
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
                    // value={this.state.alternatives[index]}
                    onChange={this.handleInputChange}
                 />
                <button type="button" onClick={() => this.remove(index)}>Delete Alternative</button>
              </li>
          ))}
        </ul>
        <button type="button" onClick={this.handleAddAlternative}>Add Alternative</button>
        <Select
          correctAlternative={this.props.correctAlternative}
          // correctAlternative={this.state.correctAlternative}
          handleChange={this.handleSelectChange}
          alternatives={this.props.alternatives}
          // alternatives={this.state.alternatives}
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
