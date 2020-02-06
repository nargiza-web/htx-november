import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Movie from './components/Movie'
import AddMovie from './components/AddMovie'
import { createStore } from 'redux'
import reducer from './store/reducer'
import { Provider } from 'react-redux'

// create a store
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <BrowserRouter>
  <Provider store = {store}>
    <App>
      <Switch>
        <Route exact path= '/' component={Movie} />
        <Route exact path= '/add-movie' component={AddMovie} />
      </Switch>
    </App>
  </Provider>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
