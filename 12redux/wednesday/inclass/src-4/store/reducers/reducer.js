
import * as actionTypes from '../actions/actionTypes'

// global state 
const initialState = {
    counter: 99, 
    tasks: [] 
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.INC_COUNTER: 
            return {
                ...state, 
                counter: state.counter + 1
            }
        
        case actionTypes.DEC_COUNTER: 
            return {
                ...state, 
                counter: state.counter - 1
            }
            
        case actionTypes.TASK_ADDED:
            return {
                ...state, 
                tasks: state.tasks.concat(action.payload)
            }
    }

    return state
}

export default reducer