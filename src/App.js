import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state={
    pizzas: [],
    editedPizza: {}
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(data=>this.setState({pizzas: data}) )
  }

  editBtn= (obj)=>{
    this.setState({
      editedPizza: obj
    })
  }

  submitHandler=(obj, id) => {
    fetch(`http://localhost:3000/pizzas/${id}`, {
      method: "PATCH",
      headers: {
        "accepts": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        topping: obj.topping,
        size: obj.size,
        vegetarian: obj.vegetarian
      })
    })
    .then(response => response.json())
    .then(pizzaObj => {this.editArray(pizzaObj)})
  }

  editArray = (pizzaObj) => {
    let index = Number(pizzaObj.id) - 1 
    this.state.pizzas.splice(index, 1, pizzaObj)
      this.setState({
        pizzas: this.state.pizzas
      })
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm submitHandler={this.submitHandler} pizza={this.state.editedPizza}/>
        <PizzaList pizzas={this.state.pizzas} editBtn={this.editBtn}/>
      </Fragment>
    );
  }
}

export default App;
