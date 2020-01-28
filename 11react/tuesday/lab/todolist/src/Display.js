import React, {Component} from 'react'

class Display extends Component {
  render(){
    
    let taskItems = this.props.tasks.map(task => {
      return <li>{task}</li>
    })
    
    return(
      <div>
        {taskItems}
      </div>
    )
  }
}

export default Display