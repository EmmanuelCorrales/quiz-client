import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers/index.js';
import Quiz from './components/Quiz.js';

const middleware = applyMiddleware(logger, thunk);
const store = createStore(reducers, middleware);

class App extends Component {

  render() {
    return (
      <Provider store={ store } >
        <Quiz />
      </Provider>
    );
  }
}

export default App;
