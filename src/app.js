import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './styles/styles.scss';

import Form from './components/Form'
import LoadingPage from './components/LoadingPage';
//import TestForm from './playground/TestForm';
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const App = () => (
  <Provider store={store}>
    <div>
      <Form />
    </div>
  </Provider>
);

let hasRendered = false;
const renderApp =  () => {
  if (!hasRendered) {
    ReactDOM.render(<App />, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));
renderApp();