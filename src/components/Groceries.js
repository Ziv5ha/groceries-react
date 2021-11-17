import { Component } from "react";
import GItem from "./G-Item";
import icon from '../images/groceries-icon.png'

export default class Groceries extends Component{
constructor(props){
    super(props)
    this.state = {groceries: this.props.groceries}
}
render(){
    const listItems = this.state.groceries.map((item, index) => <GItem key={index} item={item} />)
    return(
        <div className = {'groceries'}>
            <h4><img src={icon} alt=''/>Groceries</h4>
            <ul>
                {listItems}
            </ul>
        </div>

    )
}
}