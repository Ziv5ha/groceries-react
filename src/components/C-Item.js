import { Component } from "react";


export default class CItem extends Component{
    purchase = ({target}) => {
        target.classList.toggle('purchased')
    }
    render(){
    return(
        <li className = {'c-item'} onClick={this.purchase}>
            {this.props.counter}. {this.props.item}
        </li>
    )
  }
}