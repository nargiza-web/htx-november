import React, {Component} from 'react'
import { connect } from 'react-redux'

//import * as actionTypes from '../store/actionTypes'
import * as actionCreators from '../store/actionCreators'

class AddMovie extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movie : {}
    }

  }

  handleTextChange = (e) => {

    console.log(e.target.name)
    console.log(e.target.value)

    this.setState({
        movie : {
          ...this.state.movie,
          [e.target.name] : e.target.value
        }
    })

  }

  render() {
    return(
      <div>
      <h1>Add Movie</h1>
      <input name = "title" onChange={this.handleTextChange} type="text" placeholder="Movie Title"/>
      <input name = "year" onChange={this.handleTextChange} type="text" placeholder="Movie Year"/>
      <button onClick={() => this.props.onSaveMovie(this.state.movie)}>Save</button>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies : state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveMovie : (movie) => dispatch(actionCreators.addMovie(movie))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddMovie)
