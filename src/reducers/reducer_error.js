import { ERRORMSG } from '../actions';

export default (state = {message: ''}, action) => {
  switch (action.type) {
    case ERRORMSG:
      console.log('errormessage:', action.message);
      return {
          ...state,
          message: 'Something went wrong, try again or try changing the title to something else'//action.message
        }
    default: return state;
  }
}
