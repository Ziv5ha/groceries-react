import { Component } from "react";
import icon from '../images/cart-icon.png'
import CItem from "./C-Item";

export default class Cart extends Component{
processList = () => {
    try {
        const itemArr = this.props.cart
        const uniq = [...new Set(this.props.cart)]
        const res = uniq.map(uniqItem => {
            let counter = 0
            itemArr.forEach(rawItem => {
                if (uniqItem === rawItem) counter++
            })
            return {item: uniqItem, counter}
        })
        return res
    } catch (error) {
        return []
    }
}
render(){
    const listItems = this.processList().map(({item, counter}, index) => <CItem key={index} item={item} counter={counter}/>)
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