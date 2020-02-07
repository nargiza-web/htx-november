import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { setAuthenticationHeader } from './utils/authentication';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseLayout from './components/BaseLayout'
import BankAccounts from './components/BankAccounts';
import CreditCardAccounts from './components/CreditCardAccounts';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer';
import requireAuth from './components/requireAuth'

// create a redux store 
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// set the authentication header when the person 
// has refreshed the page 
const token = localStorage.getItem('jsonwebtoken')
setAuthenticationHeader(token)
// set the redux state based on the token 
store.dispatch({type: 'ON_LOGIN_SUCCESS', token: token})


ReactDOM.render(
    <Provider store = { store }>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
            <Route exact path = "/" component = { App } />
            <Route path = "/bank-accounts" component =  { requireAuth(BankAccounts)} />
            <Route path = "/credit-card-accounts" component =  { requireAuth(CreditCardAccounts)} />
        </Switch>
        </BaseLayout>
    </BrowserRouter>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
