import * as actionTypes from '../store/types/actionTypes'

const initialState = {
  counter: 0,
  tasks: []
}

const reducer = (state=initialState, action) => {
  if(action.type === actionTypes.INCREMENT){
    return {
      ...state,
      counter: state.counter + 1
    }
  }
  if (action.type === 'TASK_ADDED'){
    return {
      ...state,
      tasks: state.tasks.concat(action.value)
    }
  }
  return  state
}

export default reducer