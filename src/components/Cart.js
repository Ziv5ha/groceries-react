import { Component } from "react";
import icon from '../images/cart-icon.png'
import CItem from "./C-Item";

export default class Cart extends Component{
processList = () => {
    try {
        const rawArr = this.props.cart
        const uniq = [...new Set(this.props.cart)]
        const res = uniq.map(item => {
            let counter = 0
            rawArr.forEach(rawItem => {
                if (item === rawItem) counter++
            })
            return {item, counter}
        })
        return res
    } catch (error) {
        return []
    }
}
render(){
    const listItems = this.processList().map(({item, counter}, index) => <CItem key={index} item={item} counter={counter}/>)
    return(
        <div className = {'list'}>
            <h4><img src={icon} alt=''/>Cart</h4>
            <ul>
                {listItems}
            </ul>
        </div>

    )
}
}