import * as actionTypes from '../types/actionTypes'

export const incrementCounter = () => {
    return {
        type: actionTypes.INCREMENT_COUNTER
    }
}

export const taskAdded = (task) => {
    return {
        type: actionTypes.TASK_ADDED, 
        taskName: task 
    }
}
