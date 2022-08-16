import React, { Component } from "react";
import './App.css';
import Form from './Customer_Form';
import Form2 from "./Driver_Form";
import NavBar from './NavBar';

class App extends Component{
  render(){
    return (
      <div className="App">

          <div>
            <NavBar />
          </div>

          <page>
            <b><h1 style = {{marginTop: "40px"}}>Customer Registration</h1></b>
            <Form />
          </page>
          
          <b><h1 style = {{marginTop: "80px"}}>Driver Registration</h1></b>
          <Form2 />
      </div>
    )
  }
}

export default App;
