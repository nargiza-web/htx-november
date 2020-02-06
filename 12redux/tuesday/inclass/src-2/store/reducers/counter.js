
import * as actionTypes from '../types/actionTypes'

const initialState = {
    counter: 99
}

const reducer = (state = initialState, action) => {

    if(action.type == actionTypes.INCREMENT_COUNTER) {
        return {
            ...state, 
            counter: state.counter + 1
        }
    }  else if(action.type == 'DECREMENT_COUNTER') {
        return {
            ...state, 
            counter: state.counter - 1
        }
    }

    return state 
}

export default reducer 