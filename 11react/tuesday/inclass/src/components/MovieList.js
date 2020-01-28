import React, { Component } from "react";


class MovieList extends Component {

    render() {

        const movieItems = this.props.movies.map((movie) => {
            return (
                <li key={movie.imdbID}>{movie.Title}
                    <img src={movie.Poster} />
                </li>
            )
        })
    
        return (
            <div>{movieItems}</div>
        )
    }
}

export default MovieList