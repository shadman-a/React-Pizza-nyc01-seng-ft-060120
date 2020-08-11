import React, { Component } from 'react'

class Pizza extends Component {

  render(){
    return(
      <tr>
        <td>{this.props.pizza.topping}</td>
        <td>{this.props.pizza.size}</td>
        <td>{this.props.pizza.vegetarian === true ?  "Yes" : "No"}</td>
        <td><button onClick={() => this.props.editBtn(this.props.pizza)} type="button" className="btn btn-primary">Edit Pizza</button></td>
      </tr>
    )
  }

}

export default Pizza
