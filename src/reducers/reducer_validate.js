import { VALIDATE } from '../actions';
import validate from '../components/validate';

const initialState = {
  error: {
    questions: [
       {
        "question": "",
        "alternatives": ["", ""],
        "correctAlternative": ""
      }
    ],
    title: ''
  }
}
export default (state = initialState, action) => {
  switch (action.type) {
    case VALIDATE:
    console.log('VALIDATE:');
    const error = validate(action.value);
    return {
      error
    }

    default: return state;
  }
}
