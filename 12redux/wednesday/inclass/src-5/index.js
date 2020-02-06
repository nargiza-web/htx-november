import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './store/reducer'
import { Provider } from "react-redux";

// For testing download the following packages 
// npm install enzyme react-test-renderer enzyme-adapter-react-16

// redux-thunk allows you to access dispatch inside action creators so action creators can dispatch actions which can go all the way to the reducers
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(  applyMiddleware(thunk)
));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));
serviceWorker.unregister();
