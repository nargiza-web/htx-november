import * as actionTypes from '../types/actionTypes'

export const loadMoviesActionCreator = (movies) => {
  return {
    type: actionTypes.LOAD_MOVIES,
    payload: movies
  }
}

export const loadMovies = () =>{
  return (dispatch) => {
    // you can access dispatch inside the action creators because of redux-thunk (middleware)
    
    fetch("http://www.omdbapi.com/?s=batman&apikey=564727fa")
        .then((response) => response.json())
        .then((json)=> {
          //json.Search contains all movies
          dispatch(loadMoviesActionCreator(json.Search))
        })
  }
}