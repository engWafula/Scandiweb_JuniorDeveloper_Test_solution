import React, { Component } from 'react'
import { Switch, BrowserRouter, Routes,Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'



export default class App extends Component {
  render() {
    return (
      <div>
        <div><Navbar/></div>

        <BrowserRouter>
        <Switch>
        <Route exact path="/">
        <HomePage />
          </Route>
          <Route exact path="/product">
        <Product />
          </Route>
          <Route exact path="/cart">
        <Cart />
          </Route>
        </Switch>
        </BrowserRouter>
      
      </div>
    )
  }
}



