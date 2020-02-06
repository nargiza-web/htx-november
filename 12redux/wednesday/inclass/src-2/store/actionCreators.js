
import * as actionTypes from './actionTypes'

export const addMovie = (movie) => {
  return {
    type : actionTypes.ADD_MOVIE,
    movie : movie
  }
}
