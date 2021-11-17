import { Component } from "react";
import icon from '../images/cart-icon.png'
import CItem from "./C-Item";

export default class Groceries extends Component{
constructor(props){
    super(props)
    this.state = {groceries: this.props.groceries}
}
processList = () => {
    try {
        const sorted = this.state.groceries.sort()
        const res = []
        let counter = 1
        for (let i = 0; i < sorted.length; i++) {
            if (sorted[i] === sorted[i+1]){
                counter++
            } else {
                res.push({item: sorted[i], counter})
                counter = 1
            }
        }
        return res
    } catch (error) {
        return []
    }
}
// this.setState()
render(){
    const listItems = this.processList().map((item, counter, index) => <CItem key={index} item={item} counter={counter}/>)
    return(
        <div className = {'cart'}>
            <h4><img src={icon} alt=''/>Cart</h4>
            <ul>
                {listItems}
            </ul>
        </div>

    )
}
}