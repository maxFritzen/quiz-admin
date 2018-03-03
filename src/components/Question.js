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
   }, () =>   console.log(this.state.alternatives));
  }

  handleSelectChange = (e) => {
    this.setState({
      selectValue: e.target.value
    });
  }

  handleAddAlternative = () => {
    const name = this.state.x;
    const newArray = this.state.alternatives;
    newArray.push('');
    console.log(newArray);
    this.setState({
      alternatives: newArray,
      x: this.state.x +1
    });
  };

  remove = (index) => {
      // Filter out index to be removed
    this.setState((prevState) => ({
           alternatives: prevState.alternatives.filter((i) => i !== this.state.alternatives[index])
         }));

  }

  render() {
  const alternatives = this.state.alternatives;

    return (
      <div>
        <h4>Question GÖR INPUT</h4>
        <ul>
          {alternatives.map((alternative, index) => (
              <li key={index}>
                 <Alternative
                    index={index}
                    value={this.state.alternatives[index]}
                    onChange={this.handleInputChange}
                 />
                <button type="button" onClick={() => this.remove(index)}>remove alternative</button>
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
