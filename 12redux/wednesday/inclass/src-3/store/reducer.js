
import * as actionTypes from './actions/actionTypes'

const initialState = {
  counter: 9999,
  tasks: []
}

const reducer = (state = initialState,action) => {

  switch(action.type) {
    case actionTypes.INCREMENT_COUNTER: //   case 'INCREMENT_COUNTER':
      return {
        ...state,
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      }

    case 'ADD_NEW_TASK':
      return {
        ...state,
        tasks: state.tasks.concat(action.task)
      }
  }

  return state
}

export default reducer
