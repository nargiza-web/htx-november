const redux = require('redux')
const createStore = redux.createStore // returns a function which allows to create a global store 

console.log(createStore)

const initialState = {
    count: 0, 
    isAuthenticated: false 
}

// state is global state 
const reducer = (state = initialState, action) => {

    if(action.type == 'INCRE_COUNTER') {
        return {
            ...state, 
            count: state.count + 1
        }
    } else if(action.type == 'ADD_COUNTER') {
        return {
            ...state, 
            count: state.count + action.value
        }
    }

    return state 
}

const store = createStore(reducer) // create a store 

store.subscribe(() => {
    console.log('[STORE UPDATED]')
})


console.log(store.getState())
store.dispatch({type: 'INCRE_COUNTER'})
console.log("AFTER UPDATING GLOBAL STATE")
console.log(store.getState())

// add 100 to counter 
store.dispatch({type: 'ADD_COUNTER', value: 100})
console.log(store.getState())