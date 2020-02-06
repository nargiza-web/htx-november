
import * as actionTypes from '../actions/actionTypes'

// global state 
const initialState = {
    tasks: [] 
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
            
        case actionTypes.TASK_ADDED:
            return {
                ...state, 
                tasks: state.tasks.concat(action.payload)
            }
    }

    return state
}

export default reducer