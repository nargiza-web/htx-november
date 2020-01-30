import React, { Component } from 'react';

class PostDetails extends Component {

  componentDidMount() {
      console.log(this.props.match.params.postId)
  }

  render() {
    return (
       <h1>PostDetails</h1>
    )
  }
}

export default PostDetails;
