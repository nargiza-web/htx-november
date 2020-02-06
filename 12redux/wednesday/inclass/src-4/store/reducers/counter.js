
import * as actionTypes from '../actions/actionTypes'

// global state 
const initialState = {
    counter: 99
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
    }

    return state
}

export default reducer