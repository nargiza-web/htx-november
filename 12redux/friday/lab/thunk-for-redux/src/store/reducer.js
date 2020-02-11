import * as actionTypes from './types/actionTypes'

const initialState = {
  movies: []
}

const reducer = (state=initialState, action)=> 
{
  if(action.type === actionTypes.LOAD_MOVIES){
    return{
      ...state,
      movies: action.payload
    }
  }
  return state
}

export default reducer