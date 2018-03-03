import React from 'react';

const Alternative = (props) => (
  <input
    value={props.value}
    onChange={(e) => props.onChange(e, props.index)}
    placeholder="Alternative"
  />
);

export default Alternative;

// export default class Alternative extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: ''
//     }
//   }
//   componentWillUnmount() {
//     console.log('Bye', this.state.value, this.props.name);
//   }
//   handleChange = (e) => {
//     this.setState({ value: e.target.value });
//     console.log(e.target.value, this.props.name);
//   }
//   render() {
//     return (
//       <div>
//          <input
//            type="text"
//            // value={this.state.value}
//            // value={this.props.value}
//            // onChange={this.handleChange}
//            onChange={this.props.handleInputChange}
//            name={this.props.name}
//            placeholder={this.props.name}
//          />
//       <button type="button" onClick={() => this.props.handleSaveAlternative(this.state.value)}>ADD</button>
//       </div>
//     );
//   }
// }
