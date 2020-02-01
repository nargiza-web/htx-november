const redux = require('redux')
const createStore =redux.createStore

console.log(createStore)

const initialState = {
  count: 0,
  isAuthenticated: false
}

const reducer = (state = initialState, action) => {
   
  if(action.type == 'INCRE_COUNTER'){
    return {
      ...state,
      count: state.count + 1
    }
  } else if(action.type == 'ADD_COUNTER'){
    return{
      ...state,
      count: state.count + action.value
    }
  } else if (action.type == 'DECREMENT') {
    return {
      ...state,
      count: state.count - 1
    }
  }
  return state
}

const store = createStore(reducer)//create store

store.subscribe(() => {
  console.log('[STORE UPDATED]')
})

console.log(store.getState())

for(let i=0;i<10;i++){
  
  store.dispatch({type: 'INCRE_COUNTER'})
  
}

console.log("AFTER UPDATING GLOBAL STATE")
console.log(store.getState())

store.dispatch({type: 'ADD_COUNTER', value: 100})
console.log(store.getState())

store.dispatch({type: 'DECREMENT'})
console.log(store.getState)
