
import * as actionTypes from './actionTypes'

export const incrementCounter = () => {
    return {
        type: actionTypes.INC_COUNTER
    }
}

export const taskAdded = (taskName) => {
    return {
        type: actionTypes.TASK_ADDED, 
        payload: taskName
    }
}