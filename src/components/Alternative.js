import React from 'react';

export default class Alternative extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: false,
      errorMessage: 'error'
    };
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
    return (
      <div>
        <input
          value={this.props.value}
          onChange={(e) => this.props.onChange(e, this.props.index)}
          placeholder="Alternative"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        {this.state.error && this.state.errorMessage}

      </div>
    );
  }
}



// const Alternative = (props) => (
//   <div>
//     <input
//       value={props.value}
//       onChange={(e) => props.onChange(e, props.index)}
//       placeholder="Alternative"
//       // onFocus={() => props.onFocus('alt')}
//       // onBlur={() => props.onBlur('alt')}
//     />
//     {/* {props.blur && props.error} */}
//   </div>
//
// );
//
// export default Alternative;
