
/*
let obj1 = {
    name: 'John', 
    age: 34
}

let obj2 = {...obj1, address: 'Richmond Ave'}
*/


/*
this.state = {
    counter: 0 
} */

const redux = require('redux')
const createStore = redux.createStore

// create initial state 
const initialState = {
    counter: 0, 
    isLoggedIn: false 
}

/*
function orderIcecream(flavor = "vanilla") {

}
orderIcecream("coffee") 
*/

// reducer 
// if state is undefined then choose the initialState 
// else if state is not undefined then just return state 
const reducer = (state = initialState, action) => {
    console.log(action.type)
    if(action.type == 'INC_COUNTER') {
        // update the counter global state
        // and returning the updated state 
        return {
            ...state, // copy the old state
            counter: state.counter + 1
        }
    } else if(action.type == 'ADD_COUNTER') {
        // increment the counter by value 
        return {
            ...state, // copy the old state
            counter: state.counter + action.value
        }
    }
    // return the initial state 
    return state 
}

// store 
const store = createStore(reducer)
console.log(store.getState())

// subscription 
store.subscribe(() => {
    console.log('Subscription Fired')
})

// dispatch actions 
store.dispatch({type: 'INC_COUNTER'})
console.log(store.getState())

// increment counter by certain value 
store.dispatch({type: 'ADD_COUNTER',value: 100})
console.log(store.getState())


