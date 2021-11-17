import { Component } from "react";
import img from '../images/basket.png'

export default class App extends Component{
//   constructor(props){
//     super(props)
//   }
  render(){
    return(
        <header>
            <img src={img} alt=''/>
            <h2 className={'header'}>Hello, Basket</h2>
        </header>
    )
  }
}