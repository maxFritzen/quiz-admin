import { combineReducers } from 'redux';
import form from './reducer_form';
import validate from './reducer_validate';
import errorMessage from './reducer_error';

const rootReducer = combineReducers({
  form,
  errorMessage,
  validate
});

export default rootReducer;
