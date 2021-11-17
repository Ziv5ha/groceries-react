import { Component } from "react";


export default class GItem extends Component{
  // constructor(props){
  //   super(props)
  // }
  render(){
    return(
        <li className = {'g-item'} onClick={this.props.onClick}>
            {this.props.item}
        </li>
    )
  }
}