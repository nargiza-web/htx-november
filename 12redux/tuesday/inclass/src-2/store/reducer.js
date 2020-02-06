
import * as actionTypes from '../store/types/actionTypes'

const initialState = {
    counter: 99, 
    tasks: [] 
}

const reducer = (state = initialState, action) => {

    if(action.type == actionTypes.INCREMENT_COUNTER) {
        return {
            ...state, 
            counter: state.counter + 1
        }
    } else if(action.type == actionTypes.TASK_ADDED) {
        return {
            ...state, 
            tasks: state.tasks.concat(action.taskName)
        }
    } else if(action.type == 'DECREMENT_COUNTER') {
        return {
            ...state, 
            counter: state.counter - 1
        }
    }

    return state 
}

export default reducer 