
const redux = require('redux')
const createStore = redux.createStore 

const initialState = {
    counter: 0 
}

const reducer = (state = initialState, action) => {
    if(action.type == 'INCR_COUNTER') {
        return {
            ...state, 
            counter: state.counter + 1
        }
    }
    return state 
}

const store = createStore(reducer)
store.subscribe(() => {
    console.log('Subscription Fired')
})
console.log(store.getState())
store.dispatch({type: 'INCR_COUNTER'})
console.log(store.getState())