import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Reducers from '../reducers';
import Router from '../router';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

class App extends Component{
  
  render() {

    return(
        
    <Provider store={createStore(Reducers, {}, applyMiddleware(ReduxThunk))}>
      <Router />
    </Provider>
    
    )}
}


export default App;