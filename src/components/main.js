import { Component } from "react";
import Groceries from "./Groceries";
import Cart from './Cart'
import trash from '../images/trash-icon.png'

const groceriesData = ['Strawberry', 'Blueberry', 'Orange', 'Banana', 'Apple', 'Carrot', 'Celery', 'Mushroom', 'Green', 'Pepper', 'Eggs', 'Cheese', 'Butter', 'Chicken', 'Beef', 'Pork', 'Fish', 'Rice', 'Pasta', 'Bread']

export default class Main extends Component{
constructor(props){
    super(props)
    this.state = {cart: []}
}
addToCart = ({target}) => {
    this.setState({ cart: [...this.state.cart, target.textContent] });
    // this.setState((prevState)=>prevState.cart.push(target.textContent))
}
clearCart = () => {
    this.setState({cart : []})
}
render(){
    return(
        <main className={'main'}>
            <Groceries groceries = {groceriesData} onClickFunc ={this.addToCart}/>
            <img className={'trash'} src={trash} alt='' onClick={this.clearCart}/>
            <Cart cart={this.state.cart}/>
        </main>
    )
}
}