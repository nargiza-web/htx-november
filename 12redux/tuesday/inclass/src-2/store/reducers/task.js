
import * as actionTypes from '../types/actionTypes'

const initialState = {
    tasks: [] 
}

const reducer = (state = initialState, action) => {

     if(action.type == actionTypes.TASK_ADDED) {
        return {
            ...state, 
            tasks: state.tasks.concat(action.taskName)
        }
    } 

    return state 
}

export default reducer 