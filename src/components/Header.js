import { Component } from "react";
import img from '../images/basket.png'

export default class App extends Component{
  render(){
    return(
        <header className={'head'}>
            <img src={img} alt=''/>
            <h2>Hello, Basket</h2>
        </header>
    )
  }
}