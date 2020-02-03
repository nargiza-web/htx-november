
// global state 
const initialState = {
    counter: 99, 
    isAuthenticated: false, 
    tasks: [], 
    username: ''
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INCREMENT_COUNTER': 
            return {
                ...state, 
                counter: state.counter + 1 
            }
        case 'USER_NAME_SAVED': 
            return {
             ...state, 
             username: action.username 
        } 
    }

    /*
    if(action.type == 'INCREMENT_COUNTER') {
        return {
            ...state, 
            counter: state.counter + 1 
        }
    } else if(action.type == 'USER_NAME_SAVED') {
        return {
            ...state,
            username: action.name 
        }
    } */

    return state 
}

export default reducer 