import { Component } from "react";


export default class CItem extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
        <li className = {'c-item'}>
            {this.props.counter}. {this.props.item}
        </li>
    )
  }
}