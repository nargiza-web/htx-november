
import * as actionTypes from '../actions/actionTypes'

const initialState = {
  tasks: []
}

const reducer = (state = initialState,action) => {

  switch(action.type) {
    case 'ADD_NEW_TASK':
      return {
        ...state,
        tasks: state.tasks.concat(action.task)
      }
  }

  return state
}

export default reducer
