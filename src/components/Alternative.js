import React from 'react';
import { connect } from 'react-redux';
import { alternativeInput, validateInput } from '../actions';

class Alternative extends React.Component {
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

  onChange = (e, index) => {
    // For title

      if(this.props.error.alternative[this.props.index]) {
          // This one validates after input, making sure the warning disappears
          // when OK.
          this.props.validateInput('alternative', e.target.value, index, this.props.questionIndex);
      } else {
      // Validation happens in local state, and only when onBlur.
      this.props.alternativeInput(e.target.value, index, this.props.questionIndex);
    }
    // if(this.props.error.alternative) {
    //   if(this.props.error.alternative[this.props.index]) {
    //       // This one validates after input, making sure the warning disappears
    //       // when OK.
    //       this.props.validateInput(e.target.value, 'alternative');
    //     }
    //   } else {
    //   // Validation happens in local state, and only when onBlur.
    //   this.props.alternativeInput(e.target.value, index, this.props.questionIndex);
    // }
  }

  onFocus = () => {
    this.setState({
      error: false
    });
  }

  render() {
    return (
      <div>
        <input
          value={this.props.value}
          onChange={(e) => this.onChange(e, this.props.index)}
          // onChange={(e) => this.props.onChange(e, this.props.index)}
          placeholder="Alternative"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        {this.state.error && this.state.errorMessage}
        {/* {this.props.error.questions[this.props.questionIndex] && this.props.error.questions[this.props.questionIndex].alternatives[this.props.index]} */}

      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  error: state.validate.error,
  form: state.form
});

const mapDispatchToProps = (dispatch) => ({
  alternativeInput: (value, index, questionIndex) => dispatch(alternativeInput(value, index, questionIndex)),
  validateInput: (dispatchToValidate, value, index, questionIndex) => dispatch(validateInput(dispatchToValidate, value, index, questionIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Alternative);

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
