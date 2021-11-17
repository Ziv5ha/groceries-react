import { Component } from "react";


export default class GItem extends Component{
  render(){
    return(
        <li className = {'item g-item'} onClick={this.props.onClick}>
            {this.props.item}
        </li>
    )
  }
}