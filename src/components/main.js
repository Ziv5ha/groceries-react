import { Component } from "react";
import Groceries from "./Groceries";
import Cart from './Cart'

const groceriesData = ['Strawberry', 'Blueberry', 'Orange', 'Banana', 'Apple', 'Carrot', 'Celery', 'Mushroom', 'Green', 'Pepper', 'Eggs', 'Cheese', 'Butter', 'Chicken', 'Beef', 'Pork', 'Fish', 'Rice', 'Pasta', 'Bread']

export default class Main extends Component{
constructor(props){
    super(props)
    this.state = {cart: []}
}
addToCart = ({target}) => {
    this.setState((prevState)=>prevState.cart.push(target.textContent))

}
render(){
    return(
        <main>
            <Groceries groceries = {groceriesData} onClickFunc ={this.addToCart}/>
            <Cart cart={this.state.cart}/>
        </main>
    )
}
}