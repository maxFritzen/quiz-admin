import { combineReducers } from 'redux';
import form from './reducer_form';
import validate from './reducer_validate';

const rootReducer = combineReducers({
  form,
  validate
});

export default rootReducer;
