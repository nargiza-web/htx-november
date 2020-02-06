import * as actionTypes from './actionTypes'


const initialState = {
  movies : [],
  counter : 0
}

const reducer = (state = initialState,action) => {

  switch(action.type) {
    case actionTypes.ADD_MOVIE:
      return {
        ...state,
        movies : state.movies.concat(action.movie)
      }
  }

  return state
}

export default reducer
