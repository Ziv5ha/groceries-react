import { Component } from "react";
import Footer from "./components/Footer";
import Header from './components/Header'
import Main from "./components/main";


export default class App extends Component{
  // constructor(props){
  //   super(props)
  // }
  render(){
    return(
      <div>
        <Header />
        <Main/>
        <Footer />
      </div>
    )
  }
}
