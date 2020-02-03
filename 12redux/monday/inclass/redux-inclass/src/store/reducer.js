
// global state 
const initialState = {
    counter: 99, 
    isAuthenticated: false, 
    books: [] ,
    user: ''
}

const reducer = (state = initialState, action) => {
    
    if(action.type === 'INCREMENT_COUNTER') {
        return {
            ...state, 
            counter: state.counter + 1 
        }
    }
    if (action.type === 'DECREMENT'){
        return {
            ...state,
            counter: state.counter -1
        }
    }
    
    if (action.type === 'SUBTRACT'){
        return {
            ...state,
            counter: state.counter -5
        }
    }
    
    if (action.type === 'SAVE_USER'){
        return {
            ...state,
            user: action.user
        }
    }

    return state 
}

export default reducer 