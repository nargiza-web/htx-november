import React, { Component } from 'react';

class Movie extends Component {

  componentDidMount() {

    fetch('')
    .then(response => response.json())
    .then((json) => {
      console.log(json)
    })

  }

  render() {
    return (
      <div className="movieList">
        <h1>Hello Movie</h1>

      </div>
    );
  }
}

export default Movie;
