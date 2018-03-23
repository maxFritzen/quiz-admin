import { ERRORMSG } from '../actions';

export default (state = {message: ''}, action) => {
  switch (action.type) {
    case ERRORMSG:
      console.log('errormessage:', action.message);
      return {
          ...state,
          message: action.message
        }
    default: return state;
  }
}
