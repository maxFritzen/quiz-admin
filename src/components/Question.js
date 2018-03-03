import React from 'react';
import Alternative from './Alternative';
import Select from './Select';




export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: '',
      alternatives: ['','']
    }

  }

  handleInputChange = (e, index) => {
    const newArray = this.state.alternatives;
    newArray[index] = e.target.value;
    this.setState({
     alternatives: newArray
   });
  }

  handleSelectChange = (e) => {
    this.setState({
      selectValue: e.target.value
    });
  }

  handleAddAlternative = () => {
    const newArray = this.state.alternatives;
    newArray.push('');
    this.setState({
      alternatives: newArray
    });
  };

  remove = (index) => {
    // removes index from array, then sets alternatives to newArray.
    const newArray = this.state.alternatives;
    newArray.splice(index, 1);
    this.setState({
      alternatives: newArray
    });
  }

  render() {
  const alternatives = this.state.alternatives;

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
                    value={this.state.alternatives[index]}
                    onChange={this.handleInputChange}
                 />
                <button type="button" onClick={() => this.remove(index)}>Delete Alternative</button>
              </li>
          ))}
        </ul>
        <button type="button" onClick={this.handleAddAlternative}>Add Alternative</button>
        <Select
          selectValue={this.state.selectValue}
          handleChange={this.handleSelectChange}
          alternatives={this.state.alternatives}
        />
      </div>
    );
  }
}
