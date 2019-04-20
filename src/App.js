import React, { Component } from 'react';
import logo from './logo.svg';
import{Navbar ,NavbarBrand} from "reactstrap";
import Menu from "./components/MenuComponent"
import './App.css';
import {DISHES} from "./shared/dishes"
import Main from "./components/MainComponent"
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES
    }
  }
  render() {
    return (
      <BrowserRouter>
      <div>
       <Main />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
