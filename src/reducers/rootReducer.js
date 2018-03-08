import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import form from './reducer_form';

const rootReducer = combineReducers({
  form
});

export default rootReducer;
