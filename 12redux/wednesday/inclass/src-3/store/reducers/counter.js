
import * as actionTypes from '../actions/actionTypes'

const initialState = {
  counter: 9999
}

const reducer = (state = initialState,action) => {

  switch(action.type) {
    case actionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      }
  }

  return state
}

export default reducer
